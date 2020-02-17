//CONSTANTS
const API_URL = "https://yourbuilding.ksv.us/na";
const BASE_URL = "https://yourbuilding.ksv.us/ord/";


function generateNavBarLinks(){
    document.getElementById("logoLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.buildingLink))
    document.getElementById("siteLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.siteLink))
    document.getElementById("buildingLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.buildingLink))
    document.getElementById("alarmsLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.alarmsLink))
    document.getElementById("reportsLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.reportsLink))
    document.getElementById("schedulesLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.schedulesLink))
    document.getElementById("diagnosticsLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.diagnosticsLink))
    document.getElementById("floorplansLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.floorplansLink))
    document.getElementById("maximoLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.maximoLink))
    document.getElementById("corrigoLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.corrigoLink))
    document.getElementById("docstoreLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.docstoreLink))
    document.getElementById("bmsSupportLink").setAttribute("href", encodeURI(BASE_URL + buildingLinks.bmsSupportLink))
}

//Populate Navigation bar with links specific to building
generateNavBarLinks()


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
            'Content-Type': 'text/plain'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}


buildingEquipmentArray.forEach(unit => {
    let dataRequests = {
        "requests": []
    }
    
    if(unit.type === 'RTUwZNs'){
        dataRequests.requests.push(
            //Unit Name
            {
                "message": "GetValue",
                "node": unit.ord + "/Name",
                "data": "hs:curVal"
            },
            //Unit Status
            {
                "message": "GetValue",
                "node": unit.ord,
                "data": "msi:supplyFanStatus"
            },
            //Discharge Air Temp
            {
                "message": "GetValue",
                "node": unit.ord,
                "data": "msi:dischargeAirTemp"
            },
            //Low Zone Temp
            {
                "message": "GetValue",
                "node": unit.vavsOrd,
                "data": "msi:lowZoneTemp"
            },
            //High Zone Temp
            {
                "message": "GetValue",
                "node": unit.vavsOrd,
                "data": "msi:highZoneTemp"
            },
            //Zone Performance
            {
                "message": "GetValue",
                "node": unit.vavsOrd,
                "data": "msi:zonePerformance"
            }
        )
    }
    if(unit.type === 'DATwZNT'){

        dataRequests.requests.push(
            //Unit Name
            {
                "message": "GetValue",
                "node": unit.ord + "/Name",
                "data": "hs:curVal"
            },
            //Unit Status
            {
                "message": "GetValue",
                "node": unit.ord,
                "data": "msi:supplyFanStatus"
            },
            //Discharge Air Temp
            {
                "message": "GetValue",
                "node": unit.ord,
                "data": "msi:dischargeAirTemp"
            },
            //Zone Temp
            {
                "message": "GetValue",
                "node": unit.ord,
                "data": "msi:zoneTemp"
            }
        )
    }
    if(unit.type === 'HHWS'){

        dataRequests.requests.push(
            //Unit Name
            {
                "message": "GetValue",
                "node": unit.ord + "/Name",
                "data": "hs:curVal"
            },
            //System Enable
            {
                "message": "GetValue",
                "node": unit.ord + "",
                "data": "msi:systemEnable"
            },
            //Outside Air Temp
            {
                "message": "GetValue",
                "node": unit.ord,
                "data": "msi:outsideAirTemp"
            },
            //Heating Water Supply Temp
            {
                "message": "GetValue",
                "node": unit.ord,
                "data": "msi:heatingWaterSupplyTemp"
            }
        )
    }

    

    postData(API_URL, dataRequests)
    .then(
        data => {  
            console.log(data)
            if (unit.type === 'RTUwZNs'){
                $("#equipmentList").append(template_RTUwZNs({
                    unitLink: encodeURI(BASE_URL + unit.ord),
                    unitName: data.responses[0].value.split("{ok} @ def").shift(),
                    occupancyStatus:  data.responses[1].value,
                    dischargeAirTemp:  Math.floor(parseFloat(data.responses[2].value) * 10)/10,
                    lowZoneTemp:  Math.floor(parseFloat(data.responses[3].value) * 10)/10,
                    highZoneTemp:  Math.floor(parseFloat(data.responses[4].value) * 10)/10,
                    zonePerformance:  Math.floor(parseFloat(data.responses[5].value) * 10)/10
                }));

            }
            if (unit.type === 'DATwZNT'){
                $("#equipmentList").append(template_DATwZNT({
                    unitLink: encodeURI(BASE_URL + unit.ord),
                    unitName: data.responses[0].value.split("{ok} @ def").shift(),
                    occupancyStatus:  data.responses[1].value,
                    dischargeAirTemp:  Math.floor(parseFloat(data.responses[2].value) * 10)/10,
                    zoneTemp:  Math.floor(parseFloat(data.responses[3].value) * 10)/10
                }));
            }
            if (unit.type === 'HHWS'){
                $("#equipmentList").append(template_HHWS({
                    unitLink: encodeURI(BASE_URL + unit.ord),
                    unitName: data.responses[0].value.split("{ok} @ def").shift(),
                    systemEnable: data.responses[1].value,
                    outsideAirTemp: Math.floor(parseFloat(data.responses[2].value) * 10)/10,
                    heatingWaterSupplyTemp:  Math.floor(parseFloat(data.responses[3].value) * 10)/10
                }));
            }
            
        }
    )
})
