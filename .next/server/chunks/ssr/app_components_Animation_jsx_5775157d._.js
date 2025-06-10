module.exports = {

"[project]/app/components/Animation.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GamingHomepage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
function GamingHomepage() {
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mountRef.current) return;
        // Scene setup
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fog"](0x0a0a0a, 10, 50);
        sceneRef.current = scene;
        // Camera
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 15);
        // Renderer
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
        mountRef.current.appendChild(renderer.domElement);
        // Lighting
        const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](0x404040, 0.3);
        scene.add(ambientLight);
        const spotLight1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotLight"](0xff4444, 2);
        spotLight1.position.set(-10, 10, 5);
        spotLight1.castShadow = true;
        scene.add(spotLight1);
        const spotLight2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotLight"](0x4444ff, 2);
        spotLight2.position.set(10, 10, 5);
        spotLight2.castShadow = true;
        scene.add(spotLight2);
        const spotLight3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotLight"](0x44ff44, 1.5);
        spotLight3.position.set(0, 15, -5);
        scene.add(spotLight3);
        // Gaming Setup Objects
        const objects = [];
        // Gaming Monitor
        const monitorGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        // Monitor screen
        const screenGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](4, 2.5);
        const screenMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x000033,
            transparent: true,
            opacity: 0.9
        });
        const screen = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](screenGeometry, screenMaterial);
        screen.position.set(0, 2, 0);
        monitorGroup.add(screen);
        // Monitor frame
        const frameGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](4.3, 2.8, 0.1);
        const frameMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0x222222
        });
        const frame = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](frameGeometry, frameMaterial);
        frame.position.set(0, 2, -0.05);
        monitorGroup.add(frame);
        // Monitor stand
        const standGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.2, 0.3, 1.5);
        const standMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0x333333
        });
        const stand = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](standGeometry, standMaterial);
        stand.position.set(0, 0.75, 0);
        monitorGroup.add(stand);
        scene.add(monitorGroup);
        objects.push(monitorGroup);
        // Gaming Keyboard
        const keyboardGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](3, 0.2, 1);
        const keyboardMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0x1a1a1a
        });
        const keyboard = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](keyboardGeometry, keyboardMaterial);
        keyboard.position.set(0, -0.5, 3);
        keyboard.castShadow = true;
        scene.add(keyboard);
        objects.push(keyboard);
        // Gaming Mouse
        const mouseGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](0.6, 0.15, 1);
        const mouseMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0xff4444
        });
        const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](mouseGeometry, mouseMaterial);
        mouse.position.set(2.5, -0.4, 3);
        mouse.castShadow = true;
        scene.add(mouse);
        objects.push(mouse);
        // Gaming Headset
        const headsetGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        const headbandGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TorusGeometry"](1, 0.1, 8, 20, Math.PI);
        const headbandMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0x222222
        });
        const headband = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](headbandGeometry, headbandMaterial);
        headband.rotation.z = Math.PI;
        headband.position.set(-3, 2, 2);
        headsetGroup.add(headband);
        const earcupGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.4, 16, 16);
        const earcupMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0x333333
        });
        const leftEarcup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](earcupGeometry, earcupMaterial);
        leftEarcup.position.set(-3.8, 2, 2);
        const rightEarcup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](earcupGeometry, earcupMaterial);
        rightEarcup.position.set(-2.2, 2, 2);
        headsetGroup.add(leftEarcup);
        headsetGroup.add(rightEarcup);
        scene.add(headsetGroup);
        objects.push(headsetGroup);
        // Gaming Controller
        const controllerGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](1.2, 0.6, 0.3);
        const controllerMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0x4444ff
        });
        const controller = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](controllerGeometry, controllerMaterial);
        controller.position.set(3, -0.3, 1.5);
        controller.rotation.x = -0.2;
        controller.castShadow = true;
        scene.add(controller);
        objects.push(controller);
        // Particle System
        const particleCount = 1000;
        const particlesGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        const particlesMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"]({
            color: 0xffffff,
            size: 0.02,
            transparent: true,
            opacity: 0.8,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        });
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        for(let i = 0; i < particleCount; i++){
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
            const color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]();
            color.setHSL(Math.random(), 0.7, 0.5);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        particlesGeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
        particlesGeometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
        const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Points"](particlesGeometry, particlesMaterial);
        scene.add(particles);
        // Floating geometric shapes
        const shapes = [];
        const shapeGeometries = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OctahedronGeometry"](0.3),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TetrahedronGeometry"](0.3),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.3)
        ];
        for(let i = 0; i < 15; i++){
            const geometry = shapeGeometries[Math.floor(Math.random() * shapeGeometries.length)];
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]().setHSL(Math.random(), 0.7, 0.6),
                transparent: true,
                opacity: 0.7,
                wireframe: Math.random() > 0.5
            });
            const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
            shape.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 30);
            shape.userData = {
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.02,
                    y: (Math.random() - 0.5) * 0.02,
                    z: (Math.random() - 0.5) * 0.02
                },
                floatSpeed: Math.random() * 0.01 + 0.005
            };
            scene.add(shape);
            shapes.push(shape);
        }
        // Screen glow effect
        const glowGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](4.5, 3);
        const glowMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x4444ff,
            transparent: true,
            opacity: 0.1,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        });
        const screenGlow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](glowGeometry, glowMaterial);
        screenGlow.position.set(0, 2, 0.01);
        scene.add(screenGlow);
        // Animation loop
        let time = 0;
        const animate = ()=>{
            time += 0.01;
            // Rotate main objects
            objects.forEach((obj, index)=>{
                obj.rotation.y += 0.005 + index * 0.001;
                obj.position.y += Math.sin(time + index) * 0.002;
            });
            // Animate particles
            const positions = particles.geometry.attributes.position.array;
            for(let i = 0; i < particleCount; i++){
                positions[i * 3 + 1] += Math.sin(time + i * 0.01) * 0.01;
            }
            particles.geometry.attributes.position.needsUpdate = true;
            particles.rotation.y += 0.001;
            // Animate floating shapes
            shapes.forEach((shape)=>{
                shape.rotation.x += shape.userData.rotationSpeed.x;
                shape.rotation.y += shape.userData.rotationSpeed.y;
                shape.rotation.z += shape.userData.rotationSpeed.z;
                shape.position.y += Math.sin(time + shape.position.x) * shape.userData.floatSpeed;
            });
            // Animate camera
            camera.position.x = Math.sin(time * 0.5) * 3;
            camera.position.z = 15 + Math.cos(time * 0.3) * 2;
            camera.lookAt(0, 1, 0);
            // Animate lights
            spotLight1.intensity = 2 + Math.sin(time * 2) * 0.5;
            spotLight2.intensity = 2 + Math.cos(time * 2) * 0.5;
            // Screen glow animation
            screenGlow.material.opacity = 0.1 + Math.sin(time * 3) * 0.05;
            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        };
        animate();
        setIsLoaded(true);
        // Handle resize
        const handleResize = ()=>{
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        // Cleanup
        return ()=>{
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);
    const handleEnterShop = ()=>{
        // router.push('/games'); // Navigate to your games page
        console.log('Navigate to games page');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-150d4a4bc45c3400" + " " + "fixed inset-0 w-screen h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mountRef,
                className: "jsx-150d4a4bc45c3400" + " " + "absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/app/components/Animation.jsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-150d4a4bc45c3400" + " " + "absolute inset-0 flex items-center justify-center z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-150d4a4bc45c3400" + " " + "max-w-4xl mx-auto px-4 text-center space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "jsx-150d4a4bc45c3400" + " " + `text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent bg-size-200 animate-gradient transition-all duration-1000 hover:scale-105 hover:drop-shadow-2xl cursor-default ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
                            children: "GAME ZONE"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Animation.jsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-150d4a4bc45c3400" + " " + `text-lg md:text-xl lg:text-2xl text-white/80 font-light transition-all duration-1000 delay-500 hover:text-white hover:scale-105 cursor-default ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
                            children: "Ultimate Gaming Experience Awaits"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Animation.jsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-150d4a4bc45c3400" + " " + `transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleEnterShop,
                                className: "jsx-150d4a4bc45c3400" + " " + "group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 hover:rotate-1 hover:-translate-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-150d4a4bc45c3400" + " " + "relative z-10 transition-all duration-300 group-hover:scale-105",
                                        children: "Enter Game Store"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Animation.jsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-150d4a4bc45c3400" + " " + "absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Animation.jsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-150d4a4bc45c3400" + " " + "absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Animation.jsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Animation.jsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Animation.jsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-150d4a4bc45c3400" + " " + `flex flex-wrap justify-center gap-8 text-center text-white/60 transition-opacity duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-150d4a4bc45c3400" + " " + "group cursor-default transition-all duration-300 hover:scale-110 hover:-translate-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-2xl font-bold text-green-400 group-hover:text-green-300 group-hover:scale-125 transition-all duration-300 group-hover:drop-shadow-lg",
                                            children: "1000+"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-sm group-hover:text-white transition-colors duration-300",
                                            children: "Games"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Animation.jsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-150d4a4bc45c3400" + " " + "group cursor-default transition-all duration-300 hover:scale-110 hover:-translate-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-2xl font-bold text-blue-400 group-hover:text-blue-300 group-hover:scale-125 transition-all duration-300 group-hover:drop-shadow-lg",
                                            children: "50K+"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-sm group-hover:text-white transition-colors duration-300",
                                            children: "Players"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Animation.jsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-150d4a4bc45c3400" + " " + "group cursor-default transition-all duration-300 hover:scale-110 hover:-translate-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-2xl font-bold text-purple-400 group-hover:text-purple-300 group-hover:scale-125 transition-all duration-300 group-hover:drop-shadow-lg",
                                            children: "24/7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-sm group-hover:text-white transition-colors duration-300",
                                            children: "Support"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Animation.jsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Animation.jsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-150d4a4bc45c3400" + " " + `grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-150d4a4bc45c3400" + " " + "group bg-white/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-default",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-purple-400 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300",
                                            children: "🎮"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-white font-semibold group-hover:text-purple-300 transition-colors duration-300",
                                            children: "Latest Games"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300",
                                            children: "Discover new releases"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Animation.jsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-150d4a4bc45c3400" + " " + "group bg-white/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 cursor-default",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-blue-400 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300",
                                            children: "🏆"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-white font-semibold group-hover:text-blue-300 transition-colors duration-300",
                                            children: "Tournaments"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300",
                                            children: "Compete and win"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Animation.jsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-150d4a4bc45c3400" + " " + "group bg-white/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 cursor-default",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-green-400 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300",
                                            children: "👥"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-white font-semibold group-hover:text-green-300 transition-colors duration-300",
                                            children: "Community"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-150d4a4bc45c3400" + " " + "text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300",
                                            children: "Join fellow gamers"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Animation.jsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Animation.jsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Animation.jsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Animation.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-150d4a4bc45c3400" + " " + "absolute inset-0 bg-black/50 flex items-center justify-center z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-150d4a4bc45c3400" + " " + "text-white text-xl animate-pulse",
                    children: "Loading 3D Experience..."
                }, void 0, false, {
                    fileName: "[project]/app/components/Animation.jsx",
                    lineNumber: 377,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Animation.jsx",
                lineNumber: 376,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "150d4a4bc45c3400",
                children: "@keyframes gradient{0%,to{background-position:0%}50%{background-position:100%}}.animate-gradient.jsx-150d4a4bc45c3400{background-size:200% 200%;animation:3s infinite gradient}.bg-size-200.jsx-150d4a4bc45c3400{background-size:200% 200%}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Animation.jsx",
        lineNumber: 296,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_components_Animation_jsx_5775157d._.js.map