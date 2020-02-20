//Unit type definitions
const DATwTUs = 'DATwTUs';
const DATwZNT = 'DATwZNT';
const HHWS = 'HHWS';

//define equipment list the building here

const buildingLinks = {
    "buildingName": "United Shore · Pontiac Central Complex",
    "siteLink" : "station:|slot:/Drivers/NiagaraNetwork/UnitedShore",
    "buildingLink" : "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC",
    "alarmsLink" : "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/Alarms",
    "reportsLink": "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/Reports",
    "schedulesLink": "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/Schedules",
    "diagnosticsLink": "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/Diagnostics",
    "floorplansLink": "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/SiteMap",
    "maximoLink": "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC",
    "corrigoLink": "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC",
    "docstoreLink": "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC",
    "bmsSupportLink": "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC",
}

const buildingEquipment = [
    {
        type: HHWS,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/HHWS"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/AC_1"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/ERV_1"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/HV_1"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/ECS_1"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/ECS_2"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/ECS_3"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/ECS_4"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/ECS_6"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/ECS_7"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/FCU_1"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/FCU_2"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/FCU_3"
    },
    {
        type: DATwZNT,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/FCU_4"
    },
    {
        type: DATwTUs,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/AC_2",
        secondaryOrd: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/AC2_VAVs"
    },
    {
        type: DATwTUs,
        ord: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/AC_3",
        secondaryOrd: "station:|slot:/Drivers/NiagaraNetwork/CityOfGrossePointeWoods/CityOfGPW/City_Of_GPW/points/AC3_VAVs"
    },
]