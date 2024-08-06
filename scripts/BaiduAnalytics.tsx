import React from "react";
import Script from "next/script";

const BaiduAnalytics: React.FC = () => {
  return (
    <Script id="baidu-analytics" strategy="afterInteractive">
      {`
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?d8e8ecf669c47dc2512d3f1417e761f9";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `}
    </Script>
  );
};

export default BaiduAnalytics;
