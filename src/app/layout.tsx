import 'modern-normalize/modern-normalize.css';
import '@/scss/globals.scss';
import React from "react";
import Header from "@/components/header";
import Script from 'next/script'

export const metadata = {
  title: 'Земля у Озера',
  description: 'Продажа участков',
}

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <html lang="en">
        <body className="page">
            <Header/>
            {children}

            <Script id="yandex-metrica" strategy="afterInteractive">
                {`
               (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
               m[i].l=1*new Date();
               for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
               k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
               ym(93806223, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
               });
            `}
            </Script>
        </body>
    </html>
  )
}
