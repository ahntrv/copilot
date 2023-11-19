// script.js

// Wrap the configuration in a variable
var tradingViewConfig = {
    "symbols": [
        ["Apple", "AAPL|1D"],
        ["Microsoft", "MSFT|1D"],
        ["NASDAQ:TSLA|1D"],
        ["NASDAQ:NVDA|1D"]
    ],
    "chartOnly": false,
    "width": "100%", /* Set the widget width to 100% */
    "height": "100%",
  "locale": "en",
  "colorTheme": "dark",
  "autosize": true,
  "showVolume": false,
  "showMA": false,
  "hideDateRanges": false,
  "hideMarketStatus": false,
  "hideSymbolLogo": false,
  "scalePosition": "right",
  "scaleMode": "Normal",
  "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
  "fontSize": "10",
  "noTimeScale": false,
  "valuesTracking": "1",
  "changeMode": "price-and-percent",
  "chartType": "area",
  "maLineColor": "#2962FF",
  "maLineWidth": 1,
  "maLength": 9,
  "gridLineColor": "rgba(240, 243, 250, 0.2)",
  "backgroundColor": "rgba(0, 0, 0, 1)",
  "widgetFontColor": "rgba(255, 255, 255, 1)",
  "lineWidth": 2,
  "lineType": 0,
  "dateRanges": [
    "1d|1",
    "1m|30",
    "3m|60",
    "12m|1D",
    "60m|1W",
    "ytd|1D"
  ]
}
  </script>
</div>
<!-- TradingView Widget END -->
};

// Now you can use the tradingViewConfig variable as needed