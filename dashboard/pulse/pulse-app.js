(function () {
  const data = window.MIKEOS_PULSE_DATA || {};
  const zones = Array.isArray(data.zones) ? data.zones : [];
  const tasksByZone = data.tasksByZone || {};
  const tasksByView = data.tasksByView || {};
  const viewsById = data.viewsById || {};

  const zoneIcons = {
    today: "T",
    work: "W",
    "life-admin": "L",
    home: "H",
    projects: "P",
    system: "S"
  };

  const kpiConfig = [
    ["dueToday", "Due today", "today-due", "today"],
    ["waitingOnMike", "Waiting on me", "today-waiting-on-me", "work"],
    ["waitingOnOthers", "Waiting on others", "today-waiting-on-others", "life"],
    ["parked", "Parked", "today-parked", "projects"],
    ["staleSources", "Stale source", "today-source-freshness", "home"]
  ];

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function zoneById(id) {
    return zones.find((zone) => zone.id === id) || zones[0] || {
      id: "today",
      label: "Today",
      route: "/today",
      summary: "No Pulse zones generated.",
      items: []
    };
  }

  function routeToViewId(route) {
    return String(route || "").replace(/^#/, "").replace(/^\/+/, "").replace(/\/+/g, "-") || "control-room";
  }

  function viewById(id) {
    if (viewsById[id]) return viewsById[id];
    const zone = zoneById(id);
    return viewsById[zone.id] || {
      id: zone.id,
      label: zone.label,
      route: zone.route,
      summary: zone.summary,
      parentZoneId: zone.id,
      theme: zone.theme
    };
  }

  function currentViewId() {
    const rawHash = window.location.hash || "";
    const hash = rawHash.replace("#", "");
    if (!rawHash || ["", "landing", "control-room"].includes(hash)) {
      return null;
    }
    const normalized = hash.includes("/") ? routeToViewId(hash) : hash;
    if (viewsById[normalized]) return normalized;
    if (zones.some((zone) => zone.id === normalized)) return normalized;
    return null;
  }

  function urgencyClass(value) {
    const normalized = String(value || "").toLowerCase();
    if (normalized === "today") return "urgent";
    if (normalized === "soon") return "soon";
    return "watch";
  }

  function countByUrgency(tasks) {
    return tasks.reduce((counts, task) => {
      const key = urgencyClass(task.urgency);
      counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, { urgent: 0, soon: 0, watch: 0 });
  }

  function tasksForView(view) {
    if (Array.isArray(tasksByView[view.id])) return tasksByView[view.id];
    if (Array.isArray(tasksByZone[view.parentZoneId])) return tasksByZone[view.parentZoneId];
    return [];
  }

  function taskCount(viewId) {
    const view = viewById(viewId);
    return tasksForView(view).length;
  }

  function setSelectedView(viewId, pushHash) {
    if (!viewId) {
      if (pushHash && window.location.hash) {
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
      }
      renderSelected(null);
      return;
    }
    const view = viewById(viewId);
    if (pushHash && window.location.hash !== `#${view.id}`) {
      window.location.hash = view.id;
      return;
    }
    renderSelected(view.id);
  }

  function optionLabel(option) {
    return typeof option === "string" ? option : option.label;
  }

  function optionRoute(option, parentRoute) {
    return typeof option === "string" ? parentRoute : option.route;
  }

  function optionViewId(option, parentZoneId) {
    if (typeof option === "string") return parentZoneId;
    return option.id || routeToViewId(option.route);
  }

  function viewButton(viewId, extraClass, labelOverride) {
    const view = viewById(viewId);
    const parent = zoneById(view.parentZoneId || view.id);
    const label = labelOverride || view.label;
    return `
      <button class="zone-button ${extraClass || ""}" data-view="${escapeHtml(view.id)}" data-zone="${escapeHtml(parent.id)}" type="button">
        <span class="zone-icon">${escapeHtml(zoneIcons[parent.id] || parent.icon || "*")}</span>
        <span>
          <strong>${escapeHtml(label)}</strong>
          <small>${escapeHtml(view.route)}</small>
        </span>
        <em>${taskCount(view.id)}</em>
      </button>
    `;
  }

  function entityViewId(entity) {
    const text = `${entity.name || ""} ${entity.kind || ""}`.toLowerCase();
    if (text.includes("elysium")) return "work-elysium-dynamics";
    if (text.includes("nav to bc") || text.includes("outlook")) return "work-invigorate-it-products";
    if (text.includes("bc/nav") || text.includes("consulting")) return "work-invigorate-it-bc-nav-consulting";
    if (text.includes("invigorate")) return "work-invigorate-it";
    return "work";
  }

  function renderNav() {
    const nav = byId("pulse-nav");
    if (!nav) return;
    nav.innerHTML = zones.map((zone) => `
      <a href="#${escapeHtml(zone.id)}" data-view="${escapeHtml(zone.id)}" data-zone="${escapeHtml(zone.id)}" data-nav="${escapeHtml(zone.id)}">
        <span>${escapeHtml(zoneIcons[zone.id] || zone.icon || "*")}</span>
        ${escapeHtml(zone.label)}
      </a>
    `).join("");
  }

  function renderKpis() {
    const strip = byId("kpi-strip");
    if (!strip) return;
    const kpis = data.kpis || {};
    const freshness = kpis.sourceFreshnessPercent == null ? 0 : kpis.sourceFreshnessPercent;
    strip.innerHTML = `
      <div class="kpi-title"><strong>Today</strong><span>Your daily pulse</span></div>
      ${kpiConfig.map(([key, label, viewId, theme]) => {
        const view = viewById(viewId);
        return `
          <button class="kpi-card ${theme}" data-view="${escapeHtml(viewId)}" data-zone="${escapeHtml(view.parentZoneId || "today")}" type="button">
            <strong>${escapeHtml(kpis[key] == null ? 0 : kpis[key])}</strong>
            <span>${escapeHtml(label)}</span>
            <small>${escapeHtml(view.route)}</small>
          </button>
        `;
      }).join("")}
      <button class="freshness-card" data-view="system-sources" data-zone="system" type="button">
        <span class="sparkline" aria-hidden="true"></span>
        <strong>${escapeHtml(freshness)}%</strong>
        <small>/system/sources</small>
      </button>
    `;
  }

  function renderScene() {
    const work = zoneById("work");
    const life = zoneById("life-admin");
    const home = zoneById("home");
    const projects = zoneById("projects");
    const system = zoneById("system");

    const workTable = byId("work-table");
    if (workTable) {
      const workEntities = (Array.isArray(data.entities) ? data.entities : [])
        .filter((entity) => ["business", "business_line", "product"].includes(entity.kind))
        .slice(0, 6);
      workTable.innerHTML = `
        <div class="table-row head"><span>Entity / Area</span><span>Open</span></div>
        ${workEntities.map((entity) => {
          const viewId = entityViewId(entity);
          return `
            <button class="table-row" data-view="${escapeHtml(viewId)}" data-zone="work" type="button">
              <span>${escapeHtml(entity.name)}</span>
              <span>${escapeHtml(entity.status)}</span>
            </button>
          `;
        }).join("")}
      `;
    }

    const workRoutes = byId("work-routes");
    if (workRoutes) {
      workRoutes.innerHTML = (work.items || []).map((option) => viewButton(optionViewId(option, "work"), "mini", optionLabel(option))).join("");
    }

    const lifeHub = byId("life-hub");
    if (lifeHub && !lifeHub.dataset.renderedOptions) {
      const itemMarkup = (life.items || []).map((option, index) => {
        const viewId = optionViewId(option, "life-admin");
        return `
          <button class="orbit-card orbit-${index + 1}" data-view="${escapeHtml(viewId)}" data-zone="life-admin" type="button">
            <strong>${escapeHtml(optionLabel(option))}</strong>
            <small>${escapeHtml(optionRoute(option, life.route))}</small>
          </button>
        `;
      }).join("");
      lifeHub.insertAdjacentHTML("beforeend", itemMarkup);
      lifeHub.dataset.renderedOptions = "true";
    }

    const rooms = byId("home-rooms");
    if (rooms) {
      rooms.innerHTML = (home.items || []).map((option) => `
        <button class="room-card" data-view="${escapeHtml(optionViewId(option, "home"))}" data-zone="home" type="button">
          <strong>${escapeHtml(optionLabel(option))}</strong>
          <small>${escapeHtml(optionRoute(option, home.route))}</small>
        </button>
      `).join("");
    }

    const projectPins = byId("project-pins");
    if (projectPins) {
      projectPins.innerHTML = (projects.items || []).map((option) => `
        <button class="pin-card" data-view="${escapeHtml(optionViewId(option, "projects"))}" data-zone="projects" type="button">
          <strong>${escapeHtml(optionLabel(option))}</strong>
          <small>${escapeHtml(optionRoute(option, projects.route))}</small>
        </button>
      `).join("");
    }

    const systemTiles = byId("system-tiles");
    if (systemTiles) {
      systemTiles.innerHTML = (system.items || []).map((option) => `
        <button class="engine-tile" data-view="${escapeHtml(optionViewId(option, "system"))}" data-zone="system" type="button">
          <strong>${escapeHtml(optionLabel(option))}</strong>
          <small>${escapeHtml(optionRoute(option, system.route))}</small>
        </button>
      `).join("");
    }

    const todayHotspot = byId("today-hotspot");
    if (todayHotspot) {
      todayHotspot.innerHTML = viewButton("today", "today-main", "Open today's task list");
    }
  }

  function renderSelected(viewId) {
    const shell = document.querySelector(".control-room-shell");
    if (!viewId) {
      if (shell) shell.classList.remove("workbench-open");
      document.querySelectorAll("[data-view], [data-zone], [data-nav]").forEach((element) => {
        element.classList.remove("selected", "active");
      });
      return;
    }
    if (shell) shell.classList.add("workbench-open");
    const view = viewById(viewId);
    const zone = zoneById(view.parentZoneId || view.id);
    const tasks = tasksForView(view);
    const counts = countByUrgency(tasks);

    document.querySelectorAll("[data-view]").forEach((element) => {
      element.classList.toggle("selected", element.dataset.view === view.id);
    });
    document.querySelectorAll("[data-zone]").forEach((element) => {
      element.classList.toggle("active", element.dataset.zone === zone.id);
    });
    document.querySelectorAll("[data-nav]").forEach((element) => {
      element.classList.toggle("active", element.dataset.nav === zone.id);
    });

    const title = byId("drawer-title");
    const summary = byId("drawer-summary");
    const route = byId("drawer-route");
    const countsEl = byId("drawer-counts");
    const list = byId("task-list");
    const drawerIcon = byId("drawer-icon");

    if (title) title.textContent = view.label;
    if (summary) summary.textContent = view.summary || zone.summary;
    if (drawerIcon) drawerIcon.textContent = zoneIcons[zone.id] || zone.icon || "*";
    if (route) {
      route.textContent = view.route || zone.route;
      route.href = `#${view.id}`;
    }
    if (countsEl) {
      countsEl.innerHTML = `
        <span><strong>${tasks.length}</strong> tasks</span>
        <span><strong>${counts.urgent}</strong> today</span>
        <span><strong>${counts.soon}</strong> soon</span>
        <span><strong>${counts.watch}</strong> watch</span>
      `;
    }
    if (!list) return;
    const rows = tasks.length ? tasks : [{
      title: "No generated tasks for this section",
      nextAction: "Open this area when MikeOS has a routed item for it.",
      route: view.route || zone.route,
      urgency: "watch",
      actionMode: "read_only",
      freshness: "none",
      source: "MikeOS state"
    }];
    list.innerHTML = `
      <div class="task-board">
        <div class="task-table">
          <div class="task-row header">
            <div class="task-cell">Task</div>
            <div class="task-cell">Context / What & Why</div>
            <div class="task-cell">Due</div>
            <div class="task-cell">Priority</div>
            <div class="task-cell">Links / Files / URLs</div>
            <div class="task-cell">Source</div>
          </div>
          ${rows.map((task) => `
            <div class="task-row">
              <div class="task-cell">
                <strong>${escapeHtml(task.title)}</strong>
                <code>${escapeHtml(task.route || view.route || zone.route)}</code>
              </div>
              <div class="task-cell">${escapeHtml(task.nextAction || "Open the route when this area needs attention.")}</div>
              <div class="task-cell">Today<br><small>${escapeHtml(task.freshness || "freshness unknown")}</small></div>
              <div class="task-cell"><span class="priority ${urgencyClass(task.urgency)}">${escapeHtml(task.urgency || "watch")}</span></div>
              <div class="task-cell">
                <code>${escapeHtml(task.route || view.route || zone.route)}</code><br>
                <small>${escapeHtml(task.actionMode || "read_only")}</small>
              </div>
              <div class="task-cell"><span class="source-dot"></span>${escapeHtml(task.source || "MikeOS state")}</div>
            </div>
          `).join("")}
        </div>
        <aside class="quick-panel">
          <div class="quick-box">
            <h3>Quick filters</h3>
            <div class="quick-filter active"><span>All ${escapeHtml(view.label)}</span><strong>${tasks.length}</strong></div>
            <div class="quick-filter"><span>Due today</span><strong>${counts.urgent}</strong></div>
            <div class="quick-filter"><span>High priority</span><strong>${counts.soon}</strong></div>
            <div class="quick-filter"><span>Watch</span><strong>${counts.watch}</strong></div>
          </div>
          <div class="quick-box">
            <h3>Calendar</h3>
            <p>This view is generated from MikeOS state. Connector detail stays behind safe routes.</p>
          </div>
          <div class="quick-box">
            <h3>Focus timer</h3>
            <div class="focus-timer">25:00</div>
            <p>Use this section as the next bounded work surface.</p>
          </div>
        </aside>
      </div>
    `;
  }

  function bindInteractions() {
    document.addEventListener("click", (event) => {
      const landingTrigger = event.target.closest("[data-landing]");
      if (landingTrigger) {
        event.preventDefault();
        setSelectedView(null, true);
        return;
      }
      const trigger = event.target.closest("[data-view], [data-zone]");
      if (!trigger) return;
      event.preventDefault();
      setSelectedView(trigger.dataset.view || trigger.dataset.zone, true);
    });
    window.addEventListener("hashchange", () => setSelectedView(currentViewId(), false));
  }

  function render() {
    const generated = byId("generated-at");
    if (generated) generated.textContent = `Built ${data.generatedAt || "not generated"}`;
    renderNav();
    renderKpis();
    renderScene();
    bindInteractions();
    setSelectedView(currentViewId(), false);
  }

  render();
}());
