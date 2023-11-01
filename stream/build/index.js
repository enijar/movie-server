/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst zod_1 = __webpack_require__(/*! zod */ \"zod\");\nconst env = zod_1.z.object({\n    PORT: zod_1.z.string(),\n    CMS_URL: zod_1.z.string(),\n    CMS_API_TOKEN: zod_1.z.string(),\n});\nenv.parse({\"PORT\":\"9999\",\"CMS_URL\":\"http://192.168.0.29:1337\",\"CMS_API_TOKEN\":\"36c40e50ea20d4fe0f1744ecf86ccfe55b96b9b67c8529dc94bb00f550d17b6e5861dd225bb96d218c450ffd64168dd2a7ad62500761d63fcf2f047c861b466729ce48632ec23cba81079131aa9118d4a9216da656704a4ccd7cff3868888649044c8fd79666b886d8ff10fbd6153d70e6d5b159ab556e8e4463a73f89cf6314\"});\nconst config = {\n    port: parseInt({\"PORT\":\"9999\",\"CMS_URL\":\"http://192.168.0.29:1337\",\"CMS_API_TOKEN\":\"36c40e50ea20d4fe0f1744ecf86ccfe55b96b9b67c8529dc94bb00f550d17b6e5861dd225bb96d218c450ffd64168dd2a7ad62500761d63fcf2f047c861b466729ce48632ec23cba81079131aa9118d4a9216da656704a4ccd7cff3868888649044c8fd79666b886d8ff10fbd6153d70e6d5b159ab556e8e4463a73f89cf6314\"}.PORT),\n    cmsUrl: {\"PORT\":\"9999\",\"CMS_URL\":\"http://192.168.0.29:1337\",\"CMS_API_TOKEN\":\"36c40e50ea20d4fe0f1744ecf86ccfe55b96b9b67c8529dc94bb00f550d17b6e5861dd225bb96d218c450ffd64168dd2a7ad62500761d63fcf2f047c861b466729ce48632ec23cba81079131aa9118d4a9216da656704a4ccd7cff3868888649044c8fd79666b886d8ff10fbd6153d70e6d5b159ab556e8e4463a73f89cf6314\"}.CMS_URL,\n    cmsApiToken: {\"PORT\":\"9999\",\"CMS_URL\":\"http://192.168.0.29:1337\",\"CMS_API_TOKEN\":\"36c40e50ea20d4fe0f1744ecf86ccfe55b96b9b67c8529dc94bb00f550d17b6e5861dd225bb96d218c450ffd64168dd2a7ad62500761d63fcf2f047c861b466729ce48632ec23cba81079131aa9118d4a9216da656704a4ccd7cff3868888649044c8fd79666b886d8ff10fbd6153d70e6d5b159ab556e8e4463a73f89cf6314\"}.CMS_API_TOKEN,\n};\nexports[\"default\"] = config;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzP2Q3MGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuY29uc3QgZW52ID0gei5vYmplY3Qoe1xuICBQT1JUOiB6LnN0cmluZygpLFxuICBDTVNfVVJMOiB6LnN0cmluZygpLFxuICBDTVNfQVBJX1RPS0VOOiB6LnN0cmluZygpLFxufSk7XG5cbmVudi5wYXJzZShwcm9jZXNzLmVudik7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgbmFtZXNwYWNlIE5vZGVKUyB7XG4gICAgaW50ZXJmYWNlIFByb2Nlc3NFbnYgZXh0ZW5kcyB6LmluZmVyPHR5cGVvZiBlbnY+IHt9XG4gIH1cbn1cblxuY29uc3QgY29uZmlnID0ge1xuICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5QT1JUKSxcbiAgY21zVXJsOiBwcm9jZXNzLmVudi5DTVNfVVJMLFxuICBjbXNBcGlUb2tlbjogcHJvY2Vzcy5lbnYuQ01TX0FQSV9UT0tFTixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express = __webpack_require__(/*! express */ \"express\");\nconst WebTorrent = __webpack_require__(/*! webtorrent */ \"webtorrent\");\nconst rangeParser = __webpack_require__(/*! range-parser */ \"range-parser\");\nconst parseTorrent = __webpack_require__(/*! parse-torrent */ \"parse-torrent\");\nconst pump = __webpack_require__(/*! pump */ \"pump\");\nconst path = __webpack_require__(/*! node:path */ \"node:path\");\nconst body_parser_1 = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst zod_1 = __webpack_require__(/*! zod */ \"zod\");\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/config.ts\");\nconst app = express();\napp.use((0, body_parser_1.json)());\napp.use(cors({\n    origin(origin, next) {\n        next(null, true);\n    },\n    credentials: true,\n}));\nconst movieSchema = zod_1.z.object({\n    id: zod_1.z.number(),\n    title: zod_1.z.string(),\n    year: zod_1.z.number(),\n    synopsis: zod_1.z.string(),\n    rating: zod_1.z.number(),\n    poster: zod_1.z.string(),\n    torrents: zod_1.z.array(zod_1.z.object({\n        url: zod_1.z.string().url(),\n        quality: zod_1.z.string().min(1),\n        seeds: zod_1.z.number(),\n        hash: zod_1.z.string(),\n    })),\n});\nconst CACHE_TIME = 20 * 60 * 1000; // 20 mins\nconst MAX_QUALITY = 1080;\nconst cache = new Map();\nconst client = new WebTorrent();\nconst trackers = [\n    \"udp://tracker.coppersurfer.tk:6969/announce\",\n    \"udp://9.rarbg.to:2920/announce\",\n    \"udp://tracker.opentrackr.org:1337\",\n    \"udp://tracker.internetwarriors.net:1337/announce\",\n    \"udp://tracker.leechers-paradise.org:6969/announce\",\n    \"udp://tracker.pirateparty.gr:6969/announce\",\n    \"udp://tracker.cyberia.is:6969/announce\",\n];\nfunction findFile(movie) {\n    return new Promise(async (resolve) => {\n        var _a;\n        let hash = null;\n        let highestQuality = 0;\n        movie.torrents.forEach((torrent) => {\n            const quality = parseInt(torrent.quality);\n            if (quality > highestQuality && quality <= MAX_QUALITY) {\n                hash = torrent.hash;\n                highestQuality = quality;\n            }\n        });\n        if (hash === null) {\n            return resolve(null);\n        }\n        const parsedLink = parseTorrent(hash);\n        const magnetUri = parseTorrent.toMagnetURI(Object.assign(Object.assign({}, parsedLink), { announce: [...((_a = parsedLink.announce) !== null && _a !== void 0 ? _a : []), ...trackers] }));\n        const options = {\n            path: path.resolve(__dirname, \"..\", \"storage\"),\n        };\n        function getFile(torrent) {\n            var _a;\n            const file = torrent.files.find((file) => {\n                return file.name.endsWith(\".mp4\");\n            });\n            return (_a = file) !== null && _a !== void 0 ? _a : null;\n        }\n        const torrent = client.get(magnetUri);\n        if (torrent) {\n            return resolve(getFile(torrent));\n        }\n        client.add(magnetUri, options, (torrent) => {\n            const file = getFile(torrent);\n            resolve(file);\n        });\n    });\n}\napp.get(\"/watch/:id\", async (req, res) => {\n    var _a, _b, _c;\n    try {\n        const apiResponse = await fetch(`${config_1.default.cmsUrl}/api/movie/${req.params.id}`, {\n            method: \"GET\",\n            headers: {\n                Authorization: `Bearer ${(_a = config_1.default.cmsApiToken) !== null && _a !== void 0 ? _a : \"\"}`,\n            },\n        });\n        if (apiResponse.status === 404) {\n            return res.status(404).end();\n        }\n        const movie = movieSchema.parse(await apiResponse.json());\n        let cachedData = (_b = cache.get(movie.id)) !== null && _b !== void 0 ? _b : null;\n        const now = Date.now();\n        // Update cache\n        if (cachedData !== null && now - cachedData.updatedAt >= CACHE_TIME) {\n            const file = await findFile(movie);\n            if (file === null) {\n                return res.status(404).end();\n            }\n            cachedData.movie = movie;\n            cachedData.file = file;\n            cachedData.updatedAt = now;\n            cache.set(movie.id, cachedData);\n        }\n        // Create cache\n        if (cachedData === null) {\n            const file = await findFile(movie);\n            if (file === null) {\n                return res.status(404).end();\n            }\n            cache.set(movie.id, { movie, file, updatedAt: Date.now() });\n            cachedData = (_c = cache.get(movie.id)) !== null && _c !== void 0 ? _c : null;\n        }\n        if (cachedData === null) {\n            return res.status(404).end();\n        }\n        const headerRange = req.headers.range;\n        const fileSize = cachedData.file.length;\n        const parsedRange = headerRange ? rangeParser(fileSize, headerRange) : null;\n        const range = Array.isArray(parsedRange) ? parsedRange[0] : null;\n        res.setHeader(\"Accept-Ranges\", \"bytes\");\n        res.setHeader(\"Content-Type\", \"video/mp4\");\n        res.setHeader(\"Content-Length\", fileSize);\n        res.statusCode = 200;\n        if (range !== null) {\n            const bytes = `bytes ${range.start}-${range.end}/${fileSize}`;\n            res.statusCode = 206;\n            res.setHeader(\"Content-Range\", bytes);\n        }\n        if (req.method === \"HEAD\") {\n            return res.end();\n        }\n        pump(cachedData.file.createReadStream(range !== null && range !== void 0 ? range : undefined), res, () => {\n            if (cachedData === null) {\n                return res.status(404).end();\n            }\n            cachedData.file.deselect();\n        });\n    }\n    catch (err) {\n        console.log(err);\n        return res.status(500).end();\n    }\n});\napp.listen(config_1.default.port, () => {\n    console.log(`Server running: http://localhost:${config_1.default.port}`);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIFdlYlRvcnJlbnQgZnJvbSBcIndlYnRvcnJlbnRcIjtcbmltcG9ydCAqIGFzIHJhbmdlUGFyc2VyIGZyb20gXCJyYW5nZS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIHBhcnNlVG9ycmVudCBmcm9tIFwicGFyc2UtdG9ycmVudFwiO1xuaW1wb3J0ICogYXMgcHVtcCBmcm9tIFwicHVtcFwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGpzb24oKSk7XG5hcHAudXNlKFxuICBjb3JzKHtcbiAgICBvcmlnaW4ob3JpZ2luLCBuZXh0KSB7XG4gICAgICBuZXh0KG51bGwsIHRydWUpO1xuICAgIH0sXG4gICAgY3JlZGVudGlhbHM6IHRydWUsXG4gIH0pLFxuKTtcblxuY29uc3QgbW92aWVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6Lm51bWJlcigpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgeWVhcjogei5udW1iZXIoKSxcbiAgc3lub3BzaXM6IHouc3RyaW5nKCksXG4gIHJhdGluZzogei5udW1iZXIoKSxcbiAgcG9zdGVyOiB6LnN0cmluZygpLFxuICB0b3JyZW50czogei5hcnJheShcbiAgICB6Lm9iamVjdCh7XG4gICAgICB1cmw6IHouc3RyaW5nKCkudXJsKCksXG4gICAgICBxdWFsaXR5OiB6LnN0cmluZygpLm1pbigxKSxcbiAgICAgIHNlZWRzOiB6Lm51bWJlcigpLFxuICAgICAgaGFzaDogei5zdHJpbmcoKSxcbiAgICB9KSxcbiAgKSxcbn0pO1xuXG50eXBlIE1vdmllVHlwZSA9IHouaW5mZXI8dHlwZW9mIG1vdmllU2NoZW1hPjtcblxudHlwZSBDYWNoZURhdGEgPSB7XG4gIG1vdmllOiBNb3ZpZVR5cGU7XG4gIGZpbGU6IFdlYlRvcnJlbnQuVG9ycmVudEZpbGU7XG4gIHVwZGF0ZWRBdDogbnVtYmVyO1xufTtcblxuY29uc3QgQ0FDSEVfVElNRSA9IDIwICogNjAgKiAxMDAwOyAvLyAyMCBtaW5zXG5cbmNvbnN0IE1BWF9RVUFMSVRZID0gMTA4MDtcblxuY29uc3QgY2FjaGUgPSBuZXcgTWFwPG51bWJlciwgQ2FjaGVEYXRhPigpO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgV2ViVG9ycmVudCgpO1xuXG5jb25zdCB0cmFja2VycyA9IFtcbiAgXCJ1ZHA6Ly90cmFja2VyLmNvcHBlcnN1cmZlci50azo2OTY5L2Fubm91bmNlXCIsXG4gIFwidWRwOi8vOS5yYXJiZy50bzoyOTIwL2Fubm91bmNlXCIsXG4gIFwidWRwOi8vdHJhY2tlci5vcGVudHJhY2tyLm9yZzoxMzM3XCIsXG4gIFwidWRwOi8vdHJhY2tlci5pbnRlcm5ldHdhcnJpb3JzLm5ldDoxMzM3L2Fubm91bmNlXCIsXG4gIFwidWRwOi8vdHJhY2tlci5sZWVjaGVycy1wYXJhZGlzZS5vcmc6Njk2OS9hbm5vdW5jZVwiLFxuICBcInVkcDovL3RyYWNrZXIucGlyYXRlcGFydHkuZ3I6Njk2OS9hbm5vdW5jZVwiLFxuICBcInVkcDovL3RyYWNrZXIuY3liZXJpYS5pczo2OTY5L2Fubm91bmNlXCIsXG5dO1xuXG5mdW5jdGlvbiBmaW5kRmlsZShtb3ZpZTogTW92aWVUeXBlKTogUHJvbWlzZTxXZWJUb3JyZW50LlRvcnJlbnRGaWxlIHwgbnVsbD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICBsZXQgaGFzaDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IGhpZ2hlc3RRdWFsaXR5ID0gMDtcbiAgICBtb3ZpZS50b3JyZW50cy5mb3JFYWNoKCh0b3JyZW50KSA9PiB7XG4gICAgICBjb25zdCBxdWFsaXR5ID0gcGFyc2VJbnQodG9ycmVudC5xdWFsaXR5KTtcbiAgICAgIGlmIChxdWFsaXR5ID4gaGlnaGVzdFF1YWxpdHkgJiYgcXVhbGl0eSA8PSBNQVhfUVVBTElUWSkge1xuICAgICAgICBoYXNoID0gdG9ycmVudC5oYXNoO1xuICAgICAgICBoaWdoZXN0UXVhbGl0eSA9IHF1YWxpdHk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzaCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkTGluayA9IHBhcnNlVG9ycmVudChoYXNoKTtcbiAgICBjb25zdCBtYWduZXRVcmkgPSBwYXJzZVRvcnJlbnQudG9NYWduZXRVUkkoe1xuICAgICAgLi4ucGFyc2VkTGluayxcbiAgICAgIGFubm91bmNlOiBbLi4uKHBhcnNlZExpbmsuYW5ub3VuY2UgPz8gW10pLCAuLi50cmFja2Vyc10sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvcHRpb25zOiBXZWJUb3JyZW50LlRvcnJlbnRPcHRpb25zID0ge1xuICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLlwiLCBcInN0b3JhZ2VcIiksXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldEZpbGUodG9ycmVudDogV2ViVG9ycmVudC5Ub3JyZW50KTogV2ViVG9ycmVudC5Ub3JyZW50RmlsZSB8IG51bGwge1xuICAgICAgY29uc3QgZmlsZSA9IHRvcnJlbnQuZmlsZXMuZmluZCgoZmlsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZmlsZS5uYW1lLmVuZHNXaXRoKFwiLm1wNFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKGZpbGUgYXMgV2ViVG9ycmVudC5Ub3JyZW50RmlsZSkgPz8gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0b3JyZW50ID0gY2xpZW50LmdldChtYWduZXRVcmkpO1xuXG4gICAgaWYgKHRvcnJlbnQpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKGdldEZpbGUodG9ycmVudCkpO1xuICAgIH1cblxuICAgIGNsaWVudC5hZGQobWFnbmV0VXJpLCBvcHRpb25zLCAodG9ycmVudCkgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IGdldEZpbGUodG9ycmVudCk7XG4gICAgICByZXNvbHZlKGZpbGUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuYXBwLmdldChcIi93YXRjaC86aWRcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuY21zVXJsfS9hcGkvbW92aWUvJHtyZXEucGFyYW1zLmlkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2NvbmZpZy5jbXNBcGlUb2tlbiA/PyBcIlwifWAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKGFwaVJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmllID0gbW92aWVTY2hlbWEucGFyc2UoYXdhaXQgYXBpUmVzcG9uc2UuanNvbigpKTtcblxuICAgIGxldCBjYWNoZWREYXRhID0gY2FjaGUuZ2V0KG1vdmllLmlkKSA/PyBudWxsO1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIC8vIFVwZGF0ZSBjYWNoZVxuICAgIGlmIChjYWNoZWREYXRhICE9PSBudWxsICYmIG5vdyAtIGNhY2hlZERhdGEudXBkYXRlZEF0ID49IENBQ0hFX1RJTUUpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBmaW5kRmlsZShtb3ZpZSk7XG4gICAgICBpZiAoZmlsZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xuICAgICAgfVxuICAgICAgY2FjaGVkRGF0YS5tb3ZpZSA9IG1vdmllO1xuICAgICAgY2FjaGVkRGF0YS5maWxlID0gZmlsZTtcbiAgICAgIGNhY2hlZERhdGEudXBkYXRlZEF0ID0gbm93O1xuICAgICAgY2FjaGUuc2V0KG1vdmllLmlkLCBjYWNoZWREYXRhKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgY2FjaGVcbiAgICBpZiAoY2FjaGVkRGF0YSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IGZpbmRGaWxlKG1vdmllKTtcbiAgICAgIGlmIChmaWxlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNhY2hlLnNldChtb3ZpZS5pZCwgeyBtb3ZpZSwgZmlsZSwgdXBkYXRlZEF0OiBEYXRlLm5vdygpIH0pO1xuICAgICAgY2FjaGVkRGF0YSA9IGNhY2hlLmdldChtb3ZpZS5pZCkgPz8gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY2FjaGVkRGF0YSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5lbmQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJSYW5nZSA9IHJlcS5oZWFkZXJzLnJhbmdlO1xuICAgIGNvbnN0IGZpbGVTaXplID0gY2FjaGVkRGF0YS5maWxlLmxlbmd0aDtcbiAgICBjb25zdCBwYXJzZWRSYW5nZSA9IGhlYWRlclJhbmdlID8gcmFuZ2VQYXJzZXIoZmlsZVNpemUsIGhlYWRlclJhbmdlKSA6IG51bGw7XG4gICAgY29uc3QgcmFuZ2UgPSBBcnJheS5pc0FycmF5KHBhcnNlZFJhbmdlKSA/IHBhcnNlZFJhbmdlWzBdIDogbnVsbDtcblxuICAgIHJlcy5zZXRIZWFkZXIoXCJBY2NlcHQtUmFuZ2VzXCIsIFwiYnl0ZXNcIik7XG4gICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInZpZGVvL21wNFwiKTtcbiAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1MZW5ndGhcIiwgZmlsZVNpemUpO1xuICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuXG4gICAgaWYgKHJhbmdlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBieXRlcyA9IGBieXRlcyAke3JhbmdlLnN0YXJ0fS0ke3JhbmdlLmVuZH0vJHtmaWxlU2l6ZX1gO1xuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDY7XG4gICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1SYW5nZVwiLCBieXRlcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiSEVBRFwiKSB7XG4gICAgICByZXR1cm4gcmVzLmVuZCgpO1xuICAgIH1cblxuICAgIHB1bXAoY2FjaGVkRGF0YS5maWxlLmNyZWF0ZVJlYWRTdHJlYW0ocmFuZ2UgPz8gdW5kZWZpbmVkKSwgcmVzLCAoKSA9PiB7XG4gICAgICBpZiAoY2FjaGVkRGF0YSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xuICAgICAgfVxuICAgICAgY2FjaGVkRGF0YS5maWxlLmRlc2VsZWN0KCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5lbmQoKTtcbiAgfVxufSk7XG5cbmFwcC5saXN0ZW4oY29uZmlnLnBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBydW5uaW5nOiBodHRwOi8vbG9jYWxob3N0OiR7Y29uZmlnLnBvcnR9YCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "parse-torrent":
/*!********************************!*\
  !*** external "parse-torrent" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("parse-torrent");

/***/ }),

/***/ "pump":
/*!***********************!*\
  !*** external "pump" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("pump");

/***/ }),

/***/ "range-parser":
/*!*******************************!*\
  !*** external "range-parser" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("range-parser");

/***/ }),

/***/ "webtorrent":
/*!*****************************!*\
  !*** external "webtorrent" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("webtorrent");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("zod");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;