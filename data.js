var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-doorkitchen",
      "name": "Main Door/Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12544001200312316,
          "pitch": 0.05392277816809887,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": -0.4629094329632455,
          "pitch": 0.06422950866064525,
          "rotation": 4.71238898038469,
          "target": "3-corridor"
        },
        {
          "yaw": 0.14603147924781013,
          "pitch": 0.09647376934998064,
          "rotation": 2.356194490192345,
          "target": "2-main-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9422826596674767,
          "pitch": 0.16708430116862694,
          "rotation": 0,
          "target": "2-main-balcony"
        },
        {
          "yaw": -1.4396707249385496,
          "pitch": 0.38588269647551066,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        },
        {
          "yaw": -2.997090533822753,
          "pitch": 0.1414547581546337,
          "rotation": 0,
          "target": "0-main-doorkitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-balcony",
      "name": "Main Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6362382944405418,
          "pitch": 0.08989784193757089,
          "rotation": 3.141592653589793,
          "target": "1-living-room"
        },
        {
          "yaw": -2.5130750179807606,
          "pitch": 0.07890277958700764,
          "rotation": 4.71238898038469,
          "target": "0-main-doorkitchen"
        },
        {
          "yaw": -1.9910729923315493,
          "pitch": 0.10075304443079425,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8041925794854503,
          "pitch": 0.11321438455976107,
          "rotation": 0,
          "target": "4-bedroom-1"
        },
        {
          "yaw": 2.493986021866948,
          "pitch": 0.24367213744975658,
          "rotation": 12.566370614359176,
          "target": "7-bedroom-2"
        },
        {
          "yaw": -1.4830452225436304,
          "pitch": 0.04761467344795811,
          "rotation": 0,
          "target": "8-main-master-room"
        },
        {
          "yaw": -0.3375848898169167,
          "pitch": 0.13474025051414706,
          "rotation": 0,
          "target": "2-main-balcony"
        },
        {
          "yaw": -0.44558824011853027,
          "pitch": 0.2793310055698921,
          "rotation": 4.71238898038469,
          "target": "1-living-room"
        },
        {
          "yaw": 0.4667461242907187,
          "pitch": 0.1202828439218937,
          "rotation": 7.853981633974483,
          "target": "0-main-doorkitchen"
        },
        {
          "yaw": 1.8880002513087444,
          "pitch": 0.14492388426448066,
          "rotation": 0,
          "target": "6-main-bath"
        },
        {
          "yaw": -1.497054054453569,
          "pitch": 0.30333691403287233,
          "rotation": 3.141592653589793,
          "target": "8-main-master-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6536428314707088,
          "pitch": 0.15639129042912714,
          "rotation": 0,
          "target": "5-bedroom-1-balcony"
        },
        {
          "yaw": 0.99907325550803,
          "pitch": 0.2780343365330147,
          "rotation": 10.210176124166829,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-1-balcony",
      "name": "Bedroom 1 Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1956897527055403,
          "pitch": 0.20036335137867667,
          "rotation": 3.141592653589793,
          "target": "4-bedroom-1"
        },
        {
          "yaw": 0.9143125039344859,
          "pitch": 0.15105360044644556,
          "rotation": 5.497787143782138,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-main-bath",
      "name": "Main Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.41149487895607706,
          "pitch": 0.4368019971768593,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        },
        {
          "yaw": -1.0078546171332388,
          "pitch": 0.23952188185967316,
          "rotation": 4.71238898038469,
          "target": "4-bedroom-1"
        },
        {
          "yaw": -0.7117252631205595,
          "pitch": 0.10482612517317946,
          "rotation": 4.71238898038469,
          "target": "7-bedroom-2"
        },
        {
          "yaw": -0.4783325590702461,
          "pitch": 0.1720195785320815,
          "rotation": 6.283185307179586,
          "target": "8-main-master-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.19659485979870617,
          "pitch": 0.27530434253045755,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-main-master-room",
      "name": "Main Master Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8826389744629672,
          "pitch": 0.2683164038946195,
          "rotation": 0,
          "target": "9-master-room-bath"
        },
        {
          "yaw": -1.6719554177376814,
          "pitch": 0.12419971454592016,
          "rotation": 0,
          "target": "10-master-room"
        },
        {
          "yaw": 1.2841604257096524,
          "pitch": 0.1483839480846072,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        },
        {
          "yaw": -2.671770006664058,
          "pitch": 0.11913330199509176,
          "rotation": 4.71238898038469,
          "target": "11-master-room-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-room-bath",
      "name": "Master Room Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21969295842438008,
          "pitch": 0.08193896758757901,
          "rotation": 0,
          "target": "8-main-master-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-master-room",
      "name": "Master Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.92715755725151,
          "pitch": 0.097953407701862,
          "rotation": 0,
          "target": "2-main-balcony"
        },
        {
          "yaw": 1.5553937405429004,
          "pitch": 0.2832575707303526,
          "rotation": 3.141592653589793,
          "target": "8-main-master-room"
        },
        {
          "yaw": 1.5559953095177175,
          "pitch": 0.13440454255072787,
          "rotation": 0,
          "target": "3-corridor"
        },
        {
          "yaw": 1.8838366146206473,
          "pitch": 0.08166330484693773,
          "rotation": 1.5707963267948966,
          "target": "9-master-room-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-master-room-balcony",
      "name": "Master Room Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0995788898843308,
          "pitch": 0.0993340677947323,
          "rotation": 0,
          "target": "10-master-room"
        },
        {
          "yaw": 1.5476090486145617,
          "pitch": 0.08478033423292608,
          "rotation": 1.5707963267948966,
          "target": "8-main-master-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "1264sqft-F series",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
