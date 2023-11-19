const tradingViewConfig = {
    "symbols": [
        ["Apple", "AAPL|1D"],
        ["Microsoft", "MSFT|1D"],
        ["NASDAQ:TSLA|1D"],
        ["NASDAQ:NVDA|1D"]
    ],
    "chartOnly": false,
    "width": "100%",
    "height": "500",
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
    "gridLineColor": "rgba(209, 212, 220, 0.2)",
    "backgroundColor": "rgba(0, 0, 0, 0)",
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
};

// Function to embed TradingView widget
function embedTradingViewWidget() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify(tradingViewConfig);
    document.querySelector('.tradingview-widget-container__widget').appendChild(script);
}

// Call the function to embed the widget when the DOM is ready
document.addEventListener('DOMContentLoaded', embedTradingViewWidget);
