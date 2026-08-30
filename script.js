* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg: #050b14;
    --sidebar: #07101c;
    --card: #0d1724;
    --card-hover: #111e2d;
    --border: #1b2939;

    --text: #f1f5f9;
    --muted: #94a3b8;

    --purple: #7567ff;
    --green: #27d65c;
    --blue: #3b82f6;
    --orange: #f59e0b;
    --red: #ef4444;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--bg);
    color: var(--text);
}

button,
select {
    font-family: inherit;
}

a {
    text-decoration: none;
    color: inherit;
}

.app {
    min-height: 100vh;
    display: flex;
}


/* =========================
   SIDEBAR
========================= */

.sidebar {
    width: 220px;
    min-height: 100vh;
    background: var(--sidebar);
    border-right: 1px solid var(--border);

    display: flex;
    flex-direction: column;

    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
}

.logo {
    height: 64px;

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 0 24px;

    font-size: 22px;
    font-weight: 700;

    border-bottom: 1px solid var(--border);
}

.logo-icon {
    color: var(--purple);
    font-family: monospace;
    font-size: 20px;
}

.sidebar-nav {
    padding: 14px 12px;
}

.nav-item {
    height: 42px;

    display: flex;
    align-items: center;
    gap: 12px;

    padding: 0 12px;
    margin-bottom: 4px;

    border-radius: 7px;

    color: #c5cfdb;
    font-size: 14px;

    transition: 0.2s;
}

.nav-item span {
    width: 18px;
    text-align: center;
}

.nav-item:hover {
    background: #101d2c;
    color: white;
}

.nav-item.active {
    background: #2b267a;
    color: white;
}

.connect-section {
    margin-top: auto;
    padding: 20px 12px;
}

.connect-section > p {
    color: #94a3b8;
    font-size: 12px;
    margin-bottom: 10px;
    padding-left: 10px;
}

.account-card {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 12px;

    padding: 11px;

    margin-top: 8px;

    background: #0d1825;
    border: 1px solid #19283a;
    border-radius: 8px;

    color: white;
    text-align: left;

    cursor: pointer;
}

.account-card:hover {
    background: #122131;
}

.account-icon {
    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: #182536;
}

.account-card strong {
    display: block;
    font-size: 13px;
}

.account-card small {
    display: block;
    margin-top: 3px;
    color: var(--green);
    font-size: 11px;
}

.leetcode-icon {
    color: var(--orange);
}


/* =========================
   MAIN
========================= */

.main {
    width: calc(100% - 220px);
    margin-left: 220px;
}

.topbar {
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 28px;

    border-bottom: 1px solid var(--border);
    background: #07101b;
}

.top-nav {
    display: flex;
    gap: 32px;
    height: 100%;
}

.top-link {
    display: flex;
    align-items: center;

    position: relative;

    color: #b7c0cd;
    font-size: 14px;
}

.top-link:hover {
    color: white;
}

.top-link.active {
    color: #8c7fff;
}

.top-link.active::after {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    height: 2px;

    background: var(--purple);
}

.user-area {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 14px;
}

.theme-btn {
    border: 0;
    background: transparent;

    color: #cbd5e1;

    font-size: 21px;

    cursor: pointer;

    margin-right: 16px;
}

.user-avatar {
    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: #35306d;
    color: white;

    font-weight: bold;
}

.dropdown {
    color: #94a3b8;
}


/* =========================
   DASHBOARD
========================= */

.dashboard {
    padding: 16px;

    display: grid;

    grid-template-columns: 1.5fr 0.65fr 1.5fr;

    grid-auto-rows: min-content;

    gap: 12px;
}

.card {
    background: var(--card);
    border: 1px solid var(--border);

    border-radius: 10px;

    padding: 18px;

    transition: 0.2s;
}

.card:hover {
    border-color: #26384c;
    background: var(--card-hover);
}

.card h2 {
    font-size: 16px;
}

.card-label {
    color: #d6deea;
    font-size: 13px;
}


/* =========================
   PROFILE
========================= */

.profile-card {
    display: flex;
    align-items: center;

    gap: 18px;
}

.profile-avatar {
    width: 78px;
    height: 78px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: linear-gradient(135deg, #7567ff, #312c78);

    font-size: 28px;
    font-weight: bold;
}

.profile-info h1 {
    font-size: 22px;
    margin-bottom: 7px;
}

.profile-info p {
    color: #c1cad6;
    font-size: 14px;
}

.profile-meta {
    display: flex;
    gap: 18px;

    margin-top: 12px;

    color: #8d9bad;
    font-size: 11px;
}


/* =========================
   STREAK
========================= */

.streak-number {
    display: flex;
    align-items: center;

    gap: 8px;

    margin-top: 8px;
}

.streak-number span {
    font-size: 22px;
}

.streak-number strong {
    font-size: 34px;
}

.streak-number small {
    color: var(--green);
}

.streak-message {
    color: #9ba8b8;
    font-size: 12px;
    margin-top: 7px;
}


/* =========================
   STATS
========================= */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    margin-top: 15px;
}

.stat {
    text-align: center;
    border-right: 1px solid #1c2938;
}

.stat:last-child {
    border: none;
}

.stat strong {
    display: block;
    font-size: 21px;
}

.stat span {
    display: block;

    color: #8997a8;
    font-size: 11px;

    margin-top: 6px;
}


/* =========================
   HEATMAP
========================= */

.heatmap-card {
    grid-column: span 2;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.heatmap-total {
    color: #8c99a9;
    font-size: 11px;
}

.heatmap-total strong {
    color: #dce4ed;
}

.heatmap {
    margin-top: 18px;
}

.months {
    margin-left: 48px;

    display: flex;
    justify-content: space-around;

    color: #8996a6;
    font-size: 11px;

    margin-bottom: 8px;
}

.heatmap-body {
    display: flex;
    gap: 8px;
}

.days {
    display: grid;

    grid-template-rows: repeat(7, 14px);

    gap: 5px;

    color: #7e8b9b;
    font-size: 9px;

    align-items: center;
}

.squares {
    flex: 1;

    display: grid;

    grid-template-rows: repeat(7, 14px);
    grid-auto-flow: column;

    grid-auto-columns: 14px;

    gap: 5px;

    overflow: hidden;
}

.square {
    width: 14px;
    height: 14px;

    border-radius: 2px;

    background: #172534;
}

.square.level-1 {
    background: #145c37;
}

.square.level-2 {
    background: #19934c;
}

.square.level-3 {
    background: #25c75c;
}

.square.level-4 {
    background: #42ed6e;
}

.heatmap-footer {
    margin-top: 12px;
}

.legend {
    display: flex;
    align-items: center;
    gap: 5px;

    color: #7e8b9b;
    font-size: 9px;
}

.legend i {
    width: 12px;
    height: 12px;
    border-radius: 2px;
}

.legend .level-0 {
    background: #172534;
}

.legend .level-1 {
    background: #145c37;
}

.legend .level-2 {
    background: #19934c;
}

.legend .level-3 {
    background: #25c75c;
}

.legend .level-4 {
    background: #42ed6e;
}


/* =========================
   BREAKDOWN
========================= */

.breakdown-card {
    grid-column: span 1;
}

.donut-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;

    margin-top: 22px;
}

.donut {
    width: 140px;
    height: 140px;

    flex-shrink: 0;

    border-radius: 50%;

    background:
        conic-gradient(
            var(--green) 0 66%,
            var(--blue) 66% 95%,
            var(--orange) 95% 99%,
            #9b7bea 99% 100%
        );

    display: grid;
    place-items: center;
}

.donut::before {
    content: "";

    position: absolute;

    width: 92px;
    height: 92px;

    border-radius: 50%;

    background: var(--card);
}

.donut-center {
    position: relative;

    text-align: center;
}

.donut-center strong {
    display: block;
    font-size: 18px;
}

.donut-center span {
    color: #8b99a9;
    font-size: 11px;
}

.breakdown-list {
    width: 100%;
}

.breakdown-list div {
    display: grid;

    grid-template-columns: 10px 1fr auto;

    align-items: center;

    gap: 7px;

    margin: 10px 0;

    font-size: 11px;
}

.breakdown-list i {
    width: 8px;
    height: 8px;

    border-radius: 2px;
}

.green {
    background: var(--green);
}

.blue {
    background: var(--blue);
}

.orange {
    background: var(--orange);
}

.purple {
    background: #9b7bea;
}

.breakdown-list span {
    color: #a9b4c1;
}

.breakdown-list strong {
    color: #e2e8f0;
}


/* =========================
   ACTIVITY CARDS
========================= */

.activity-card {
    min-height: 305px;
}

.activity-title {
    display: flex;
    align-items: center;
    gap: 10px;
}

.activity-title h2 {
    font-size: 16px;
}

.service-icon {
    font-size: 22px;
}

.github {
    color: white;
}

.leetcode {
    color: var(--orange);
}

.activity-main {
    margin-top: 25px;
}

.activity-main strong {
    display: block;
    font-size: 29px;
}

.activity-main span {
    display: block;

    margin-top: 4px;

    color: #8997a8;
    font-size: 11px;
}

.activity-main b {
    color: var(--green);
    margin-left: 5px;
}

.mini-chart {
    height: 48px;

    display: flex;
    align-items: end;
    gap: 5px;

    margin-top: -28px;
    margin-left: 140px;
}

.mini-chart span {
    width: 15px;

    border-radius: 3px 3px 0 0;
}

.github-chart span:nth-child(1) { height: 12px; }
.github-chart span:nth-child(2) { height: 19px; }
.github-chart span:nth-child(3) { height: 14px; }
.github-chart span:nth-child(4) { height: 25px; }
.github-chart span:nth-child(5) { height: 18px; }
.github-chart span:nth-child(6) { height: 31px; }
.github-chart span:nth-child(7) { height: 23px; }
.github-chart span:nth-child(8) { height: 37px; }
.github-chart span:nth-child(9) { height: 44px; }

.github-chart span {
    background: var(--purple);
}

.leetcode-chart span:nth-child(1) { height: 10px; }
.leetcode-chart span:nth-child(2) { height: 18px; }
.leetcode-chart span:nth-child(3) { height: 14px; }
.leetcode-chart span:nth-child(4) { height: 24px; }
.leetcode-chart span:nth-child(5) { height: 21px; }
.leetcode-chart span:nth-child(6) { height: 31px; }
.leetcode-chart span:nth-child(7) { height: 43px; }
.leetcode-chart span:nth-child(8) { height: 35px; }

.leetcode-chart span {
    background: var(--orange);
}

.activity-stats {
    border-top: 1px solid var(--border);

    margin-top: 18px;
    padding-top: 8px;
}

.activity-stats p {
    display: flex;
    justify-content: space-between;

    padding: 6px 0;

    color: #a8b3c0;
    font-size: 11px;
}

.activity-stats strong {
    color: #dce4ed;
}

.activity-stats b {
    color: var(--green);
    margin-left: 10px;
}

.activity-stats em {
    color: var(--red);
    font-style: normal;
    margin-left: 10px;
}

.view-link {
    display: block;

    text-align: center;

    margin-top: 14px;
    padding-top: 12px;

    border-top: 1px solid var(--border);

    font-size: 11px;
    color: #e0e7ef;
}

.view-link:hover {
    color: var(--purple);
}


/* =========================
   TREND
========================= */

.trend-card {
    min-height: 305px;
}

.trend-card select {
    padding: 7px 10px;

    border: 1px solid var(--border);
    border-radius: 6px;

    background: #101b29;
    color: #cbd5e1;

    font-size: 11px;
}

.graph {
    position: relative;

    height: 180px;

    margin-top: 15px;
}

.graph-lines {
    position: absolute;

    inset: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.graph-lines span {
    width: 100%;
    border-top: 1px solid #1b2938;
}

.graph svg {
    position: absolute;

    width: 100%;
    height: 100%;

    left: 0;
    top: 0;
}

.line {
    fill: none;
    stroke-width: 2.5;
}

.github-line {
    stroke: var(--green);
}

.leetcode-line {
    stroke: var(--orange);
}

.pr-line {
    stroke: var(--blue);
}

.graph-legend {
    display: flex;
    gap: 20px;

    color: #9aa7b7;

    font-size: 10px;
}

.github-dot {
    color: var(--green);
}

.leetcode-dot {
    color: var(--orange);
}

.pr-dot {
    color: var(--blue);
}


/* =========================
   INSIGHTS
========================= */

.insights-card {
    grid-column: 1 / -1;
}

.insights-card h2 {
    margin-bottom: 18px;
}

.insights-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.insight {
    display: flex;
    align-items: center;

    gap: 12px;

    padding: 8px 20px;

    border-right: 1px solid var(--border);
}

.insight:first-child {
    padding-left: 5px;
}

.insight:last-child {
    border-right: none;
}

.insight-icon {
    width: 42px;
    height: 42px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: 50%;

    font-size: 17px;
}

.green-bg {
    background: #103d29;
    color: var(--green);
}

.blue-bg {
    background: #102d50;
    color: var(--blue);
}

.purple-bg {
    background: #30245d;
    color: #a78bfa;
}

.orange-bg {
    background: #493211;
    color: var(--orange);
}

.red-bg {
    background: #461e27;
    color: #fb7185;
}

.insight small {
    display: block;

    color: #8c99a9;
    font-size: 10px;
}

.insight strong {
    display: block;

    margin-top: 4px;

    font-size: 17px;
}

.insight p {
    margin-top: 4px;

    color: #788698;
    font-size: 9px;
}

.progress {
    width: 90px;
    height: 4px;

    margin-top: 7px;

    background: #243142;

    border-radius: 10px;
}

.progress span {
    display: block;

    width: 82%;
    height: 100%;

    background: var(--green);

    border-radius: inherit;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1200px) {

    .dashboard {
        grid-template-columns: 1fr 1fr;
    }

    .profile-card,
    .heatmap-card,
    .insights-card {
        grid-column: span 2;
    }

    .breakdown-card {
        grid-column: span 2;
    }

    .insights-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }

    .insight {
        border-right: none;
    }

}

@media (max-width: 850px) {

    .sidebar {
        width: 70px;
    }

    .logo span:last-child,
    .nav-item,
    .connect-section {
        font-size: 0;
    }

    .nav-item {
        justify-content: center;
    }

    .nav-item span {
        font-size: 16px;
    }

    .main {
        width: calc(100% - 70px);
        margin-left: 70px;
    }

    .top-nav {
        gap: 15px;
    }

    .dashboard {
        grid-template-columns: 1fr;
    }

    .profile-card,
    .heatmap-card,
    .breakdown-card,
    .insights-card {
        grid-column: span 1;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .stat:nth-child(2) {
        border-right: none;
    }

    .insights-grid {
        grid-template-columns: 1fr 1fr;
    }

}

@media (max-width: 600px) {

    .top-nav {
        display: none;
    }

    .dashboard {
        padding: 10px;
    }

    .profile-card {
        flex-direction: column;
        align-items: flex-start;
    }

    .profile-meta {
        flex-direction: column;
        gap: 5px;
    }

    .donut-wrapper {
        flex-direction: column;
    }

    .insights-grid {
        grid-template-columns: 1fr;
    }

}