import React, { useEffect, useRef, memo } from "react";

function LiveTradingChart() {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    // Clear any previous widget (important when hot reloading in dev)
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: false,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: "D",
      locale: "en",
      save_image: true,
      style: "1",
      symbol: "NASDAQ:AAPL", // <--- Change ticker here
      theme: "dark",
      timezone: "Etc/UTC",
      backgroundColor: "#0F0F0F",
      gridColor: "rgba(242, 242, 242, 0.06)",
      watchlist: [],
      withdateranges: true,
      compareSymbols: [],
      show_popup_button: true,
      popup_height: "650",
      popup_width: "1000",
      studies: [],
      autosize: false,   // disable auto resize
      height: 580,       // 👈 fixed height
      width: "100%",
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "580px", width: "100%" }} // 👈 lock container to 500px
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "100%", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">AAPL stock chart</span>

        </a>{" "}
        <span className="trademark">by TradingView</span>
      </div>
    </div>
  );
}

export default memo(LiveTradingChart);
