const iFade  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><line x1="4" y1="24" x2="24" y2="24" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.4"/><line x1="4" y1="4" x2="4" y2="24" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.4"/><rect x="5" y="10" width="4" height="14" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2;opacity:0.6"/><rect x="11" y="15" width="4" height="9" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2;opacity:0.4"/><rect x="17" y="19" width="4" height="5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2;opacity:0.25"/></svg>`;
const iFlask =`<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M11 4h6v9l5.5 11H5.5L11 13z" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="11" y1="4" x2="17" y2="4" style="stroke:var(--dx-gold-dim);stroke-width:1.5"/><line x1="7" y1="19" x2="21" y2="19" style="stroke:var(--dx-gold-dim);stroke-width:1;stroke-dasharray:2 2;opacity:0.5"/></svg>`;
const iExit  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="4" y="6" width="13" height="16" rx="1" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M17 14h7M21 11l3 3-3 3" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iDoc   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="5" y="4" width="18" height="20" rx="1" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="9" y1="10" x2="19" y2="10" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.6"/><line x1="9" y1="14" x2="17" y2="14" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.6"/><line x1="9" y1="18" x2="14" y2="18" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.6"/></svg>`;
const iCycle = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M7 14A7 7 0 1 1 14 21" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M17 18L14 21L17 24" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iDB    = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><ellipse cx="14" cy="8" rx="9" ry="3.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M5 8v12c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V8" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><ellipse cx="14" cy="14" rx="9" ry="3.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.4;stroke-dasharray:3 2"/></svg>`;
const iDots  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><line x1="4" y1="24" x2="24" y2="24" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.4"/><line x1="4" y1="4" x2="4" y2="24" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.4"/><circle cx="8" cy="20" r="1.5" style="fill:var(--dx-gold-dim)"/><circle cx="12" cy="15" r="1.5" style="fill:var(--dx-gold-dim)"/><circle cx="15" cy="11" r="2.5" style="fill:none;stroke:var(--dx-gold);stroke-width:1.5"/><line x1="17" y1="9" x2="21" y2="5" style="stroke:var(--dx-gold);stroke-width:1.5"/><circle cx="20" cy="17" r="1.5" style="fill:var(--dx-gold-dim)"/></svg>`;
const iLens  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><circle cx="12" cy="12" r="7" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="17" y1="17" x2="23" y2="23" style="stroke:var(--dx-gold);stroke-width:2;stroke-linecap:round"/></svg>`;

export const section = {
    title: "The Problem",
    slides: `

<section>
    <h2>A story that happens in every lab</h2>
    <svg viewBox="0 0 900 82" style="width:100%; height:auto; display:block; margin: 6px 0 16px 0;" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="46" font-family="monospace" font-size="9" letter-spacing="1" style="fill: var(--dx-gold)">EXPERIMENT</text>
        <text x="820" y="46" font-family="monospace" font-size="9" letter-spacing="1" style="fill: var(--dx-gold)">PUBLICATION</text>
        <path d="M 112 41 L 185 41" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold)"/>
        <path d="M 185 41 L 194 33 L 202 52 L 210 36 L 218 41" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <path d="M 218 41 L 292 41" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold); opacity:0.85"/>
        <path d="M 292 41 L 338 41" stroke-width="1" fill="none" stroke-dasharray="3 7" style="stroke: var(--dx-gold-dim); opacity:0.45"/>
        <path d="M 340 42 L 354 29 L 366 58 L 380 31 L 392 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <path d="M 392 42 L 432 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold); opacity:0.8"/>
        <path d="M 432 42 L 445 18 L 460 68 L 475 14 L 490 70 L 505 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <path d="M 505 42 L 565 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold); opacity:0.8"/>
        <path d="M 565 42 L 575 31 L 585 55 L 595 36 L 605 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <path d="M 605 42 L 652 42" stroke-width="1" fill="none" stroke-dasharray="2 8" style="stroke: var(--dx-gold-dim); opacity:0.4"/>
        <path d="M 654 43 L 661 36 L 669 51 L 676 39 L 683 43" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <path d="M 683 43 L 818 43" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold)"/>
        <circle cx="202" cy="52" r="2.5" style="fill: var(--dx-gold-dim); opacity:0.65"/>
        <circle cx="315" cy="41" r="2" style="fill: var(--dx-gold-dim); opacity:0.4"/>
        <circle cx="366" cy="58" r="2.5" style="fill: var(--dx-gold-dim); opacity:0.65"/>
        <circle cx="475" cy="14" r="3.5" style="fill: var(--dx-gold-dim); opacity:0.75"/>
        <circle cx="490" cy="70" r="3.5" style="fill: var(--dx-gold-dim); opacity:0.75"/>
        <circle cx="585" cy="55" r="2.5" style="fill: var(--dx-gold-dim); opacity:0.65"/>
        <circle cx="630" cy="42" r="2" style="fill: var(--dx-gold-dim); opacity:0.4"/>
    </svg>
    <div style="display: grid; grid-template-columns: 90px repeat(5, 1fr); gap: 0; font-size: 0.72em;">
        <div></div>
        <div style="padding: 12px 10px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none; text-align: center;">
            ${iFlask}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">01 · RUN</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Experiments run. Context lives in someone's head.</div>
        </div>
        <div style="padding: 12px 10px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none; text-align: center;">
            ${iExit}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">02 · MOVE ON</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">People graduate or move on. Their knowledge leaves with them.</div>
        </div>
        <div style="padding: 12px 10px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none; text-align: center;">
            ${iDoc}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">03 · SHARE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Results go out as static images. Readers can look, not explore.</div>
        </div>
        <div style="padding: 12px 10px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none; text-align: center;">
            ${iCycle}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">04 · REPEAT</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">The next project starts from scratch.</div>
        </div>
        <div style="padding: 12px 10px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); text-align: center; opacity: 0.75;">
            ${iFade}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">05 · RESULT</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Data becomes inaccessible. Findings cannot be reproduced or built upon.</div>
        </div>

        <div class="fragment" data-fragment-index="0" style="font-family: monospace; font-size: 0.72em; color: var(--dx-gold); text-align: right; padding: 5px 4px 5px 0; display: flex; align-items: center; justify-content: flex-end; border-top: 1px solid var(--dx-gold-dim); opacity: 0.85;">CUPCAKE</div>
        <div class="fragment" data-fragment-index="0" style="border-top: 1px solid var(--dx-gold-dim); padding: 5px 0;"><div style="background: var(--dx-gold-dim); height: 10px; margin-left: 3px;"></div></div>
        <div class="fragment" data-fragment-index="0" style="border-top: 1px solid var(--dx-gold-dim); padding: 5px 0;"><div style="background: var(--dx-gold-dim); height: 10px; margin-right: 3px;"></div></div>
        <div class="fragment" data-fragment-index="0" style="border-top: 1px solid var(--dx-gold-dim); padding: 5px 3px;"></div>
        <div class="fragment" data-fragment-index="0" style="border-top: 1px solid var(--dx-gold-dim); padding: 5px 3px;"><div style="background: var(--dx-gold-dim); height: 10px;"></div></div>
        <div class="fragment" data-fragment-index="0" style="border-top: 1px solid var(--dx-gold-dim); padding: 5px 3px;"></div>

        <div class="fragment" data-fragment-index="1" style="font-family: monospace; font-size: 0.72em; color: var(--dx-gold); text-align: right; padding: 4px 4px 4px 0; display: flex; align-items: center; justify-content: flex-end; border-top: 1px solid var(--dx-gold-dim); opacity: 0.85;">CURTAIN</div>
        <div class="fragment" data-fragment-index="1" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 3px;"></div>
        <div class="fragment" data-fragment-index="1" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 3px;"></div>
        <div class="fragment" data-fragment-index="1" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 3px;"><div style="background: var(--dx-gold-dim); height: 10px;"></div></div>
        <div class="fragment" data-fragment-index="1" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 3px;"></div>
        <div class="fragment" data-fragment-index="1" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 3px;"></div>

        <div class="fragment" data-fragment-index="2" style="font-family: monospace; font-size: 0.72em; color: var(--dx-gold); text-align: right; padding: 4px 4px 5px 0; display: flex; align-items: center; justify-content: flex-end; border-top: 1px solid var(--dx-gold-dim); opacity: 0.85;">CINDER</div>
        <div class="fragment" data-fragment-index="2" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 3px 5px;"></div>
        <div class="fragment" data-fragment-index="2" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 3px 5px;"></div>
        <div class="fragment" data-fragment-index="2" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 0 5px;"><div style="background: var(--dx-gold-dim); height: 10px; margin-left: 3px;"></div></div>
        <div class="fragment" data-fragment-index="2" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 0 5px;"><div style="background: var(--dx-gold-dim); height: 10px; margin-right: 3px;"></div></div>
        <div class="fragment" data-fragment-index="2" style="border-top: 1px solid var(--dx-gold-dim); padding: 4px 3px 5px;"></div>
    </div>
</section>
`
};
