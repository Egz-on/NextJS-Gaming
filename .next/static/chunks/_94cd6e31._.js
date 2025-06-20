(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "loginUser": (()=>loginUser),
    "registerUser": (()=>registerUser),
    "verifyToken": (()=>verifyToken)
});
const API_BASE_URL = '/api';
async function registerUser(userData) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
    }
    return data;
}
async function loginUser(credentials) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Login failed');
    }
    return data;
}
async function verifyToken(token) {
    const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Token verification failed');
    }
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Ballpit.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Ballpit": (()=>Ballpit),
    "W": (()=>W),
    "X": (()=>X),
    "Y": (()=>Y),
    "Z": (()=>Z),
    "createBallpit": (()=>createBallpit),
    "createPointerData": (()=>createPointerData),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/environments/RoomEnvironment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/Observer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"]);
class X {
    #config;
    #postprocessing;
    #resizeObserver;
    #intersectionObserver;
    #resizeTimer;
    #animationFrameId = 0;
    #clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
    #animationState = {
        elapsed: 0,
        delta: 0
    };
    #isAnimating = false;
    #isVisible = false;
    canvas;
    camera;
    cameraMinAspect;
    cameraMaxAspect;
    cameraFov;
    maxPixelRatio;
    minPixelRatio;
    scene;
    renderer;
    size = {
        width: 0,
        height: 0,
        wWidth: 0,
        wHeight: 0,
        ratio: 0,
        pixelRatio: 0
    };
    render = this.#render.bind(this);
    onBeforeRender = ()=>{};
    onAfterRender = ()=>{};
    onAfterResize = ()=>{};
    isDisposed = false;
    constructor(config){
        this.#config = {
            ...config
        };
        this.#initCamera();
        this.#initScene();
        this.#initRenderer();
        this.resize();
        this.#initObservers();
    }
    #initCamera() {
        this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"]();
        this.cameraFov = this.camera.fov;
    }
    #initScene() {
        this.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    }
    #initRenderer() {
        if (this.#config.canvas) {
            this.canvas = this.#config.canvas;
        } else if (this.#config.id) {
            const elem = document.getElementById(this.#config.id);
            if (elem instanceof HTMLCanvasElement) {
                this.canvas = elem;
            } else {
                console.error("Three: Missing canvas or id parameter");
            }
        } else {
            console.error("Three: Missing canvas or id parameter");
        }
        this.canvas.style.display = "block";
        const rendererOptions = {
            canvas: this.canvas,
            powerPreference: "high-performance",
            ...this.#config.rendererOptions ?? {}
        };
        this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"](rendererOptions);
        this.renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    }
    #initObservers() {
        if (!(this.#config.size instanceof Object)) {
            window.addEventListener("resize", this.#onResize.bind(this));
            if (this.#config.size === "parent" && this.canvas.parentNode) {
                this.#resizeObserver = new ResizeObserver(this.#onResize.bind(this));
                this.#resizeObserver.observe(this.canvas.parentNode);
            }
        }
        this.#intersectionObserver = new IntersectionObserver(this.#onIntersection.bind(this), {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });
        this.#intersectionObserver.observe(this.canvas);
        document.addEventListener("visibilitychange", this.#onVisibilityChange.bind(this));
    }
    #onResize() {
        if (this.#resizeTimer) clearTimeout(this.#resizeTimer);
        this.#resizeTimer = window.setTimeout(this.resize.bind(this), 100);
    }
    resize() {
        let w, h;
        if (this.#config.size instanceof Object) {
            w = this.#config.size.width;
            h = this.#config.size.height;
        } else if (this.#config.size === "parent" && this.canvas.parentNode) {
            w = this.canvas.parentNode.offsetWidth;
            h = this.canvas.parentNode.offsetHeight;
        } else {
            w = window.innerWidth;
            h = window.innerHeight;
        }
        this.size.width = w;
        this.size.height = h;
        this.size.ratio = w / h;
        this.#updateCamera();
        this.#updateRenderer();
        this.onAfterResize(this.size);
    }
    #updateCamera() {
        this.camera.aspect = this.size.width / this.size.height;
        if (this.camera.isPerspectiveCamera && this.cameraFov) {
            if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
                this.#adjustFov(this.cameraMinAspect);
            } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
                this.#adjustFov(this.cameraMaxAspect);
            } else {
                this.camera.fov = this.cameraFov;
            }
        }
        this.camera.updateProjectionMatrix();
        this.updateWorldSize();
    }
    #adjustFov(aspect) {
        const tanFov = Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(this.cameraFov / 2));
        const newTan = tanFov / (this.camera.aspect / aspect);
        this.camera.fov = 2 * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].radToDeg(Math.atan(newTan));
    }
    updateWorldSize() {
        if (this.camera.isPerspectiveCamera) {
            const fovRad = this.camera.fov * Math.PI / 180;
            this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
            this.size.wWidth = this.size.wHeight * this.camera.aspect;
        } else if (this.camera.isOrthographicCamera) {
            const cam = this.camera;
            this.size.wHeight = cam.top - cam.bottom;
            this.size.wWidth = cam.right - cam.left;
        }
    }
    #updateRenderer() {
        this.renderer.setSize(this.size.width, this.size.height);
        this.#postprocessing?.setSize(this.size.width, this.size.height);
        let pr = window.devicePixelRatio;
        if (this.maxPixelRatio && pr > this.maxPixelRatio) {
            pr = this.maxPixelRatio;
        } else if (this.minPixelRatio && pr < this.minPixelRatio) {
            pr = this.minPixelRatio;
        }
        this.renderer.setPixelRatio(pr);
        this.size.pixelRatio = pr;
    }
    get postprocessing() {
        return this.#postprocessing;
    }
    set postprocessing(value) {
        this.#postprocessing = value;
        this.render = value.render.bind(value);
    }
    #onIntersection(entries) {
        this.#isAnimating = entries[0].isIntersecting;
        this.#isAnimating ? this.#startAnimation() : this.#stopAnimation();
    }
    #onVisibilityChange() {
        if (this.#isAnimating) {
            document.hidden ? this.#stopAnimation() : this.#startAnimation();
        }
    }
    #startAnimation() {
        if (this.#isVisible) return;
        const animateFrame = ()=>{
            this.#animationFrameId = requestAnimationFrame(animateFrame);
            this.#animationState.delta = this.#clock.getDelta();
            this.#animationState.elapsed += this.#animationState.delta;
            this.onBeforeRender(this.#animationState);
            this.render();
            this.onAfterRender(this.#animationState);
        };
        this.#isVisible = true;
        this.#clock.start();
        animateFrame();
    }
    #stopAnimation() {
        if (this.#isVisible) {
            cancelAnimationFrame(this.#animationFrameId);
            this.#isVisible = false;
            this.#clock.stop();
        }
    }
    #render() {
        this.renderer.render(this.scene, this.camera);
    }
    clear() {
        this.scene.traverse((obj)=>{
            if (obj.isMesh && typeof obj.material === "object" && obj.material !== null) {
                Object.keys(obj.material).forEach((key)=>{
                    const matProp = obj.material[key];
                    if (matProp && typeof matProp === "object" && typeof matProp.dispose === "function") {
                        matProp.dispose();
                    }
                });
                obj.material.dispose();
                obj.geometry.dispose();
            }
        });
        this.scene.clear();
    }
    dispose() {
        this.#onResizeCleanup();
        this.#stopAnimation();
        this.clear();
        this.#postprocessing?.dispose();
        this.renderer.dispose();
        this.isDisposed = true;
    }
    #onResizeCleanup() {
        window.removeEventListener("resize", this.#onResize.bind(this));
        this.#resizeObserver?.disconnect();
        this.#intersectionObserver?.disconnect();
        document.removeEventListener("visibilitychange", this.#onVisibilityChange.bind(this));
    }
}
class W {
    config;
    positionData;
    velocityData;
    sizeData;
    center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    constructor(config){
        this.config = config;
        this.positionData = new Float32Array(3 * config.count).fill(0);
        this.velocityData = new Float32Array(3 * config.count).fill(0);
        this.sizeData = new Float32Array(config.count).fill(1);
        this.center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.#initializePositions();
        this.setSizes();
    }
    #initializePositions() {
        const { config, positionData } = this;
        this.center.toArray(positionData, 0);
        for(let i = 1; i < config.count; i++){
            const idx = 3 * i;
            positionData[idx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(2 * config.maxX);
            positionData[idx + 1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(2 * config.maxY);
            positionData[idx + 2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(2 * config.maxZ);
        }
    }
    setSizes() {
        const { config, sizeData } = this;
        sizeData[0] = config.size0;
        for(let i = 1; i < config.count; i++){
            sizeData[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(config.minSize, config.maxSize);
        }
    }
    update(deltaInfo) {
        const { config, center, positionData, sizeData, velocityData } = this;
        let startIdx = 0;
        if (config.controlSphere0) {
            startIdx = 1;
            const firstVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(positionData, 0);
            firstVec.lerp(center, 0.1).toArray(positionData, 0);
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0).toArray(velocityData, 0);
        }
        for(let idx = startIdx; idx < config.count; idx++){
            const base = 3 * idx;
            const pos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(positionData, base);
            const vel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(velocityData, base);
            vel.y -= deltaInfo.delta * config.gravity * sizeData[idx];
            vel.multiplyScalar(config.friction);
            vel.clampLength(0, config.maxVelocity);
            pos.add(vel);
            pos.toArray(positionData, base);
            vel.toArray(velocityData, base);
        }
        for(let idx = startIdx; idx < config.count; idx++){
            const base = 3 * idx;
            const pos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(positionData, base);
            const vel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(velocityData, base);
            const radius = sizeData[idx];
            for(let jdx = idx + 1; jdx < config.count; jdx++){
                const otherBase = 3 * jdx;
                const otherPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(positionData, otherBase);
                const otherVel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(velocityData, otherBase);
                const diff = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(otherPos).sub(pos);
                const dist = diff.length();
                const sumRadius = radius + sizeData[jdx];
                if (dist < sumRadius) {
                    const overlap = sumRadius - dist;
                    const correction = diff.normalize().multiplyScalar(0.5 * overlap);
                    const velCorrection = correction.clone().multiplyScalar(Math.max(vel.length(), 1));
                    pos.sub(correction);
                    vel.sub(velCorrection);
                    pos.toArray(positionData, base);
                    vel.toArray(velocityData, base);
                    otherPos.add(correction);
                    otherVel.add(correction.clone().multiplyScalar(Math.max(otherVel.length(), 1)));
                    otherPos.toArray(positionData, otherBase);
                    otherVel.toArray(velocityData, otherBase);
                }
            }
            if (config.controlSphere0) {
                const diff = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(positionData, 0)).sub(pos);
                const d = diff.length();
                const sumRadius0 = radius + sizeData[0];
                if (d < sumRadius0) {
                    const correction = diff.normalize().multiplyScalar(sumRadius0 - d);
                    const velCorrection = correction.clone().multiplyScalar(Math.max(vel.length(), 2));
                    pos.sub(correction);
                    vel.sub(velCorrection);
                }
            }
            if (Math.abs(pos.x) + radius > config.maxX) {
                pos.x = Math.sign(pos.x) * (config.maxX - radius);
                vel.x = -vel.x * config.wallBounce;
            }
            if (config.gravity === 0) {
                if (Math.abs(pos.y) + radius > config.maxY) {
                    pos.y = Math.sign(pos.y) * (config.maxY - radius);
                    vel.y = -vel.y * config.wallBounce;
                }
            } else if (pos.y - radius < -config.maxY) {
                pos.y = -config.maxY + radius;
                vel.y = -vel.y * config.wallBounce;
            }
            const maxBoundary = Math.max(config.maxZ, config.maxSize);
            if (Math.abs(pos.z) + radius > maxBoundary) {
                pos.z = Math.sign(pos.z) * (config.maxZ - radius);
                vel.z = -vel.z * config.wallBounce;
            }
            pos.toArray(positionData, base);
            vel.toArray(velocityData, base);
        }
    }
}
class Y extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"] {
    uniforms = {
        thicknessDistortion: {
            value: 0.1
        },
        thicknessAmbient: {
            value: 0
        },
        thicknessAttenuation: {
            value: 0.1
        },
        thicknessPower: {
            value: 2
        },
        thicknessScale: {
            value: 10
        }
    };
    constructor(params){
        super(params);
        this.defines = {
            USE_UV: ""
        };
        this.onBeforeCompile = (shader)=>{
            Object.assign(shader.uniforms, this.uniforms);
            shader.fragmentShader = `
            uniform float thicknessPower;
            uniform float thicknessScale;
            uniform float thicknessDistortion;
            uniform float thicknessAmbient;
            uniform float thicknessAttenuation;
            ` + shader.fragmentShader;
            shader.fragmentShader = shader.fragmentShader.replace("void main() {", `
            void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
            vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
            float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
            #ifdef USE_COLOR
                vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
            #else
                vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
            #endif
            reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
            }

            void main() {
            `);
            const lightsChunk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ShaderChunk"].lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );", `
            RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
            RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
            `);
            shader.fragmentShader = shader.fragmentShader.replace("#include <lights_fragment_begin>", lightsChunk);
            if (this.onBeforeCompile2) this.onBeforeCompile2(shader);
        };
    }
    onBeforeCompile2;
}
const XConfig = {
    count: 200,
    colors: [
        0,
        0,
        0
    ],
    ambientColor: 0xffffff,
    ambientIntensity: 1,
    lightIntensity: 200,
    materialParams: {
        metalness: 0.5,
        roughness: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.15
    },
    minSize: 0.5,
    maxSize: 1,
    size0: 1,
    gravity: 0.5,
    friction: 0.9975,
    wallBounce: 0.95,
    maxVelocity: 0.15,
    maxX: 5,
    maxY: 5,
    maxZ: 2,
    controlSphere0: false,
    followCursor: true
};
const U = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
let globalPointerActive = false;
const pointerPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
const pointerMap = new Map();
function createPointerData(options) {
    const defaultData = {
        position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](),
        nPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](),
        hover: false,
        onEnter: ()=>{},
        onMove: ()=>{},
        onClick: ()=>{},
        onLeave: ()=>{},
        ...options
    };
    if (!pointerMap.has(options.domElement)) {
        pointerMap.set(options.domElement, defaultData);
        if (!globalPointerActive) {
            document.body.addEventListener("pointermove", onPointerMove);
            document.body.addEventListener("pointerleave", onPointerLeave);
            document.body.addEventListener("click", onPointerClick);
            globalPointerActive = true;
        }
    }
    defaultData.dispose = ()=>{
        pointerMap.delete(options.domElement);
        if (pointerMap.size === 0) {
            document.body.removeEventListener("pointermove", onPointerMove);
            document.body.removeEventListener("pointerleave", onPointerLeave);
            document.body.removeEventListener("click", onPointerClick);
            globalPointerActive = false;
        }
    };
    return defaultData;
}
function onPointerMove(e) {
    pointerPosition.set(e.clientX, e.clientY);
    for (const [elem, data] of pointerMap){
        const rect = elem.getBoundingClientRect();
        if (isInside(rect)) {
            updatePointerData(data, rect);
            if (!data.hover) {
                data.hover = true;
                data.onEnter(data);
            }
            data.onMove(data);
        } else if (data.hover) {
            data.hover = false;
            data.onLeave(data);
        }
    }
}
function onPointerClick(e) {
    pointerPosition.set(e.clientX, e.clientY);
    for (const [elem, data] of pointerMap){
        const rect = elem.getBoundingClientRect();
        updatePointerData(data, rect);
        if (isInside(rect)) data.onClick(data);
    }
}
function onPointerLeave() {
    for (const data of pointerMap.values()){
        if (data.hover) {
            data.hover = false;
            data.onLeave(data);
        }
    }
}
function updatePointerData(data, rect) {
    data.position.set(pointerPosition.x - rect.left, pointerPosition.y - rect.top);
    data.nPosition.set(data.position.x / rect.width * 2 - 1, -data.position.y / rect.height * 2 + 1);
}
function isInside(rect) {
    return pointerPosition.x >= rect.left && pointerPosition.x <= rect.left + rect.width && pointerPosition.y >= rect.top && pointerPosition.y <= rect.top + rect.height;
}
class Z extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedMesh"] {
    config;
    physics;
    ambientLight;
    light;
    constructor(renderer, params = {}){
        const config = {
            ...XConfig,
            ...params
        };
        const roomEnv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEnvironment"]();
        const pmrem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PMREMGenerator"](renderer);
        const envTexture = pmrem.fromScene(roomEnv).texture;
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"]();
        const material = new Y({
            envMap: envTexture,
            ...config.materialParams
        });
        material.envMapRotation.x = -Math.PI / 2;
        super(geometry, material, config.count);
        this.config = config;
        this.physics = new W(config);
        this.#setupLights();
        this.setColors(config.colors);
    }
    #setupLights() {
        this.ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](this.config.ambientColor, this.config.ambientIntensity);
        this.add(this.ambientLight);
        this.light = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](this.config.colors[0], this.config.lightIntensity);
        this.add(this.light);
    }
    setColors(colors) {
        if (Array.isArray(colors) && colors.length > 1) {
            const colorUtils = function(colorsArr) {
                let baseColors = colorsArr;
                let colorObjects = [];
                baseColors.forEach((col)=>{
                    colorObjects.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](col));
                });
                return {
                    setColors: (cols)=>{
                        baseColors = cols;
                        colorObjects = [];
                        baseColors.forEach((col)=>{
                            colorObjects.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](col));
                        });
                    },
                    getColorAt: (ratio, out = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]())=>{
                        const clamped = Math.max(0, Math.min(1, ratio));
                        const scaled = clamped * (baseColors.length - 1);
                        const idx = Math.floor(scaled);
                        const start = colorObjects[idx];
                        if (idx >= baseColors.length - 1) return start.clone();
                        const alpha = scaled - idx;
                        const end = colorObjects[idx + 1];
                        out.r = start.r + alpha * (end.r - start.r);
                        out.g = start.g + alpha * (end.g - start.g);
                        out.b = start.b + alpha * (end.b - start.b);
                        return out;
                    }
                };
            }(colors);
            for(let idx = 0; idx < this.count; idx++){
                this.setColorAt(idx, colorUtils.getColorAt(idx / this.count));
                if (idx === 0) {
                    this.light.color.copy(colorUtils.getColorAt(idx / this.count));
                }
            }
            if (!this.instanceColor) return;
            this.instanceColor.needsUpdate = true;
        }
    }
    update(deltaInfo) {
        this.physics.update(deltaInfo);
        for(let idx = 0; idx < this.count; idx++){
            U.position.fromArray(this.physics.positionData, 3 * idx);
            if (idx === 0 && this.config.followCursor === false) {
                U.scale.setScalar(0);
            } else {
                U.scale.setScalar(this.physics.sizeData[idx]);
            }
            U.updateMatrix();
            this.setMatrixAt(idx, U.matrix);
            if (idx === 0) this.light.position.copy(U.position);
        }
        this.instanceMatrix.needsUpdate = true;
    }
}
function createBallpit(canvas, config = {}) {
    const threeInstance = new X({
        canvas,
        size: "parent",
        rendererOptions: {
            antialias: true,
            alpha: true
        }
    });
    let spheres;
    threeInstance.renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
    threeInstance.camera.position.set(0, 0, 20);
    threeInstance.camera.lookAt(0, 0, 0);
    threeInstance.cameraMaxAspect = 1.5;
    threeInstance.resize();
    initialize(config);
    const raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"]();
    const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1), 0);
    const intersectionPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    let isPaused = false;
    const pointerData = createPointerData({
        domElement: canvas,
        onMove () {
            raycaster.setFromCamera(pointerData.nPosition, threeInstance.camera);
            threeInstance.camera.getWorldDirection(plane.normal);
            raycaster.ray.intersectPlane(plane, intersectionPoint);
            spheres.physics.center.copy(intersectionPoint);
            spheres.config.controlSphere0 = true;
        },
        onLeave () {
            spheres.config.controlSphere0 = false;
        }
    });
    function initialize(cfg) {
        if (spheres) {
            threeInstance.clear();
            threeInstance.scene.remove(spheres);
        }
        spheres = new Z(threeInstance.renderer, cfg);
        threeInstance.scene.add(spheres);
    }
    threeInstance.onBeforeRender = (deltaInfo)=>{
        if (!isPaused) spheres.update(deltaInfo);
    };
    threeInstance.onAfterResize = (size)=>{
        spheres.config.maxX = size.wWidth / 2;
        spheres.config.maxY = size.wHeight / 2;
    };
    return {
        three: threeInstance,
        get spheres () {
            return spheres;
        },
        setCount (count) {
            initialize({
                ...spheres.config,
                count
            });
        },
        togglePause () {
            isPaused = !isPaused;
        },
        dispose () {
            pointerData.dispose?.();
            threeInstance.dispose();
        }
    };
}
const Ballpit = ({ className = "", followCursor = true, ...props })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spheresInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Ballpit.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            spheresInstanceRef.current = createBallpit(canvas, {
                followCursor,
                ...props
            });
            return ({
                "Ballpit.useEffect": ()=>{
                    if (spheresInstanceRef.current) {
                        spheresInstanceRef.current.dispose();
                    }
                }
            })["Ballpit.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Ballpit.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        className: `${className} w-full h-full`,
        ref: canvasRef
    }, void 0, false, {
        fileName: "[project]/app/components/Ballpit.tsx",
        lineNumber: 854,
        columnNumber: 12
    }, this);
};
_s(Ballpit, "zfLykvNPavFXMWxJRK9PIXc47O8=");
_c = Ballpit;
const __TURBOPACK__default__export__ = Ballpit;
;
var _c;
__turbopack_context__.k.register(_c, "Ballpit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/login/LoginFrom.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoginFrom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ballpit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Ballpit.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function LoginFrom() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUser"])({
                email,
                password
            });
            login(data.user, data.token);
            alert("Sucesfully");
            router.push('/Games');
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-900 flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center",
                            children: "Welcome Back"
                        }, void 0, false, {
                            fileName: "[project]/app/login/LoginFrom.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 text-sm text-red-300 bg-red-500/20 backdrop-blur-sm p-3 rounded-lg border border-red-400/30",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/login/LoginFrom.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-cyan-200 mb-2",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/LoginFrom.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Enter your email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            className: "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all duration-200 border border-white/20",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/LoginFrom.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/login/LoginFrom.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-cyan-200 mb-2",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/LoginFrom.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            placeholder: "Enter your password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            className: "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all duration-200 border border-white/20",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/LoginFrom.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/login/LoginFrom.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                    disabled: loading,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/LoginFrom.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Signing In..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/LoginFrom.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/login/LoginFrom.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this) : 'Sign In'
                                }, void 0, false, {
                                    fileName: "[project]/app/login/LoginFrom.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/login/LoginFrom.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-sm",
                                children: [
                                    "Don't have an account?",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-cyan-400 hover:text-cyan-300 font-medium transition-colors",
                                        children: "Sign up"
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/LoginFrom.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/LoginFrom.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/login/LoginFrom.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/login/LoginFrom.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/login/LoginFrom.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ballpit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        count: 150,
                        gravity: 0.6,
                        friction: 0.85,
                        wallBounce: 0.9,
                        followCursor: true,
                        colors: [
                            '#06b6d4',
                            '#0891b2',
                            '#0e7490',
                            '#8b5cf6',
                            '#7c3aed',
                            '#6d28d9',
                            '#3b82f6',
                            '#2563eb',
                            '#1d4ed8',
                            '#10b981',
                            '#059669',
                            '#047857' // Emerald-700
                        ]
                    }, void 0, false, {
                        fileName: "[project]/app/login/LoginFrom.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/login/LoginFrom.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/login/LoginFrom.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/login/LoginFrom.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(LoginFrom, "pEAeS5g+AdjX10WLrxlamAWdbN8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginFrom;
var _c;
__turbopack_context__.k.register(_c, "LoginFrom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_94cd6e31._.js.map