# chart-server

## introduction

forked from <https://github.com/crazyminy/chart-server>

Server side graph rendering is done by this simple API server

What is supported:

- echarts
- more to come

How it works:

Puppeteer is used as a headless browser to render the picture, and the base64 code of the generated picture is returned.

### echarts

request

```json

{
   "width":700,
   "height":600,
   "options":{
      "title":{
         "text":"ECharts demo"
      },
      "tooltip":{
         
      },
      "legend":{
         "data":[
            "fruits"
         ]
      },
      "xAxis":{
         "data":[
            "apple",
            "orange",
            "banana",
            "mango",
            "guava",
            "lychee"
         ]
      },
      "yAxis":{
         
      },
      "series":[
         {
            "name":"amount",
            "type":"bar",
            "data":[
               5,
               20,
               36,
               10,
               10,
               20
            ]
         }
      ]
   }
}
```

Response

```base64
data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22700%22%20height%3D%22600%22%20style%3D%22user-select%3A%20none%3B%20position%3A%20absolute%3B%20left%3A%200px%3B%20top%3A%200px%3B%22%3E%0A%0D%3Cg%3E%0A%0D%3Crect%20width%3D%22700%22%20height%3D%22600%22%20x%3D%220%22%20y%3D%220%22%20id%3D%220%22%20style%3D%22fill%3A%20transparent%3B%22%3E%0A%0D%3C%2Frect%3E%0A%0D%3C%2Fg%3E%0A%0D%3Cg%3E%0A%0D%3Cpath%20d%3D%22M%2070%20530.5%20L%20630%20530.5%22%20fill%3D%22none%22%20stroke%3D%22%23E0E6F1%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%2070%20412.5%20L%20630%20412.5%22%20fill%3D%22none%22%20stroke%3D%22%23E0E6F1%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%2070%20295.5%20L%20630%20295.5%22%20fill%3D%22none%22%20stroke%3D%22%23E0E6F1%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%2070%20177.5%20L%20630%20177.5%22%20fill%3D%22none%22%20stroke%3D%22%23E0E6F1%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%2070%2060.5%20L%20630%2060.5%22%20fill%3D%22none%22%20stroke%3D%22%23E0E6F1%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%2070%20530.5%20L%20630%20530.5%22%20fill%3D%22none%22%20stroke%3D%22%236E7079%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22round%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%2070.5%20530%20L%2070.5%20535%22%20fill%3D%22none%22%20stroke%3D%22%236E7079%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20163.5%20530%20L%20163.5%20535%22%20fill%3D%22none%22%20stroke%3D%22%236E7079%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20256.5%20530%20L%20256.5%20535%22%20fill%3D%22none%22%20stroke%3D%22%236E7079%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20350.5%20530%20L%20350.5%20535%22%20fill%3D%22none%22%20stroke%3D%22%236E7079%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20443.5%20530%20L%20443.5%20535%22%20fill%3D%22none%22%20stroke%3D%22%236E7079%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20536.5%20530%20L%20536.5%20535%22%20fill%3D%22none%22%20stroke%3D%22%236E7079%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20630.5%20530%20L%20630.5%20535%22%20fill%3D%22none%22%20stroke%3D%22%236E7079%22%20stroke-width%3D%221%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C62%2C530)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22end%22%20x%3D%220%22%20y%3D%220%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3E0%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C62%2C412.5)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22end%22%20x%3D%220%22%20y%3D%220%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3E10%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C62%2C295)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22end%22%20x%3D%220%22%20y%3D%220%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3E20%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C62%2C177.5)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22end%22%20x%3D%220%22%20y%3D%220%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3E30%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C62%2C60)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22end%22%20x%3D%220%22%20y%3D%220%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3E40%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C116.6667%2C538)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22middle%22%20x%3D%220%22%20y%3D%226%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3Eapple%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C210%2C538)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22middle%22%20x%3D%220%22%20y%3D%226%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3Eorange%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C303.3333%2C538)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22middle%22%20x%3D%220%22%20y%3D%226%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3Ebanana%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C396.6667%2C538)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22middle%22%20x%3D%220%22%20y%3D%226%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3Emango%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C490%2C538)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22middle%22%20x%3D%220%22%20y%3D%226%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3Eguava%3C%2Ftext%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%236E7079%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C583.3333%2C538)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22middle%22%20x%3D%220%22%20y%3D%226%22%20style%3D%22font%3A%2012px%20sans-serif%3B%22%3Elychee%3C%2Ftext%3E%0A%0D%3Cpath%20d%3D%22M%2084.4667%20530%20L%20148.8667%20530%20L%20148.8667%20471.25%20L%2084.4667%20471.25%20L%2084.4667%20530%22%20fill%3D%22%235470c6%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20177.8%20530%20L%20242.2%20530%20L%20242.2%20295%20L%20177.8%20295%20L%20177.8%20530%22%20fill%3D%22%235470c6%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20271.1333%20530%20L%20335.5333%20530%20L%20335.5333%20107%20L%20271.1333%20107%20L%20271.1333%20530%22%20fill%3D%22%235470c6%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20364.4667%20530%20L%20428.8667%20530%20L%20428.8667%20412.5%20L%20364.4667%20412.5%20L%20364.4667%20530%22%20fill%3D%22%235470c6%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20457.8%20530%20L%20522.2%20530%20L%20522.2%20412.5%20L%20457.8%20412.5%20L%20457.8%20530%22%20fill%3D%22%235470c6%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20551.1333%20530%20L%20615.5333%20530%20L%20615.5333%20295%20L%20551.1333%20295%20L%20551.1333%20530%22%20fill%3D%22%235470c6%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20-5%20-5%20L%205%20-5%20L%205%205%20L%20-5%205%20L%20-5%20-5%22%20fill%3D%22rgba(0%2C0%2C0%2C0)%22%20fill-opacity%3D%221%22%20stroke%3D%22%23ccc%22%20stroke-width%3D%220%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C350%2C5)%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Cpath%20d%3D%22M%20-5%20-5%20L%20127.0273%20-5%20L%20127.0273%2023%20L%20-5%2023%20L%20-5%20-5%22%20fill%3D%22rgba(0%2C0%2C0%2C0)%22%20fill-opacity%3D%221%22%20stroke%3D%22%23ccc%22%20stroke-width%3D%220%22%20paint-order%3D%22fill%22%20stroke-opacity%3D%221%22%20stroke-dasharray%3D%22%22%20stroke-linecap%3D%22butt%22%20stroke-miterlimit%3D%2210%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C5%2C5)%22%3E%0A%0D%3C%2Fpath%3E%0A%0D%3Ctext%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%23464646%22%20fill-opacity%3D%221%22%20stroke%3D%22none%22%20transform%3D%22matrix(1%2C0%2C0%2C1%2C5%2C5)%22%20dominant-baseline%3D%22central%22%20text-anchor%3D%22start%22%20x%3D%220%22%20y%3D%229%22%20style%3D%22font%3A%20bold%2018px%20sans-serif%3B%22%3EECharts%20demo%3C%2Ftext%3E%0A%0D%3C%2Fg%3E%0A%0D%3C%2Fsvg%3E
```

Port

The service runs on port 13705 for now. Will add configurable port later on
<http://localhost:13705/echarts>

Milestones

- GRPC support? maybe

- D3.js ? maybe

- amcharts ? maybe

- configurable http port
