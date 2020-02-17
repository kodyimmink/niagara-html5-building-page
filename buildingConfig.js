//define equipment list the building here

const buildingLinks = {
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

const buildingEquipmentArray = [
    {
        type: "HHWS",
        ord: "station:|slot:/Drivers/NiagaraNetwork/PontiacCentralLLC1480/CRS1_MainCtrl/CRS1_MainCtrl/points/HHWS"
    },
    {
        type: "DATwZNT",
        ord: "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/PCC_1/points/HV_10"
    },
    {
        type: "DATwZNT",
        ord: "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/PCC_1/points/HV_11"
    },
    {
        type: "RTUwZNs",
        ord: "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/PCC_1/points/RTU_5",
        vavsOrd: "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/PCC_1/points/RTU5_VAVs"
    },
    {
        type: "RTUwZNs",
        ord: "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/PCC_1/points/RTU_6",
        vavsOrd: "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/PCC_1/points/RTU6_VAVs"
    },
    {
        type: "RTUwZNs",
        ord: "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/PCC_1/points/RTU_7",
        vavsOrd: "station:|slot:/Drivers/NiagaraNetwork/UnitedShore/UnitedShorePCC/PCC_1/points/RTU7_VAVs"
    }
]