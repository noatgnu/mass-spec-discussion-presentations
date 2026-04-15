export const section = {
    title: "The Problem: Metadata in Proteomics",
    slides: `
<section>
    <h2>The Proteomics Data Explosion</h2>
    <p style="font-size:0.75em; margin-bottom: 8px;">Annual dataset submissions to ProteomeXchange resources (2012–2024)</p>
    <canvas id="px-chart" width="820" height="340" style="display:block; margin: 0 auto;"></canvas>
    <p style="font-size: 0.55em; color: #888; margin-top: 6px;">
        Source: proteomecentral.proteomexchange.org — counted by announce date as of 2026-04-13. 2025 count is partial.
    </p>
    <script>
    (function() {
        const data = [
            { year: '2012', count: 26    },
            { year: '2013', count: 119   },
            { year: '2014', count: 332   },
            { year: '2015', count: 685   },
            { year: '2016', count: 1029  },
            { year: '2017', count: 1171  },
            { year: '2018', count: 1863  },
            { year: '2019', count: 2081  },
            { year: '2020', count: 3016  },
            { year: '2021', count: 4853  },
            { year: '2022', count: 6462  },
            { year: '2023', count: 5607  },
            { year: '2024', count: 12077 },
            { year: '2025', count: 9393  }
        ];

        let animFrame = null;
        const DURATION = 1200;

        function easeOutQuart(t) {
            return 1 - Math.pow(1 - t, 4);
        }

        function drawFrame(progress) {
            const canvas = document.getElementById('px-chart');
            if (!canvas) return;
            const dpr = window.devicePixelRatio || 1;
            const W = canvas.offsetWidth  || 820;
            const H = canvas.offsetHeight || 340;
            canvas.width  = W * dpr;
            canvas.height = H * dpr;
            canvas.style.width  = W + 'px';
            canvas.style.height = H + 'px';
            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);

            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            const gold    = isLight ? '#0077be' : '#ffb400';
            const goldDim = isLight ? '#005a8d' : '#cc9000';
            const gridCol = isLight ? 'rgba(0,119,190,0.12)' : 'rgba(255,180,0,0.12)';
            const textCol = isLight ? '#334e68' : '#aaa';

            const padL = 62, padR = 20, padT = 18, padB = 46;
            const chartW = W - padL - padR;
            const chartH = H - padT - padB;
            const maxVal = 14000;
            const barW   = chartW / data.length * 0.55;
            const gap    = chartW / data.length;

            ctx.clearRect(0, 0, W, H);

            const gridLines = [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000];
            ctx.font = '10px monospace';
            ctx.fillStyle = textCol;
            ctx.textAlign = 'right';
            gridLines.forEach(v => {
                const y = padT + chartH - (v / maxVal) * chartH;
                ctx.strokeStyle = gridCol;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(padL, y);
                ctx.lineTo(padL + chartW, y);
                ctx.stroke();
                ctx.fillText(v === 0 ? '0' : (v / 1000).toFixed(0) + 'k', padL - 6, y + 4);
            });

            ctx.strokeStyle = goldDim;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(padL, padT);
            ctx.lineTo(padL, padT + chartH);
            ctx.lineTo(padL + chartW, padT + chartH);
            ctx.stroke();

            data.forEach((d, i) => {
                const barDelay = i / data.length * 0.4;
                const barProgress = Math.min(1, Math.max(0, (progress - barDelay) / (1 - barDelay)));
                const easedProgress = easeOutQuart(barProgress);

                const x = padL + i * gap + gap * 0.225;
                const fullBarH = (d.count / maxVal) * chartH;
                const barH = fullBarH * easedProgress;
                const y = padT + chartH - barH;

                const grad = ctx.createLinearGradient(x, padT + chartH - fullBarH, x, padT + chartH);
                grad.addColorStop(0, gold);
                grad.addColorStop(1, isLight ? 'rgba(0,119,190,0.15)' : 'rgba(255,180,0,0.15)');
                ctx.fillStyle = grad;
                ctx.fillRect(x, y, barW, barH);

                ctx.font = '10px monospace';
                ctx.fillStyle = textCol;
                ctx.textAlign = 'center';
                ctx.fillText(d.year, x + barW / 2, padT + chartH + 14);

                if (barProgress >= 1 && d.count >= 3000) {
                    ctx.font = '9px monospace';
                    ctx.fillStyle = gold;
                    ctx.fillText((d.count / 1000).toFixed(1) + 'k', x + barW / 2, padT + chartH - fullBarH - 4);
                }
            });

            ctx.font = 'bold 10px monospace';
            ctx.fillStyle = goldDim;
            ctx.textAlign = 'left';
            ctx.fillText('DATASETS / YEAR', padL + 4, padT + 12);
        }

        function animate() {
            if (animFrame) cancelAnimationFrame(animFrame);
            const start = performance.now();
            function step(now) {
                const progress = Math.min((now - start) / DURATION, 1);
                drawFrame(progress);
                if (progress < 1) animFrame = requestAnimationFrame(step);
            }
            animFrame = requestAnimationFrame(step);
        }

        function draw() { drawFrame(1); }

        if (typeof Reveal !== 'undefined') {
            Reveal.on('slidechanged', function(event) {
                if (event.currentSlide && event.currentSlide.querySelector('#px-chart')) {
                    setTimeout(animate, 100);
                }
            });
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', animate);
        } else {
            animate();
        }
        window.addEventListener('resize', draw);
    })();
    </script>
</section>

<section>
    <h2>Proteomics Experimental Metadata</h2>
    <p>Experimental metadata is routinely lost, inconsistently recorded</p>
    <table>
        <thead><tr><th>What Often Gets Lost</th></thead>
        <tbody>
            <tr><td>Organism and cell line info</td></tr>
            <tr><td>Instrument &amp; acquisition parameters</td></tr>
            <tr><td>Experimental conditions &amp; comparison factors</td></tr>
        </tbody>
    </table>
</section>

`
};
