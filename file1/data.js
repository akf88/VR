var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5071513575402307,
          "pitch": -0.0868326166930462,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.15390302189997662,
          "pitch": 0,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-",
      "name": "多稜宮",
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
      "faceSize": 1664,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10856127026312556,
          "pitch": 0.11948927710696822,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": 0.2801868362077098,
          "pitch": 0.11275155535692427,
          "rotation": 3.141592653589793,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.15487011619838142,
          "pitch": -0.2751492334908363,
          "title": "多稜宮",
          "text": "<span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">修建於1492年，是莫斯科現存的世俗建築中歷史最古老的建築。</span>"
        }
      ]
    },
    {
      "id": "2-",
      "name": "軍械庫",
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
      "faceSize": 1664,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2591478901680997,
          "pitch": -0.07955613793646421,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": 0.056922707600005396,
          "pitch": 0,
          "rotation": 3.141592653589793,
          "target": "3-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-",
      "name": "文化宮",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 3.141592653589793,
          "target": "4-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2",
      "name": "文化宮2",
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
      "faceSize": 1664,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "克里姆林宮",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
