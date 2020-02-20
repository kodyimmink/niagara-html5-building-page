//CONSTANTS
const API_URL = "https://yourbuilding.ksv.us/na";
const BASE_URL = "https://yourbuilding.ksv.us/ord/";


//Populate Navigation bar with links specific to building
(function () {
    document.getElementById("logoLink").textContent = buildingLinks.buildingName
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
})();



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

function updateSubscription(subscriptionName){

    let subName = subscriptionName;
    console.log(subscriptionName)
    
    let subscriptionPollRequest = {
        requests: [
            {
                "message" : "PollSubscription",
                "name" : subscriptionName,
            }
        ]
    }

    //get subscription updates from api
    postData(API_URL, subscriptionPollRequest).then(data => {
        console.log(data)
        updateIncludes(data)
    })

    //keep points subscribed
    setTimeout(() => { updateSubscription(subName) }, 10000)
}

function updateColor(jqSelector, value){

    //number
    if (typeof value === "number" ){
        //cold
        if(value < 66){
            jqSelector.removeClass( "cold-color good-color hot-color" ).addClass( "cold-color" );
        }
        //good
        if(value >=66 && value <= 78){
            jqSelector.removeClass( "cold-color good-color hot-color" ).addClass( "good-color" );
        }
        //hot
        if(value > 78){
            jqSelector.removeClass( "cold-color good-color hot-color" ).addClass( "hot-color" );
        }
    }
    //boolean
    else{
        //good
        if(value === 'true'){
            jqSelector.removeClass( "cold-color good-color hot-color" ).addClass( "good-color" );
        }
        //hot
        if(value === 'false'){
            jqSelector.removeClass( "cold-color good-color hot-color" ).addClass( "hot-color" );
        }
    }

}

function updateIncludes(subscriptions) {

    subscriptions.responses.forEach(subscription => {

        if (subscription.type === DATwTUs) {
            let template = Handlebars.compile(template_DATwTUs);
            let idName = subscription.name.replace(/[^a-zA-Z ]/g, "");
            let unitOrd = encodeURI(BASE_URL + subscription.name);
            let unitName = (subscription.values.find(element => element.data === 'msi:name')).value.split("{ok} @ def").shift()
            let occupancyStatus = (subscription.values.find(element => element.data === 'msi:supplyFanStatus')).value
            let dischargeAirTemp = Math.floor((subscription.values.find(element => element.data === 'msi:dischargeAirTemp')).value * 10) / 10
            let lowZoneTemp = Math.floor((subscription.values.find(element => element.data === 'msi:lowZoneTemp')).value * 10) / 10
            let highZoneTemp = Math.floor((subscription.values.find(element => element.data === 'msi:highZoneTemp')).value * 10) / 10
            let zonePerformance = Math.floor((subscription.values.find(element => element.data === 'msi:zonePerformance')).value * 10) / 10
            
            //if element exists, update it
            if ( $(`#${idName}`).length === 1){

                $(`#${idName}`).find('#unitName').text(unitName);

                let occupancyStatusSelector = $(`#${idName}`).find('#occupancyStatus');
                occupancyStatusSelector.text(occupancyStatus);
                updateColor(occupancyStatusSelector, occupancyStatus);

                let dischargeAirTempSelector = $(`#${idName}`).find('#dischargeAirTemp');
                dischargeAirTempSelector.text(dischargeAirTemp + ' °F');
                updateColor(dischargeAirTempSelector, dischargeAirTemp);
                
                let lowZoneTempSelector = $(`#${idName}`).find('#lowZoneTemp');
                lowZoneTempSelector.text(lowZoneTemp + ' °F');
                updateColor(lowZoneTempSelector, lowZoneTemp);

                let highZoneTempSelector = $(`#${idName}`).find('#highZoneTemp');
                highZoneTempSelector.text(highZoneTemp + ' °F');
                updateColor(highZoneTempSelector, highZoneTemp);

                let zonePerformanceSelector = $(`#${idName}`).find('#zonePerformance');
                zonePerformanceSelector.text(zonePerformance + '%');
                updateColor(zonePerformanceSelector, zonePerformance)
                
            }
            else{
                $("#equipmentList").append(template({
                    subscriptionName: (subscription.name),
                    unitLink: unitOrd,
                    idName: idName,
                    unitName: unitName,
                    occupancyStatus: occupancyStatus,
                    dischargeAirTemp: dischargeAirTemp,
                    lowZoneTemp: lowZoneTemp,
                    highZoneTemp: highZoneTemp,
                    zonePerformance: zonePerformance
                }));
            }
            
        }
        //build for each type
        if (subscription.type === DATwZNT){

        }
        if (subscription.type === HHWS){

        }

    })

}

//Get initial subscription; subscription name is ord of equipment in config file
function getInitalSubscription(buildingEquipmentArray) {

    let dataRequestSubscriptions = {
        requests: []
    }

    let typeList = [];

    buildingEquipmentArray.forEach(unit => {

        let dataTags = [];
        let secondaryTags = [];
        let pointValues = [];

        //define data tags for each type of unit
        if (unit.type === DATwTUs) {
            dataTags = ["msi:name", "msi:supplyFanStatus", "msi:dischargeAirTemp"];
            secondaryTags = ["msi:lowZoneTemp", "msi:highZoneTemp", "msi:zonePerformance"];
            typeList.push(DATwTUs);
        }
        if (unit.type === DATwZNT) {
            dataTags = ["msi:name", "msi:supplyFanStatus", "msi:dischargeAirTemp", "msi:zoneTemp"];
            typeList.push(DATwZNT);
        }
        if (unit.type === HHWS) {
            dataTags = ["msi:name", "msi:systemEnable", "msi:outsideAirTemp", "msi:heatingWaterSupplyTemp"];
            typeList.push(HHWS);
        }

        //add point request for each data tag
        dataTags.forEach(dataTag => {
            pointValues.push({
                "message": "GetValue",
                "uid": unit.ord + '-' + dataTag,
                "node": unit.ord,
                "data": dataTag,
            })
        })

        //if unit has secondary ord add point request for each data tag
        if (secondaryTags.length != 0) {
            secondaryTags.forEach(dataTag => {
                pointValues.push({
                    "message": "GetValue",
                    "uid": unit.secondaryOrd + '-' + dataTag,
                    "node": unit.secondaryOrd,
                    "data": dataTag,
                })
            })
        }

        //add all subscriptions to data request
        dataRequestSubscriptions.requests.push({
            "message": "Subscribe",
            "name": unit.ord,
            "values": pointValues
        })
    })

    //subscribe to ords, format data and add type info once data request has returned
    postData(API_URL, dataRequestSubscriptions).then(response => {
        response.responses.forEach((subscription, index) => {
            subscription.type = typeList[index];
            })
        //build includes
        //return response
        updateIncludes(response);

    })
}


getInitalSubscription(buildingEquipment)

