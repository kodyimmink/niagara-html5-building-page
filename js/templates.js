//const template_DATwTUs = '<div id={{idName}} class="col pl-2 pt-2"><div class="card card-size"><a class="card-link" href="{{unitLink}}"><div style="text-align: center;" class="card-body"><h3 class="card-title"><b>{{unitName}}</b></h3><hr><div class="d-inline"><h5 class="d-inline">Occupancy Status: {{occupancyStatus}}</h5></div><hr><div class="d-inline"><h5 class="d-inline">Discharge Temp: <h5 class="d-inline da-temp-color">{{dischargeAirTemp}} °F</h5></div><hr><div class="row"><div class="col"><h5 class="d-inline">Lowest Zone Temp: <h5 class="d-inline zn-temp-color">{{lowZoneTemp}} °F</h5></div><div class="col veritcal-seperator"><h5 class="d-inline">Highest Zone Temp: <h5 class="d-inline zn-temp-color">{{highZoneTemp}} °F</h5></div></div><div class="row pt-2"><div class="col"><h5 class="d-inline">Zone Performance: <h5 class="d-inline zn-perf-color">{{zonePerformance}}%</h5></div></div></div></a></div></div>'

const template_DATwZNT = '<div class="col pl-2 pt-2"><div class="card card-size"><a class="card-link" href="{{unitLink}}"><div style="text-align: center;" class="card-body"><h3 class="card-title"><b>{{unitName}}</b></h3><hr><div class="d-inline"><h5 class="d-inline">Occupancy Status: {{occupancyStatus}}</h5></div><hr><div class="d-inline"><h5 class="d-inline">Discharge Temp: <h5 class="d-inline da-temp-color">{{dischargeAirTemp}} °F</h5></div><hr><div class="row"><div class="col"><h5 class="d-inline">Zone Temp: <h5 class="d-inline zn-temp-color">{{zoneTemp}} °F</h5></div></div></div></a></div></div>'

const template_HHWS = Handlebars.compile('<div class="col pl-2 pt-2"><div class="card card-size"><a class="card-link" href="{{unitLink}}"><div style="text-align: center;" class="card-body"><h3 class="card-title"><b>{{unitName}}</b></h3><hr><div class="d-inline"><h5 class="d-inline">System Enable: {{systemEnable}}</h5></div><hr><div class="d-inline"><h5 class="d-inline">Outside Air Temp: <h5 class="d-inline oat-color">{{outsideAirTemp}} °F</h5></div><hr><div class="d-inline"><h5 class="d-inline">Water Supply Temp: <h5 class="d-inline hhws-color">{{heatingWaterSupplyTemp}} °F</h5></div></div></a></div></div>')


const template_DATwTUs = 

            '<div id={{idName}} class="col card card-size m-2"> \n' +
                '<a class="card-link" href="{{unitLink}}"> \n' +
                    '<div style="text-align: center;" class="card-body"> \n' +
                        '<h3 id="unitName" class="card-title"><b>{{unitName}}</b></h3> \n' +
                        '<hr> \n' +
                        '<div class="d-inline"> \n' +
                            '<h5 class="d-inline">Occupancy Status: </h5><h5 id="occupancyStatus" class="d-inline good-color">{{occupancyStatus}}</h5> \n' +
                        '</div> \n' +
                        '<hr> \n' +
                        '<div class="d-inline"> \n' +
                            '<h5 class="d-inline">Discharge Temp: </h5><h5 id="dischargeAirTemp" class="d-inline cold-color">{{dischargeAirTemp}} °F</h5> \n' +
                        '</div> \n' +
                        '<hr> \n' +
                        '<div class="row"> \n' +
                            '<div class="col"> \n' +
                                '<h5 class="d-inline">Lowest Zone Temp: </h5><h5 id="lowZoneTemp" class="d-inline cold-color">{{lowZoneTemp}} °F</h5> \n' +
                            '</div> \n' +
                            '<div class="col veritcal-seperator"> \n' +
                                '<h5 class="d-inline">Highest Zone Temp: </h5><h5 id="highZoneTemp" class="d-inline cold-color">{{highZoneTemp}} °F</h5> \n' +
                            '</div> \n' +
                        '</div> \n' +
                        '<div class="row pt-2"> \n' +
                            '<div class="col"> \n' +
                                '<h5 class="d-inline">Zone Performance: </h5><h5 id="zonePerformance" class="d-inline cold-color">{{zonePerformance}}%</h5> \n' +
                            '</div> \n' +
                        '</div> \n' +
                    '</div> \n' +
                '</a> \n' +
                '<script>updateSubscription({{subscriptionName}})</script> \n' +
            '</div>'