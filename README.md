# 📡 vue-event-channel-z

[![NPM](https://img.shields.io/npm/v/vue-event-channel-z.svg)](https://www.npmjs.com/package/vue-event-channel-z) ![Downloads](https://img.shields.io/npm/dt/vue-event-channel-z.svg)

[LIVE EXAMPLE](https://codesandbox.io/p/devbox/v6df94)

---

**vue-event-channel-z** is a lightweight, fully typed event channel designed for Vue 3.

Built on top of `eventbus-z`, it provides type-safe pub/sub
without introducing a full state manager.

> Build scalable UI communication without prop drilling or store
> overkill.

---

## 📖 Why vue-event-channel-z?

- ✅ Fully typed `EventMap`
- 🟢 Composition API friendly (`useChannel`)
- 🛡 Auto cleanup on component unmount
- 🧼 No `any`, no unsafe casts
- ⚡ Optional microtask emit defer
- 🌳 Optional provide/inject scoping
- 🧩 Compatible with effectScope
- 🌍 SSR-friendly (when instantiated per request)
- 📦 Lightweight core

---

## 📦 Installation

``` bash
npm install vue-event-channel-z
```

---

## 🚀 Quick Start

### 1️⃣ Define your EventMap

``` ts
type AppEvents = {
  toast: [message: string, type?: "success" | "error"];
  modal: [open: boolean];
};
```

---

### 2️⃣ Create a Channel

``` ts
import { createChannel } from "vue-event-channel-z";

export const appChannel = createChannel<AppEvents>();
```

---

### 3️⃣ Emit Events

``` ts
appChannel.emit("toast", "Saved successfully", "success");

appChannel.emit("modal", true);
```

Optional microtask defer:

``` ts
appChannel.emit("modal", true, {
  transition: true
});
```

---

### 4️⃣ Listen inside Vue Components

``` ts
import { useChannel } from "vue-event-channel-z";

useChannel(appChannel, "toast", (message, type) => {
  console.log(message, type);
});
```

Automatically unsubscribes on component unmount.

---

## 🧠 Type Safety

-   Full inference from `EventMap`
-   Strongly typed `emit`
-   Strongly typed `useChannel`
-   No unsafe casts
-   No `any`

---

## 🎯 Use Cases

-   Toast systems
-   Modal controllers
-   Global notifications
-   Micro-frontend communication
-   Plugin architecture
-   Dashboard cross-widgets sync

---

## 📦 Bundle Philosophy

-   No global singletons
-   No provide/inject required
-   No reducers
-   No external state managers
-   Just events --- fully typed

---

## ❓ Why not Pinia or Vuex?

`vue-event-channel-z` is not a state manager.
It is a type-safe communication layer.

Use it when:
- You need decoupled component communication
- You want event-driven architecture
- You don't need global reactive state

---

## 📄 License

MIT
