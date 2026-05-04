(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/GitHub/VeriScan-Upload-FroentEnd/public/RobôPessoa.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/RobôPessoa.10ga3wkg0ok11.png");}),
"[project]/GitHub/VeriScan-Upload-FroentEnd/public/RobôPessoa.png.mjs { IMAGE => \"[project]/GitHub/VeriScan-Upload-FroentEnd/public/RobôPessoa.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$public$2f$Rob$f4$Pessoa$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/public/RobôPessoa.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$public$2f$Rob$f4$Pessoa$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1536,
    height: 1024,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AHRkQhLKt4du4s2fkrGmilV+f30zT1BQExkYGAASEREAANPAnmzy4LP19+XC/vHjxPPm2b+/opSPdIyGgjKXlJEzANnBiWX55Lb56t/M/vLhv//w1Z33uZeK8dPBp7q/sJA0AIt5UB7p0Jm99uvV+/v17fz04b38wrfC/ODUveq1nmo8ACghFACIdlAoyrudaNHLwmzFtZhrkYyUa5mPgllgUzgO5ylhshpusTwAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/hooks/useArquivos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useArquivos",
    ()=>useArquivos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function formatarTamanho(bytes) {
    return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} kb` : `${(bytes / (1024 * 1024)).toFixed(1)} mb`;
}
function useArquivos() {
    _s();
    const [arquivos, setArquivos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [enviando, setEnviando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function processarArquivos(files) {
        const novos = Array.from(files).map((file)=>({
                id: crypto.randomUUID(),
                file,
                nome: file.name,
                tamanho: formatarTamanho(file.size),
                status: 'ok'
            }));
        setArquivos((prev)=>[
                ...prev,
                ...novos
            ]);
        setResultado(null);
    }
    function remover(id) {
        setArquivos((prev)=>prev.filter((a)=>a.id !== id));
    }
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useArquivos.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setIsDragOver(false);
            if (e.dataTransfer.files) processarArquivos(e.dataTransfer.files);
        }
    }["useArquivos.useCallback[handleDrop]"], []);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useArquivos.useCallback[handleDragOver]": (e)=>{
            e.preventDefault();
            setIsDragOver(true);
        }
    }["useArquivos.useCallback[handleDragOver]"], []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useArquivos.useCallback[handleDragLeave]": (e)=>{
            e.preventDefault();
            setIsDragOver(false);
        }
    }["useArquivos.useCallback[handleDragLeave]"], []);
    async function handleAnalisar() {
        if (arquivos.length < 2) return;
        setEnviando(true);
        setResultado(null);
        try {
            const promises = arquivos.map((item)=>{
                const formData = new FormData();
                formData.append('file', item.file);
                return fetch('/api/posts', {
                    method: 'POST',
                    body: formData
                }).then((r)=>r.json());
            });
            await Promise.all(promises);
            setResultado('Análise enviada com sucesso!');
        } catch  {
            setResultado('Erro ao enviar para o servidor.');
        } finally{
            setEnviando(false);
        }
    }
    return {
        arquivos,
        isDragOver,
        enviando,
        resultado,
        temArquivos: arquivos.length > 0,
        podeAnalisar: arquivos.length >= 2,
        processarArquivos,
        remover,
        handleDrop,
        handleDragOver,
        handleDragLeave,
        handleAnalisar
    };
}
_s(useArquivos, "bp/beIRS9ajm2zvt1ud1L8pigvs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/DragOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragOverlay",
    ()=>DragOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function DragOverlay({ onDrop, onDragOver, onDragLeave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen flex items-center justify-center bg-[#D4FBFF]",
        onDrop: onDrop,
        onDragOver: onDragOver,
        onDragLeave: onDragLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[min(90vw,420px)] aspect-square rounded-3xl bg-[#D8ADEB]/30 border-2 border-dashed border-[#D8ADEB] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[#7860E1] font-semibold text-2xl",
                children: "Solte a imagem aqui"
            }, void 0, false, {
                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/DragOverlay.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/DragOverlay.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/DragOverlay.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = DragOverlay;
var _c;
__turbopack_context__.k.register(_c, "DragOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ThumbnailPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThumbnailPreview",
    ()=>ThumbnailPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ThumbnailPreview({ file }) {
    _s();
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ThumbnailPreview.useState": ()=>URL.createObjectURL(file)
    }["ThumbnailPreview.useState"]);
    // useState com função inicializadora: cria a URL só uma vez,
    // evitando recriar a cada render
    if (!src) return null;
    return(// eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: "",
        className: "w-full h-full object-cover",
        onLoad: ()=>URL.revokeObjectURL(src)
    }, void 0, false, {
        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ThumbnailPreview.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this));
}
_s(ThumbnailPreview, "1X6OPKLloZMgz1ZPAwIn7pDDog4=");
_c = ThumbnailPreview;
var _c;
__turbopack_context__.k.register(_c, "ThumbnailPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArquivoItem",
    ()=>ArquivoItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$ThumbnailPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ThumbnailPreview.tsx [app-client] (ecmascript)");
'use client';
;
;
function ArquivoItem({ item, onRemover }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 py-2 border-b border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$ThumbnailPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThumbnailPreview"], {
                    file: item.file
                }, void 0, false, {
                    fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-gray-900 truncate",
                        children: item.nome
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500",
                                children: item.tamanho
                            }, void 0, false, {
                                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onRemover(item.id),
                                className: "text-xs text-red-500 hover:text-red-700 cursor-pointer",
                                children: "Excluir"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-white text-[10px]",
                        children: "🔗"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]",
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onRemover(item.id),
                        className: "w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] cursor-pointer hover:bg-red-600",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ArquivoItem;
var _c;
__turbopack_context__.k.register(_c, "ArquivoItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadBox",
    ()=>UploadBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$ArquivoItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/ArquivoItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function UploadBox({ arquivos, temArquivos, podeAnalisar, enviando, resultado, onProcessar, onRemover, onAnalisar }) {
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function handleFileChange(e) {
        if (e.target.files) onProcessar(e.target.files);
        e.target.value = '';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " bg-white w-[min(85vw,300px)] md:w-[280px] lg:w-[420px] shrink-0 mt-6 md:mt-50 lg:mt-56 mx-auto md:mx-0 md:mr-6 lg:mr-10 rounded-3xl border-2 border-[#8F8F8F] shadow-xl flex flex-col items-center px-5 py-5 md:py-6 lg:py-8 z-10 relative ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "file",
                accept: "image/jpeg",
                multiple: true,
                className: "hidden",
                onChange: handleFileChange
            }, void 0, false, {
                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            !temArquivos ? /* Estado vazio */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>inputRef.current?.click(),
                        className: "bg-[#D8ADEB] rounded-3xl px-8 py-3 font-semibold text-xl lg:text-3xl text-white w-full hover:bg-[#c97aea] cursor-pointer transition-colors",
                        children: "Faça upload"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-xl lg:text-3xl mt-3 text-center",
                        children: "Ou arraste sua imagem"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /* Estado com arquivos */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>inputRef.current?.click(),
                        className: "w-full bg-[#D8ADEB] text-white text-sm font-semibold rounded-full py-2 px-4 text-center mb-4 hover:bg-[#c97aea] transition-colors cursor-pointer",
                        children: "Arraste seus arquivos aqui (Mínimo 2 imagens)"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 w-full",
                        children: arquivos.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$ArquivoItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArquivoItem"], {
                                item: item,
                                onRemover: onRemover
                            }, item.id, false, {
                                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    podeAnalisar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAnalisar,
                        disabled: enviando,
                        className: "mt-5 w-full bg-[#7860E1] text-white font-semibold rounded-full py-3 text-sm lg:text-base hover:bg-[#6450c9] transition-colors cursor-pointer disabled:opacity-60",
                        children: enviando ? 'Enviando...' : 'Fazer análise VeriScan'
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this),
                    resultado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-3 text-sm font-semibold text-center ${resultado.includes('Erro') ? 'text-red-500' : 'text-green-600'}`,
                        children: resultado
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this),
                    !podeAnalisar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-xs text-gray-400 text-center",
                        children: "Adicione pelo menos 2 imagens para analisar"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(UploadBox, "iD9XNNsNOlNDckBemnvlLS+aHYk=");
_c = UploadBox;
var _c;
__turbopack_context__.k.register(_c, "UploadBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Inicial",
    ()=>Inicial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$public$2f$Rob$f4$Pessoa$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$public$2f$Rob$f4$Pessoa$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/GitHub/VeriScan-Upload-FroentEnd/public/RobôPessoa.png.mjs { IMAGE => "[project]/GitHub/VeriScan-Upload-FroentEnd/public/RobôPessoa.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$hooks$2f$useArquivos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/hooks/useArquivos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$DragOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/DragOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$UploadBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/UploadBox.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Inicial() {
    _s();
    const { arquivos, isDragOver, enviando, resultado, temArquivos, podeAnalisar, processarArquivos, remover, handleDrop, handleDragOver, handleDragLeave, handleAnalisar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$hooks$2f$useArquivos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useArquivos"])();
    // Quando o usuário arrasta algo, a tela inteira vira drop zone
    if (isDragOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$DragOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragOverlay"], {
            onDrop: handleDrop,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave
        }, void 0, false, {
            fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "overflow-hidden relative min-h-screen",
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto relative min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$public$2f$Rob$f4$Pessoa$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$public$2f$Rob$f4$Pessoa$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Humano com dúvidas, robô com certeza",
                    quality: 100,
                    priority: true,
                    sizes: "(max-width: 768px) 60vw, (max-width: 1024px) 45vw, 600px",
                    className: " absolute bottom-0 left-0 z-0 w-[99vw] max-w-[380px] md:w-[55vw] md:max-w-[480px] lg:w-[60vw] lg:max-w-[600px] h-auto object-contain opacity-30 md:opacity-100 "
                }, void 0, false, {
                    fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 md:px-8 md:flex-1 mt-10 md:mt-20 md:ml-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-center md:text-left",
                                children: [
                                    "Saiba qual imagem é real",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-2 flex items-center justify-center md:justify-start flex-wrap gap-2",
                                        children: [
                                            "e qual é",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "text-white bg-[#7860E1] px-2 py-1 rounded-md text-3xl md:text-4xl lg:text-5xl",
                                                children: "modificada"
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$UploadBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadBox"], {
                            arquivos: arquivos,
                            temArquivos: temArquivos,
                            podeAnalisar: podeAnalisar,
                            enviando: enviando,
                            resultado: resultado,
                            onProcessar: processarArquivos,
                            onRemover: remover,
                            onAnalisar: handleAnalisar
                        }, void 0, false, {
                            fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/VeriScan-Upload-FroentEnd/src/app/_components/inicial.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Inicial, "m+qNnNA0LJcaEqiQlKd7lRhwQQg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$VeriScan$2d$Upload$2d$FroentEnd$2f$src$2f$app$2f$_components$2f$hooks$2f$useArquivos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useArquivos"]
    ];
});
_c = Inicial;
var _c;
__turbopack_context__.k.register(_c, "Inicial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=GitHub_VeriScan-Upload-FroentEnd_0-0zlc0._.js.map