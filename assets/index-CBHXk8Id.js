var cs=Object.defineProperty;var ds=(p,e,s)=>e in p?cs(p,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):p[e]=s;var l=(p,e,s)=>ds(p,typeof e!="symbol"?e+"":e,s);import{M as k,O as hs,B as Ve,F as Et,S as Te,U as Qe,V as ne,W as Ye,H as qe,N as ps,C as ms,a as Y,b as se,A as us,c as He,R as fs,d as gs,e as ys,L as xs,f as bs,g as vs,h as jt,i as ws,j as Ss,k as Zt,l as _,m as G,n as Ts,P as Se,o as Es,p as Ms,q as Cs,r as Xt,s as Is,t as Kt,u as As,D as Xe,v as Mt,w as Ge,x as Ke,y as Je,G as Ct,z as Jt,E as ie,I as _s,J as fe,T as Me,K as Rs,Q as Ps,X as es,Y as ks,Z as It,_ as Ls,$ as Ds,a0 as $e,a1 as gt,a2 as Hs,a3 as et,a4 as tt}from"./three-CzJWjZO5.js";import{O as ze}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();var E=(p=>(p.INIT="INIT",p.TITLE="TITLE",p.STAGE_START="STAGE_START",p.PLAYING="PLAYING",p.STAGE_CLEAR="STAGE_CLEAR",p.SKIP_PROMPT="SKIP_PROMPT",p.GAME_OVER="GAME_OVER",p.SHOP="SHOP",p.SKILL_SELECT="SKILL_SELECT",p.RESULT="RESULT",p))(E||{});class Bs{constructor(){l(this,"listeners",new Map)}on(e,s){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(s),()=>i.delete(s)}once(e,s){const i=this.on(e,t=>{s(t),i()})}emit(e,s){const i=this.listeners.get(e);if(i)for(const t of i)t(s)}off(e,s){var i;(i=this.listeners.get(e))==null||i.delete(s)}clear(){this.listeners.clear()}}const P=new Bs,Os=[{from:E.INIT,to:E.TITLE},{from:E.TITLE,to:E.STAGE_START},{from:E.STAGE_START,to:E.PLAYING},{from:E.PLAYING,to:E.STAGE_CLEAR},{from:E.PLAYING,to:E.GAME_OVER},{from:E.STAGE_CLEAR,to:E.STAGE_START},{from:E.STAGE_CLEAR,to:E.SKIP_PROMPT},{from:E.STAGE_CLEAR,to:E.SHOP},{from:E.SKIP_PROMPT,to:E.SHOP},{from:E.SKIP_PROMPT,to:E.STAGE_START},{from:E.SHOP,to:E.SKILL_SELECT},{from:E.SKILL_SELECT,to:E.STAGE_START},{from:E.GAME_OVER,to:E.RESULT},{from:E.RESULT,to:E.TITLE}];class Ns{constructor(){l(this,"current",E.INIT)}get state(){return this.current}canTransition(e){return Os.some(s=>(Array.isArray(s.from)?s.from:[s.from]).includes(this.current)&&s.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const s=this.current;this.current=e,P.emit("state:changed",{from:s,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class Gs{constructor(){l(this,"updateFns",[]);l(this,"rafId",null);l(this,"lastTime",0);l(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const s=this.updateFns.indexOf(e);s!==-1&&this.updateFns.splice(s,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=s=>{this.rafId=requestAnimationFrame(e);const i=(s-this.lastTime)/1e3;this.lastTime=s;const t=Math.min(i,this.maxDelta);for(const a of this.updateFns)a(t)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const At="yukimedal_save",$s="yukimedal_best",st={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class zs{constructor(){l(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(At);return e?{...st,...JSON.parse(e)}:{...st}}catch{return{...st}}}save(){try{localStorage.setItem(At,JSON.stringify(this.data))}catch{}}updateBest(e,s){const i=e*3+s,t=this.data.bestPhase*3+this.data.bestStage;i>t&&(this.data.bestPhase=e,this.data.bestStage=s,localStorage.setItem($s,JSON.stringify({phase:e,stage:s}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const ts={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ae{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fs=new hs(-1,1,1,-1,0,1);class Ws extends Ve{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}}const Us=new Ws;class yt{constructor(e){this._mesh=new k(Us,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fs)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Vs extends Ae{constructor(e,s){super(),this.textureID=s!==void 0?s:"tDiffuse",e instanceof Te?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qe.clone(e.uniforms),this.material=new Te({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yt(this.material)}render(e,s,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _t extends Ae{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,i){const t=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,o;this.inverse?(n=0,o=1):(n=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(t.REPLACE,t.REPLACE,t.REPLACE),a.buffers.stencil.setFunc(t.ALWAYS,n,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(t.EQUAL,1,4294967295),a.buffers.stencil.setOp(t.KEEP,t.KEEP,t.KEEP),a.buffers.stencil.setLocked(!0)}}class Ys extends Ae{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qs{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const i=e.getSize(new ne);this._width=i.width,this._height=i.height,s=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vs(ts),this.copyPass.material.blending=ps,this.clock=new ms}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const s=this.renderer.getRenderTarget();let i=!1;for(let t=0,a=this.passes.length;t<a;t++){const n=this.passes[t];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const o=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_t!==void 0&&(n instanceof _t?i=!0:n instanceof Ys&&(i=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const i=this._width*this._pixelRatio,t=this._height*this._pixelRatio;this.renderTarget1.setSize(i,t),this.renderTarget2.setSize(i,t);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,t)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Qs extends Ae{constructor(e,s,i=null,t=null,a=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=i,this.clearColor=t,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Y}render(e,s,i){const t=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=t}}const js={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Y(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ce extends Ae{constructor(e,s,i,t){super(),this.strength=s!==void 0?s:1,this.radius=i,this.threshold=t,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Y(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(a,n,{type:qe}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Ye(a,n,{type:qe});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const c=new Ye(a,n,{type:qe});c.texture.name="UnrealBloomPass.v"+d,c.texture.generateMipmaps=!1,this.renderTargetsVertical.push(c),a=Math.round(a/2),n=Math.round(n/2)}const o=js;this.highPassUniforms=Qe.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=t,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Te({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const r=[3,5,7,9,11];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(r[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ne(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=s,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new se(1,1,1),new se(1,1,1),new se(1,1,1),new se(1,1,1),new se(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=ts;this.copyUniforms=Qe.clone(m.uniforms),this.blendMaterial=new Te({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:us,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Y,this.oldClearAlpha=1,this.basic=new He,this.fsQuad=new yt(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,s){let i=Math.round(e/2),t=Math.round(s/2);this.renderTargetBright.setSize(i,t);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,t),this.renderTargetsVertical[a].setSize(i,t),this.separableBlurMaterials[a].uniforms.invSize.value=new ne(1/i,1/t),i=Math.round(i/2),t=Math.round(t/2)}render(e,s,i,t,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let r=0;r<this.nMips;r++)this.fsQuad.material=this.separableBlurMaterials[r],this.separableBlurMaterials[r].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[r].uniforms.direction.value=Ce.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[r]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[r].uniforms.colorTexture.value=this.renderTargetsHorizontal[r].texture,this.separableBlurMaterials[r].uniforms.direction.value=Ce.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[r]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[r];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){const s=[];for(let i=0;i<e;i++)s.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Te({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:s}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Te({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ce.BlurDirectionX=new ne(1,0);Ce.BlurDirectionY=new ne(0,1);const Zs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Xs extends Ae{constructor(){super();const e=Zs;this.uniforms=Qe.clone(e.uniforms),this.material=new fs({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new yt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,s,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gs.getTransfer(this._outputColorSpace)===ys&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xs?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ws?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ss&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ks extends Zt{constructor(){super();const e=new _;e.deleteAttribute("uv");const s=new G({side:Ts}),i=new G,t=new Se(16777215,900,28,2);t.position.set(.418,16.199,.3),this.add(t);const a=new k(e,s);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const n=new k(e,i);n.position.set(-10.906,2.009,1.846),n.rotation.set(0,-.195,0),n.scale.set(2.328,7.905,4.651),this.add(n);const o=new k(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const r=new k(e,i);r.position.set(6.167,.857,7.803),r.rotation.set(0,.561,0),r.scale.set(3.927,6.285,3.687),this.add(r);const f=new k(e,i);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const m=new k(e,i);m.position.set(2.291,-.756,-2.621),m.rotation.set(0,-.286,0),m.scale.set(1.546,1.552,1.496),this.add(m);const d=new k(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const u=new k(e,we(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const c=new k(e,we(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new k(e,we(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const y=new k(e,we(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const x=new k(e,we(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const v=new k(e,we(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(s=>{s.isMesh&&(e.add(s.geometry),e.add(s.material))});for(const s of e)s.dispose()}}function we(p){const e=new He;return e.color.setScalar(p),e}function it(){return window.innerWidth<window.innerHeight?window.innerHeight:window.innerWidth}function at(){return window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight}class Js{constructor(e){l(this,"scene");l(this,"renderer");l(this,"composer");l(this,"renderPass");l(this,"bloomPass");l(this,"onResize",()=>{const e=it(),s=at();this.renderer.setSize(e,s),this.composer.setSize(e,s)});this.scene=new Zt,this.scene.background=new Y(1710638),this.scene.fog=new Es(1710638,30,80),this.renderer=new Ms({antialias:!0}),this.renderer.setSize(it(),at()),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Cs,this.renderer.toneMapping=jt,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Xt,e.appendChild(this.renderer.domElement);const s=new Is(this.renderer);s.compileEquirectangularShader();const i=s.fromScene(new Ks,.04).texture;this.scene.environment=i,s.dispose();const t=it(),a=at(),n=new Kt(60,t/a,.1,200);this.renderPass=new Qs(this.scene,n),this.bloomPass=new Ce(new ne(t,a),.88,.42,.72);const o=new Xs;this.composer=new qs(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(o),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}applySceneTheme(e){this.scene.background.set(e.background),this.scene.fog&&this.scene.fog.color.set(e.fogColor),this.bloomPass.strength=e.bloomStrength,this.bloomPass.threshold=e.bloomThreshold,this.bloomPass.radius=e.bloomRadius}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const g={INITIAL_MEDALS:90,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:40,QUOTA_MULTIPLIER:1.28,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:4.5,PUSHER_HEIGHT:1.2,PUSHER_RANGE:1.5,PUSHER_PERIOD_MS:2e3,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_RADIUS_TRIPLE:.55,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:8,INITIAL_PUSHER_MEDALS:5,MEDAL_PROB_NORMAL:58,MEDAL_PROB_DOUBLE:78,MEDAL_PROB_TRIPLE:88,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,JACKPOT_THRESHOLD:25,JACKPOT_MEDAL_REWARD:15,OPEN_ZONE_START:3.5,MEDAL_CLEANUP_Y:-8};function nt(){return window.innerWidth<window.innerHeight?window.innerHeight:window.innerWidth}function ot(){return window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight}class ei{constructor(){l(this,"camera");l(this,"target",new se(0,0,2));l(this,"basePosition",new se(0,5,13));l(this,"shakeOffset",new se);l(this,"shakeIntensity",0);l(this,"shakeDecay",0);l(this,"titleMode",!1);l(this,"titleAngle",0);l(this,"idleTime",0);l(this,"onResize",()=>{this.camera.aspect=nt()/ot(),this.camera.updateProjectionMatrix(),this.updateCameraForAspect()});this.camera=new Kt(g.CAMERA_FOV,nt()/ot(),g.CAMERA_NEAR,g.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}updateCameraForAspect(){nt()/ot()<1.3?(this.basePosition.set(0,7,11),this.target.set(0,0,2)):(this.basePosition.set(0,5,13),this.target.set(0,0,2)),this.titleMode||(this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target))}setFrontView(){this.updateCameraForAspect()}setTitleMode(e){this.titleMode=e,e||this.setFrontView()}shake(e,s){this.shakeIntensity=e,this.shakeDecay=s>0?-Math.log(.01)/s:0}update(e){if(this.titleMode){this.titleAngle+=e*.18;const t=Math.sin(this.titleAngle)*3,a=7.5+Math.sin(this.titleAngle*.55)*1,n=12+Math.cos(this.titleAngle*.7)*1.2;this.camera.position.set(t,a,n),this.camera.lookAt(t*.2,1.5,1.5);return}this.idleTime+=e;const s=Math.sin(this.idleTime*.22)*.055,i=Math.sin(this.idleTime*.31)*.038;this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity+s,(Math.random()*2-1)*this.shakeIntensity+i,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition),this.camera.position.x+=s,this.camera.position.y+=i),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class ti{constructor(e){l(this,"ambient");l(this,"dirLight");l(this,"fillLight");l(this,"warmPoint");l(this,"coolPoint");l(this,"sideLeft");l(this,"sideRight");l(this,"fieldSpot");l(this,"backSpot");l(this,"graze");l(this,"scanLight");l(this,"feverActive",!1);this.ambient=new As(4210784,.55),this.dirLight=new Xe(16775408,1.4),this.dirLight.position.set(6,14,8),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=55,this.dirLight.shadow.camera.left=-14,this.dirLight.shadow.camera.right=14,this.dirLight.shadow.camera.top=14,this.dirLight.shadow.camera.bottom=-14,this.dirLight.shadow.bias=-4e-4,this.fillLight=new Xe(5267711,.28),this.fillLight.position.set(-6,4,6),this.warmPoint=new Se(16760928,1,18),this.warmPoint.position.set(0,7,5),this.coolPoint=new Se(3364351,.65,22),this.coolPoint.position.set(0,5,-9),this.sideLeft=new Se(16771280,.55,24),this.sideLeft.position.set(-10,5,2),this.sideRight=new Se(16771280,.55,24),this.sideRight.position.set(10,5,2),this.fieldSpot=new Mt(16774376,1.6,32,Math.PI/4.5,.35,1.2),this.fieldSpot.position.set(0,11,2),this.fieldSpot.target.position.set(0,0,-.5),this.fieldSpot.castShadow=!1,this.backSpot=new Mt(8952319,.8,22,Math.PI/6,.45,1.6),this.backSpot.position.set(0,10,-11),this.backSpot.target.position.set(0,1,0),this.backSpot.castShadow=!1,this.graze=new Xe(16767136,.55),this.graze.position.set(14,2,4),this.scanLight=new Se(16775912,1.3,12),this.scanLight.position.set(0,8,-1),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint,this.sideLeft,this.sideRight,this.fieldSpot,this.fieldSpot.target,this.backSpot,this.backSpot.target,this.graze,this.scanLight)}update(e){this.scanLight.position.x=Math.sin(e*.57)*4.8,this.scanLight.position.z=Math.cos(e*.38)*1.5-3,this.scanLight.intensity=(this.feverActive?2.2:1.3)+Math.sin(e*1.1)*(this.feverActive?.35:.18)}applyTheme(e){this.ambient.color.set(e.ambientColor),this.ambient.intensity=e.ambientIntensity,this.fillLight.color.set(e.fillColor),this.fillLight.intensity=e.fillIntensity,this.warmPoint.color.set(e.warmPointColor),this.warmPoint.intensity=e.warmPointIntensity,this.coolPoint.color.set(e.coolPointColor),this.coolPoint.intensity=e.coolPointIntensity}setFeverMode(e){this.feverActive=e,this.fieldSpot.intensity=e?2.2:1.6,this.fieldSpot.color.set(e?16772710:16774376),this.scanLight.color.set(e?16763972:16775912)}}class si{constructor(e){l(this,"stars");l(this,"starMat");l(this,"brightStars");l(this,"brightStarMat");l(this,"grid");l(this,"scene");l(this,"dustMotes");l(this,"dustPos");l(this,"_t",0);this.scene=e;const s=2800,i=new Float32Array(s*3),t=65;for(let h=0;h<s;h++){const y=Math.random()*Math.PI*2,x=Math.acos(2*Math.random()-1),v=(.3+Math.random()*.7)*t;i[h*3]=v*Math.sin(x)*Math.cos(y),i[h*3+1]=v*Math.sin(x)*Math.sin(y),i[h*3+2]=v*Math.cos(x)}const a=new Ve;a.setAttribute("position",new Ge(i,3)),this.starMat=new Ke({size:.13,color:8952319,transparent:!0,opacity:.88,sizeAttenuation:!0}),this.stars=new Je(a,this.starMat),e.add(this.stars);const n=200,o=new Float32Array(n*3),r=new Float32Array(n*3),f=[new Y(16765088),new Y(10070783),new Y(16769152),new Y(16756991),new Y(8454143)];for(let h=0;h<n;h++){const y=Math.random()*Math.PI*2,x=Math.acos(2*Math.random()-1),v=(.5+Math.random()*.45)*t;o[h*3]=v*Math.sin(x)*Math.cos(y),o[h*3+1]=v*Math.sin(x)*Math.sin(y),o[h*3+2]=v*Math.cos(x);const M=f[Math.floor(Math.random()*f.length)];r[h*3]=M.r,r[h*3+1]=M.g,r[h*3+2]=M.b}const m=new Ve;m.setAttribute("position",new Ge(o,3)),m.setAttribute("color",new Ge(r,3)),this.brightStarMat=new Ke({size:.4,vertexColors:!0,transparent:!0,opacity:.95,sizeAttenuation:!0}),this.brightStars=new Je(m,this.brightStarMat),e.add(this.brightStars),this.grid=new Ct(80,40,1714782,924218),this.grid.position.y=-.56,e.add(this.grid);const d=160;this.dustPos=new Float32Array(d*3);for(let h=0;h<d;h++)this.dustPos[h*3]=(Math.random()-.5)*12,this.dustPos[h*3+1]=Math.random()*7,this.dustPos[h*3+2]=(Math.random()-.5)*14;const u=new Ve;u.setAttribute("position",new Ge(this.dustPos,3));const c=new Ke({size:.045,color:16765088,transparent:!0,opacity:.32,sizeAttenuation:!0,depthWrite:!1});this.dustMotes=new Je(u,c),e.add(this.dustMotes)}applyTheme(e){this.starMat.color.set(e.starColor),this.scene.remove(this.grid),this.grid.geometry.dispose(),this.grid.material.dispose(),this.grid=new Ct(80,40,e.gridColorA,e.gridColorB),this.grid.position.y=-.56,this.scene.add(this.grid)}update(e){this._t+=e,this.stars.rotation.y+=.008*e,this.brightStars.rotation.y-=.003*e,this.brightStars.rotation.x+=.001*e,this.starMat.opacity=.8+Math.sin(this._t*.45)*.08,this.brightStarMat.opacity=.88+Math.sin(this._t*.62+1.1)*.07;const s=this.dustPos.length/3;for(let i=0;i<s;i++)this.dustPos[i*3]+=Math.sin(i*2.3+this.dustPos[i*3+1]*.7)*6e-4*e,this.dustPos[i*3+1]+=(.006+i%7*5e-4)*e,this.dustPos[i*3+1]>7.5&&(this.dustPos[i*3]=(Math.random()-.5)*12,this.dustPos[i*3+1]=-.2,this.dustPos[i*3+2]=(Math.random()-.5)*14);this.dustMotes.geometry.attributes.position.needsUpdate=!0}}class ii{constructor(){l(this,"world");l(this,"_initialized",!1)}async init(){await ze.init(),this.world=new ze.World({x:0,y:g.GRAVITY,z:0});const e=this.world.integrationParameters;e.numSolverIterations=16,e.numAdditionalFrictionIterations=8,e.numInternalPgsIterations=2,e.maxCcdSubsteps=8,this._initialized=!0}get rapier(){return ze}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,s){return this.world.createCollider(e,s)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new ze.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}setTimestep(e){this._initialized&&(this.world.integrationParameters.dt=e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class ai{constructor(){l(this,"bodyToMesh",new Map)}register(e,s){this.bodyToMesh.set(e.handle,s)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(s=>{const i=this.bodyToMesh.get(s.handle);if(!i)return;const t=s.translation(),a=s.rotation(),n=i.userData.physicsYOffset??0;i.position.set(t.x,t.y+n,t.z),i.quaternion.set(a.x,a.y,a.z,a.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class ni{constructor(){l(this,"handles",new Map);l(this,"dropZoneHandles",new Set);l(this,"eventQueue");l(this,"medalCollectedCallback");l(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,s){this.handles.set(e,s),s==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e,s=1){for(let i=0;i<s;i++)e.stepWithEvents(this.eventQueue);this.eventQueue.drainCollisionEvents((i,t,a)=>{var f,m;if(!a)return;const n=this.handles.get(i),o=this.handles.get(t);if(n==="drop_zone"&&(o==="medal"||o==="item")||o==="drop_zone"&&(n==="medal"||n==="item")){const d=n==="drop_zone"?t:i,u=n==="drop_zone"?o:n;u==="medal"?(f=this.medalCollectedCallback)==null||f.call(this,d):u==="item"&&((m=this.itemCollectedCallback)==null||m.call(this,d))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class oi{constructor(){l(this,"body");l(this,"time",0);l(this,"zBase");l(this,"initialized",!1);l(this,"speedMultiplier",1);l(this,"paused",!1);this.zBase=-12/2+g.PUSHER_DEPTH/2-g.PUSHER_RANGE}async initPhysics(e){const s=e.rapier,i=s.RigidBodyDesc.kinematicVelocityBased().setTranslation(0,g.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(i);const t=s.ColliderDesc.cuboid(g.PUSHER_WIDTH/2,g.PUSHER_HEIGHT/2,g.PUSHER_DEPTH/2).setFriction(1.2);e.createCollider(t,this.body),this.initialized=!0}update(e){if(this.paused)return this.initialized&&this.body.setLinvel({x:0,y:0,z:0},!0),this.currentZOffset;this.time+=e*this.speedMultiplier;const s=g.PUSHER_PERIOD_MS/1e3,i=this.time%s/s,t=(1-Math.cos(i*Math.PI*2))/2*g.PUSHER_RANGE;if(this.initialized){const a=Math.PI/s*Math.sin(i*Math.PI*2)*g.PUSHER_RANGE*this.speedMultiplier;this.body.setLinvel({x:0,y:0,z:a},!0)}return t}get currentZOffset(){const e=g.PUSHER_PERIOD_MS/1e3,s=this.time%e/e;return(1-Math.cos(s*Math.PI*2))/2*g.PUSHER_RANGE}get restZ(){return this.zBase}}function Fe(p){return[p>>16&255,p>>8&255,p&255]}function rt(p){const e=p.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function X(p,e,s,i){return`rgb(${Math.min(255,p+i)},${Math.min(255,e+i)},${Math.min(255,s+i)})`}function Le(p,e,s,i){return`rgb(${Math.max(0,p-i)},${Math.max(0,e-i)},${Math.max(0,s-i)})`}function Rt(p,e,s){return`rgb(${p},${e},${s})`}function le(p,e,s,i,t){return`rgba(${Math.min(255,p+i)},${Math.min(255,e+i)},${Math.min(255,s+i)},${t})`}const Ee=class Ee{static get(e,s){if(!this.cache.has(e)){const i=s(),t=new Jt(i);this.cache.set(e,t)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),a=256/2,n=256/2,o=256/2-2,[r,f,m]=Fe(e),d=Rt(r,f,m),u=X(r,f,m,75),c=X(r,f,m,38),h=Le(r,f,m,60),y=Le(r,f,m,90),x=t.createRadialGradient(a-32,n-32,4,a,n,o);x.addColorStop(0,u),x.addColorStop(.25,X(r,f,m,55)),x.addColorStop(.55,c),x.addColorStop(.8,d),x.addColorStop(1,h),t.fillStyle=x,t.beginPath(),t.arc(a,n,o,0,Math.PI*2),t.fill(),t.save(),t.globalCompositeOperation="source-over";const v=480;for(let I=0;I<v;I++){const C=I/v*Math.PI*2,z=.012+Math.random()*.028,F=Math.random()>.5;t.strokeStyle=F?`rgba(${Math.min(255,r+45)},${Math.min(255,f+40)},${Math.min(255,m+35)},${z})`:`rgba(${Math.max(0,r-20)},${Math.max(0,f-18)},${Math.max(0,m-15)},${z*.7})`,t.lineWidth=.5+Math.random()*.6,t.beginPath(),t.moveTo(a+Math.cos(C)*16,n+Math.sin(C)*16),t.lineTo(a+Math.cos(C)*(o-20),n+Math.sin(C)*(o-20)),t.stroke()}t.restore();for(let I=0;I<4;I++){const C=o-6-I*8;t.strokeStyle=Le(r,f,m,35+I*10),t.lineWidth=2,t.beginPath(),t.arc(a,n,C,0,Math.PI*2),t.stroke(),t.strokeStyle=X(r,f,m,22+I*6),t.lineWidth=.9,t.beginPath(),t.arc(a,n,C+2.5,0,Math.PI*2),t.stroke()}t.strokeStyle=y,t.lineWidth=8,t.beginPath(),t.arc(a,n,o-5,0,Math.PI*2),t.stroke(),t.save(),t.strokeStyle=X(r,f,m,60),t.globalAlpha=.55,t.lineWidth=3,t.beginPath(),t.arc(a,n,o-3,Math.PI*.9,Math.PI*1.8),t.stroke(),t.restore();const M=68,D=t.createRadialGradient(a-10,n-10,0,a,n,M);D.addColorStop(0,X(r,f,m,65)),D.addColorStop(.4,X(r,f,m,30)),D.addColorStop(.75,c),D.addColorStop(.92,d),D.addColorStop(1,h),t.fillStyle=D,t.beginPath(),t.arc(a,n,M,0,Math.PI*2),t.fill(),t.strokeStyle=Le(r,f,m,50),t.lineWidth=2.5,t.beginPath(),t.arc(a,n,M+.5,0,Math.PI*2),t.stroke(),t.strokeStyle=X(r,f,m,48),t.lineWidth=1.2,t.beginPath(),t.arc(a,n,M-2.5,0,Math.PI*2),t.stroke(),t.lineCap="round";for(let I=0;I<24;I++){const C=I*Math.PI/12,z=I%2===0,F=z?16:22,$=z?56:48,W=z?.28:.18;t.strokeStyle=`rgba(${Math.min(255,r+50)},${Math.min(255,f+45)},${Math.min(255,m+38)},${W})`,t.lineWidth=z?2.5:1.5,t.beginPath(),t.moveTo(a+Math.cos(C)*F,n+Math.sin(C)*F),t.lineTo(a+Math.cos(C)*$,n+Math.sin(C)*$),t.stroke()}const T=e===13691135;if(T||e===16719968){const I=T?"×2":"×3",C=22,z=t.createRadialGradient(a-5,n-5,0,a,n,C);z.addColorStop(0,X(r,f,m,100)),z.addColorStop(.6,c),z.addColorStop(1,h),t.fillStyle=z,t.beginPath(),t.arc(a,n,C,0,Math.PI*2),t.fill(),t.strokeStyle=y,t.lineWidth=2,t.beginPath(),t.arc(a,n,C,0,Math.PI*2),t.stroke(),t.font="bold 26px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(255,255,255,0.96)",t.shadowColor="rgba(0,0,0,0.85)",t.shadowBlur=6,t.fillText(I,a,n+1),t.shadowBlur=0,t.textAlign="left"}else{const F=Math.PI/5,$=t.createRadialGradient(a-4,n-4,0,a,n,13);$.addColorStop(0,u),$.addColorStop(.5,c),$.addColorStop(1,h),t.fillStyle=$,t.beginPath();for(let W=0;W<10;W++){const Q=W%2===0?13:5.5,ee=W*F-Math.PI/2;W===0?t.moveTo(a+Q*Math.cos(ee),n+Q*Math.sin(ee)):t.lineTo(a+Q*Math.cos(ee),n+Q*Math.sin(ee))}t.closePath(),t.fill(),t.strokeStyle=y,t.lineWidth=1.5,t.stroke()}const b=t.createRadialGradient(a-48,n-48,0,a-48,n-48,95);b.addColorStop(0,"rgba(255,255,255,0.72)"),b.addColorStop(.2,"rgba(255,255,255,0.32)"),b.addColorStop(.5,"rgba(255,255,255,0.08)"),b.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=b,t.beginPath(),t.arc(a,n,o-2,0,Math.PI*2),t.fill();const O=t.createRadialGradient(a+52,n+50,0,a+52,n+50,60);O.addColorStop(0,"rgba(255,255,255,0.22)"),O.addColorStop(.4,"rgba(255,255,255,0.06)"),O.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=O,t.beginPath(),t.arc(a,n,o-2,0,Math.PI*2),t.fill();const L=t.getImageData(0,0,256,256),R=L.data;for(let I=0;I<R.length;I+=4){const C=(Math.random()-.5)*10;R[I]=Math.max(0,Math.min(255,R[I]+C)),R[I+1]=Math.max(0,Math.min(255,R[I+1]+C)),R[I+2]=Math.max(0,Math.min(255,R[I+2]+C))}return t.putImageData(L,0,0),i})}static getFieldTexture(e="#2a2a4e"){return this.get(`field_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d"),[a,n,o]=rt(e),r=a>o+20;if(t.fillStyle=e,t.fillRect(0,0,512,512),r){const f=t.getImageData(0,0,512,512),m=f.data;for(let c=0;c<m.length;c+=4){const h=(Math.random()-.5)*22;m[c]=Math.max(0,Math.min(255,a+h)),m[c+1]=Math.max(0,Math.min(255,n+h)),m[c+2]=Math.max(0,Math.min(255,o+h)),m[c+3]=255}t.putImageData(f,0,0);for(let c=0;c<512;c+=3){const h=.07+Math.random()*.06,y=Math.random()>.5;t.strokeStyle=y?`rgba(${Math.min(255,a+18)},${Math.min(255,n+14)},${Math.min(255,o+10)},${h})`:`rgba(${Math.max(0,a-14)},${Math.max(0,n-10)},${Math.max(0,o-8)},${h})`,t.lineWidth=1+Math.random()*1.5,t.beginPath(),t.moveTo(0,c+.5),t.lineTo(512,c+.5),t.stroke()}t.save(),t.globalAlpha=.1;const d=36;t.strokeStyle=X(a,n,o,50),t.lineWidth=.8,t.translate(512/2,512/2),t.rotate(Math.PI/4),t.translate(-512/2,-512/2);for(let c=-512;c<=512*2;c+=d)t.beginPath(),t.moveTo(c,-512),t.lineTo(c,512*2),t.stroke();for(let c=-512;c<=512*2;c+=d)t.beginPath(),t.moveTo(-512,c),t.lineTo(512*2,c),t.stroke();t.restore();const u=t.createRadialGradient(512/2,512/2,512*.25,512/2,512/2,512*.75);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,0.28)"),t.fillStyle=u,t.fillRect(0,0,512,512)}else{const f=t.getImageData(0,0,512,512),m=f.data;for(let c=0;c<m.length;c+=4){const h=(Math.random()-.5)*18;m[c]=Math.max(0,Math.min(255,a+h)),m[c+1]=Math.max(0,Math.min(255,n+h)),m[c+2]=Math.max(0,Math.min(255,o+h)),m[c+3]=255}t.putImageData(f,0,0),t.save(),t.globalAlpha=.14;const d=40;t.strokeStyle=X(a,n,o,60),t.lineWidth=.8,t.translate(512/2,512/2),t.rotate(Math.PI/4),t.translate(-512/2,-512/2);for(let c=-512;c<=512*2;c+=d)t.beginPath(),t.moveTo(c,-512),t.lineTo(c,512*2),t.stroke();for(let c=-512;c<=512*2;c+=d)t.beginPath(),t.moveTo(-512,c),t.lineTo(512*2,c),t.stroke();t.restore(),t.save(),t.globalAlpha=.25,t.fillStyle=X(a,n,o,80),t.translate(512/2,512/2),t.rotate(Math.PI/4),t.translate(-512/2,-512/2);for(let c=0;c<=512*2;c+=d)for(let h=0;h<=512*2;h+=d)t.beginPath(),t.arc(c-512/2,h-512/2,1.8,0,Math.PI*2),t.fill();t.restore();for(let c=0;c<512;c+=4){const h=.04+Math.random()*.04,y=Math.random()>.5;t.strokeStyle=y?`rgba(${Math.min(255,a+20)},${Math.min(255,n+16)},${Math.min(255,o+14)},${h})`:`rgba(${Math.max(0,a-10)},${Math.max(0,n-8)},${Math.max(0,o-8)},${h})`,t.lineWidth=1+Math.random()*1.2,t.beginPath(),t.moveTo(0,c+.5),t.lineTo(512,c+.5),t.stroke()}const u=t.createRadialGradient(512/2,512/2,512*.2,512/2,512/2,512*.72);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,0.30)"),t.fillStyle=u,t.fillRect(0,0,512,512)}return i})}static getPusherTexture(e="#3a3a6e"){return this.get(`pusher_${e}`,()=>{const t=document.createElement("canvas");t.width=256,t.height=128;const a=t.getContext("2d"),[n,o,r]=rt(e),f=n>r+20;if(a.fillStyle=e,a.fillRect(0,0,256,128),f){a.strokeStyle=le(n,o,r,90,.38),a.lineWidth=.8;const u=14;for(let c=-128;c<384;c+=u)a.beginPath(),a.moveTo(c,0),a.lineTo(c+128,128),a.stroke();for(let c=0;c<512;c+=u)a.beginPath(),a.moveTo(c,0),a.lineTo(c-128,128),a.stroke();a.fillStyle=X(n,o,r,90);for(let c=0;c<2;c++){const h=10+c*108;for(let y=20;y<256;y+=36)a.fillStyle=X(n,o,r,80),a.beginPath(),a.arc(y,h,4.5,0,Math.PI*2),a.fill(),a.fillStyle=le(n,o,r,150,.7),a.beginPath(),a.arc(y-1,h-1,2,0,Math.PI*2),a.fill(),a.fillStyle="rgba(0,0,0,0.45)",a.beginPath(),a.arc(y+1,h+1,3,.5,Math.PI*2),a.fill()}}else{for(let u=0;u<128;u++){const c=.015+Math.random()*.055;a.strokeStyle=le(n,o,r,100,c),a.lineWidth=1,a.beginPath(),a.moveTo(0,u+.5),a.lineTo(256,u+.5),a.stroke()}a.fillStyle=le(n,o,r,120,.35);for(let u=24;u<256;u+=48)a.beginPath(),a.arc(u,8,3,0,Math.PI*2),a.fill()}const m=a.createLinearGradient(0,0,0,18);m.addColorStop(0,le(n,o,r,150,.6)),m.addColorStop(1,le(n,o,r,150,0)),a.fillStyle=m,a.fillRect(0,0,256,18);const d=a.createLinearGradient(0,114,0,128);return d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,0.55)"),a.fillStyle=d,a.fillRect(0,114,256,14),t})}static getWallTexture(e="#1a1a3e"){return this.get(`wall_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),[a,n,o]=rt(e),r=a>o+20;if(t.fillStyle=e,t.fillRect(0,0,256,256),r)for(let u=0;u<256;u+=40){const c=t.createLinearGradient(0,u,0,u+40);c.addColorStop(0,X(a,n,o,18)),c.addColorStop(.5,Rt(a,n,o)),c.addColorStop(1,Le(a,n,o,12)),t.fillStyle=c,t.fillRect(0,u,256,40),t.strokeStyle="rgba(0,0,0,0.55)",t.lineWidth=2,t.beginPath(),t.moveTo(0,u+40-1),t.lineTo(256,u+40-1),t.stroke(),t.strokeStyle=le(a,n,o,70,.45),t.lineWidth=1,t.beginPath(),t.moveTo(0,u+1),t.lineTo(256,u+1),t.stroke();for(let h=24;h<256;h+=48){const y=u+40-7;t.fillStyle=X(a,n,o,55),t.beginPath(),t.arc(h,y,4,0,Math.PI*2),t.fill(),t.fillStyle=le(a,n,o,130,.6),t.beginPath(),t.arc(h-1,y-1,1.5,0,Math.PI*2),t.fill(),t.fillStyle="rgba(0,0,0,0.5)",t.beginPath(),t.arc(h+1,y+1,2.5,.4,Math.PI*2),t.fill()}}else{for(let h=0;h<256;h+=64){const y=t.createLinearGradient(h,0,h+64,0);y.addColorStop(0,"rgba(0,0,0,0.22)"),y.addColorStop(.12,"rgba(0,0,0,0)"),y.addColorStop(.88,"rgba(0,0,0,0)"),y.addColorStop(1,"rgba(0,0,0,0.22)"),t.fillStyle=y,t.fillRect(h,0,64,256),t.strokeStyle="rgba(0,0,0,0.55)",t.lineWidth=2,t.beginPath(),t.moveTo(h,0),t.lineTo(h,256),t.stroke(),t.strokeStyle=le(a,n,o,72,.28),t.lineWidth=.9,t.beginPath(),t.moveTo(h+2.5,0),t.lineTo(h+2.5,256),t.stroke()}const u=56;for(let h=0;h<256;h+=u){t.strokeStyle="rgba(0,0,0,0.50)",t.lineWidth=2,t.beginPath(),t.moveTo(0,h),t.lineTo(256,h),t.stroke(),t.strokeStyle=le(a,n,o,62,.22),t.lineWidth=.9,t.beginPath(),t.moveTo(0,h+2.5),t.lineTo(256,h+2.5),t.stroke(),t.save(),t.globalAlpha=.6;for(let y=0;y<256;y+=64)t.fillStyle=X(a,n,o,85),t.beginPath(),t.arc(y,h,2.2,0,Math.PI*2),t.fill(),t.fillStyle="rgba(0,0,0,0.45)",t.beginPath(),t.arc(y+.6,h+.6,1.1,0,Math.PI*2),t.fill();t.restore()}t.save(),t.globalAlpha=.04,t.strokeStyle=X(a,n,o,55),t.lineWidth=.6;for(let h=-256;h<256*2;h+=10)t.beginPath(),t.moveTo(h,0),t.lineTo(h+256*.5,256),t.stroke();t.restore();const c=t.createRadialGradient(256/2,256/2,256*.2,256/2,256/2,256*.72);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,0.32)"),t.fillStyle=c,t.fillRect(0,0,256,256)}const f=t.getImageData(0,0,256,256),m=f.data;for(let d=0;d<m.length;d+=4){const u=(Math.random()-.5)*(r?8:10);m[d]=Math.max(0,Math.min(255,m[d]+u)),m[d+1]=Math.max(0,Math.min(255,m[d+1]+u)),m[d+2]=Math.max(0,Math.min(255,m[d+2]+u))}return t.putImageData(f,0,0),i})}static getScreenTexture(e,s){return this.get(`screen_${e.toString(16)}_${s.toString(16)}`,()=>{const a=document.createElement("canvas");a.width=512,a.height=256;const n=a.getContext("2d"),[o,r,f]=Fe(s),m=n.createRadialGradient(512/2,256*.7,0,512/2,256*.7,512*.65);m.addColorStop(0,`rgb(${Math.min(o+28,60)},${Math.min(r+20,52)},${Math.min(f+28,68)})`),m.addColorStop(1,`rgb(${Math.max(o-4,0)},${Math.max(r-4,0)},${Math.max(f-4,0)})`),n.fillStyle=m,n.fillRect(0,0,512,256);const[d,u,c]=Fe(e),h=`rgb(${d},${u},${c})`,y=`rgba(${d},${u},${c},0.60)`,x=`rgba(${d},${u},${c},0.25)`;n.strokeStyle=y,n.lineWidth=1.5,n.strokeRect(10,10,492,236),n.strokeStyle=x,n.lineWidth=.8,n.strokeRect(16,16,480,224);const v=["♠","♥","♦","♣"],M=[[32,38],[480,38],[32,234],[480,234]];n.textAlign="center",n.textBaseline="middle",n.font="bold 20px serif";for(let L=0;L<4;L++)n.fillStyle=x,n.fillText(v[L],M[L][0],M[L][1]);n.strokeStyle=x,n.lineWidth=1.5;for(const[L,R]of[[22,22],[490,22],[22,234],[490,234]])n.beginPath(),n.moveTo(L-7,R),n.lineTo(L+7,R),n.moveTo(L,R-7),n.lineTo(L,R+7),n.stroke();n.textAlign="center",n.textBaseline="top",n.font="bold 12px monospace",n.fillStyle=x,n.fillText("✦  INSERT COIN  ✦",512/2,22),n.strokeStyle=x,n.lineWidth=1,n.beginPath(),n.moveTo(20,52),n.lineTo(492,52),n.stroke(),n.textAlign="left",n.textBaseline="top",n.font="bold 11px monospace",n.fillStyle=x,n.fillText("JACKPOT",32,64),n.fillText("HIGH SCORE",512/2+20,64),n.font="bold 22px monospace",n.fillStyle=y,n.fillText("000000",32,80),n.fillText("999999",512/2+20,80),n.strokeStyle=y,n.lineWidth=1,n.beginPath(),n.moveTo(20,116),n.lineTo(492,116),n.stroke(),n.textAlign="center",n.textBaseline="alphabetic",n.font="bold 52px monospace",n.shadowColor=h,n.shadowBlur=26,n.fillStyle=h,n.fillText("YUKIMEDAL",512/2,206),n.shadowBlur=0,n.font="14px monospace",n.fillStyle=y,n.fillText("ROGUELIKE  MEDAL  PUSHER",512/2,234);const[D,T,S]=Fe(s),b=`rgb(${Math.max(D-4,0)},${Math.max(T-4,0)},${Math.max(S-4,0)})`,O=n;return Promise.resolve().then(()=>{const L=`screen_${e.toString(16)}_${s.toString(16)}`,R=Ee.cache.get(L);R&&(Ee._screen={ctx:O,tex:R,nr:d,ng:u,nb:c,clearRgb:b,W:512,H:256})}),a})}static refreshJackpot(e){const s=this._screen;if(!s)return;const{ctx:i,tex:t,nr:a,ng:n,nb:o,clearRgb:r,W:f}=s,m=`rgba(${a},${n},${o},0.60)`,d=`rgba(${a},${n},${o},0.25)`;i.fillStyle=r,i.fillRect(28,62,220,40),i.textAlign="left",i.textBaseline="top",i.font="bold 11px monospace",i.fillStyle=d,i.fillText("JACKPOT",32,64),i.font="bold 22px monospace",i.fillStyle=m,i.fillText(Math.min(e,999999).toString().padStart(6,"0"),32,80),t.needsUpdate=!0}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}};l(Ee,"cache",new Map),l(Ee,"_screen",null);let de=Ee;const ri=new ie(g.MEDAL_RADIUS,g.MEDAL_RADIUS,g.MEDAL_THICKNESS,48),li=new ie(g.MEDAL_RADIUS_LARGE,g.MEDAL_RADIUS_LARGE,g.MEDAL_THICKNESS,48),ci=new ie(g.MEDAL_RADIUS_TRIPLE,g.MEDAL_RADIUS_TRIPLE,g.MEDAL_THICKNESS*1.3,48),di={normal:16766720,double:13691135,large:15245312,triple:16719968},hi={normal:1,double:2,large:1,triple:3};function pi(p){const e=p*100;return e<g.MEDAL_PROB_NORMAL?"normal":e<g.MEDAL_PROB_DOUBLE?"double":e<g.MEDAL_PROB_TRIPLE?"triple":"large"}function mi(p){return p==="large"?li:p==="triple"?ci:ri}function Pt(p){p.traverse(e=>{if(e instanceof k){e.geometry.dispose();const s=e.material;Array.isArray(s)?s.forEach(i=>i.dispose()):s.dispose()}})}function ui(p){return[p>>16&255,p>>8&255,p&255]}function lt(p){return Math.max(0,Math.min(255,p))}function xt(p,e){const[s,i,t]=ui(p);return lt(s+e)<<16|lt(i+e)<<8|lt(t+e)}function fi(p,e,s){const i=p*.27,t=p*.118,a=5,n=Math.max(e*.55,.012),o=i*.1,r=new Rs;for(let u=0;u<a*2;u++){const c=u%2===0?i:t,h=u*Math.PI/a-Math.PI/2;u===0?r.moveTo(c*Math.cos(h),c*Math.sin(h)):r.lineTo(c*Math.cos(h),c*Math.sin(h))}r.closePath();const f=new Ps(r,{depth:n,bevelEnabled:!0,bevelSize:o,bevelThickness:n*.5,bevelSegments:3});f.rotateX(-Math.PI/2);const m=new fe({color:xt(s,48),metalness:.98,roughness:.06,clearcoat:.9,clearcoatRoughness:.02,envMapIntensity:1.8}),d=new k(f,m);return d.position.y=e/2,d.castShadow=!0,d}function kt(p,e,s,i){const t=p*(i?.4:.32),a=p*.032,n=new Me(t,a,8,36),o=new fe({color:xt(s,65),emissive:new Y(s),emissiveIntensity:i?.55:.25,metalness:.95,roughness:.06,clearcoat:.85,clearcoatRoughness:.03,envMapIntensity:1.8}),r=new k(n,o);return r.rotation.x=Math.PI/2,r.position.y=e/2+a,r.castShadow=!0,r}class gi{constructor(){l(this,"medals",new Map);l(this,"pendingRemoval",new Set);l(this,"spawnCounter",0)}spawn(e,s,i,t,a,n,o,r,f){if(this.medals.size>=g.MAX_MEDALS_ON_FIELD)return;const m=t.rapier,d=f??pi(Math.random()),u=d==="large"?g.MEDAL_RADIUS_LARGE:d==="triple"?g.MEDAL_RADIUS_TRIPLE:g.MEDAL_RADIUS,c=hi[d],h=m.RigidBodyDesc.dynamic().setTranslation(e,s,i).setLinearDamping(.5).setAngularDamping(4).setCcdEnabled(!0),y=t.createRigidBody(h);y.setEnabledRotations(!0,!1,!0,!0),r&&y.setLinvel(r,!0);const x=m.ColliderDesc.cylinder(g.MEDAL_THICKNESS/2,u).setRestitution(.05).setFriction(.9).setDensity(g.MEDAL_MASS).setActiveEvents(m.ActiveEvents.COLLISION_EVENTS),v=t.createCollider(x,y);n.registerHandle(v.handle,"medal");const M=di[d],D=de.getMedalTexture(M);D.wrapS=D.wrapT=_s;const T=d==="triple",S=d==="double",b=.12+Math.random()*.12,O=(Math.random()-.5)*.14,L=new Y(Math.min(1,1+O),Math.min(1,1+O*.85),Math.min(1,1-O*.25)),R=new fe({color:T||S?16777215:L,map:D,metalness:.9,roughness:b,clearcoat:.4,clearcoatRoughness:.05+Math.random()*.06,reflectivity:.95,envMapIntensity:.85,emissive:T||S?new Y(M):new Y(0),emissiveIntensity:T?.18:S?.07:0}),I=new k(mi(d),R);I.castShadow=!0,I.receiveShadow=!1;const C=g.MEDAL_THICKNESS*.58,z=new Me(u-C*.45,C,10,48),F=new fe({color:xt(M,18),metalness:.95,roughness:.1,clearcoat:.6,clearcoatRoughness:.04,envMapIntensity:.9,emissive:T||S?new Y(M):new Y(0),emissiveIntensity:T?.18:S?.06:0}),$=new k(z,F);$.rotation.x=Math.PI/2,I.add($);const W=Math.random()*Math.PI*2;if(!T&&!S){const Q=fi(u,g.MEDAL_THICKNESS,M);Q.rotation.y=W,I.add(Q)}else{const Q=kt(u,g.MEDAL_THICKNESS,M,T);if(I.add(Q),T){const ee=kt(u,g.MEDAL_THICKNESS,M,!1);ee.scale.setScalar(1.35),ee.position.y=g.MEDAL_THICKNESS/2+.005,I.add(ee)}}I.userData.physicsYOffset=.03,I.position.set(e,s,i),o.add(I),a.register(y,I),this.medals.set(v.handle,{body:y,collider:v,mesh:I,type:d,quotaValue:c}),this.spawnCounter++}getQuotaValue(e){var s;return((s=this.medals.get(e))==null?void 0:s.quotaValue)??1}getMedalPosition(e){const s=this.medals.get(e);if(!s)return{x:0,y:0,z:0};const i=s.body.translation();return{x:i.x,y:i.y,z:i.z}}markForRemoval(e){this.pendingRemoval.add(e)}nudgeDeadZone(e,s){for(const[,i]of this.medals){if(this.pendingRemoval.has(i.collider.handle))continue;const t=i.body.translation(),a=i.body.linvel();if(t.z>e&&t.z<s&&t.y>-.2&&Math.sqrt(a.x*a.x+a.z*a.z)<.2){const r=.5+(s-t.z)*.15;i.body.applyImpulse({x:(Math.random()-.5)*.3,y:.03,z:r},!0)}}}shakeAll(e=3){for(const[,s]of this.medals){if(this.pendingRemoval.has(s.collider.handle))continue;const i=(Math.random()-.5)*e,t=Math.random()*e*.4+.5,a=(Math.random()-.5)*e*.5-e*.3;s.body.applyImpulse({x:i,y:t,z:a},!0)}}flushRemovals(e,s,i,t){let a=0;for(const n of this.pendingRemoval){const o=this.medals.get(n);o&&(s.unregister(o.body),i.unregisterHandle(n),t.remove(o.mesh),e.removeRigidBody(o.body),Pt(o.mesh),this.medals.delete(n),a++)}return this.pendingRemoval.clear(),a}cleanupFallen(e,s,i,t,a,n){let o=0;for(const[r,f]of this.medals)f.body.translation().y<e&&!this.pendingRemoval.has(r)&&(this.pendingRemoval.add(r),n==null||n(r),o++);return o}get count(){return this.medals.size}clear(e,s,i,t){for(const[a,n]of this.medals)s.unregister(n.body),i.unregisterHandle(a),t.remove(n.mesh),e.removeRigidBody(n.body),Pt(n.mesh);this.medals.clear(),this.pendingRemoval.clear()}}class yi{constructor(){l(this,"body");l(this,"collider")}async initPhysics(e,s){const i=e.rapier,t=g.OPEN_ZONE_START,a=g.FIELD_DEPTH/2+15,n=(t+a)/2,o=(a-t)/2,r=i.RigidBodyDesc.fixed().setTranslation(0,-2,n);this.body=e.createRigidBody(r);const f=i.ColliderDesc.cuboid(g.FIELD_WIDTH/2+1,1.5,o).setActiveEvents(i.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(f,this.body),s.registerHandle(this.collider.handle,"drop_zone")}}class xi{constructor(){l(this,"time",0)}setupStage(e,s,i,t){this.clear(t)}getBonusMultiplierAt(e,s){return 1}update(e){this.time+=e}clear(e){this.time=0}}var H=(p=>(p.Common="Common",p.Rare="Rare",p.Epic="Epic",p.Legendary="Legendary",p))(H||{});const ss={[H.Common]:11184810,[H.Rare]:3381759,[H.Epic]:13387007,[H.Legendary]:16763904},bi={[H.Common]:3355443,[H.Rare]:1127304,[H.Epic]:6689160,[H.Legendary]:8939008},vi={[H.Common]:.45,[H.Rare]:.75,[H.Epic]:.85,[H.Legendary]:.95};function wi(p){const e=ss[p],s=bi[p],i=vi[p],t=new es,a=p===H.Legendary?.4:p===H.Epic?.3:p===H.Rare?.2:.1,n=new fe({color:e,emissive:s,emissiveIntensity:i,metalness:p===H.Legendary?.1:.25,roughness:.1,clearcoat:1,clearcoatRoughness:.04,transmission:a,ior:1.55,transparent:!0,opacity:.92,envMapIntensity:2});let o;switch(p){case H.Legendary:o=new Ds(.24,.07,80,12,2,3);break;case H.Epic:o=new Ls(.32,0);break;case H.Rare:{const f=new It(.22,.3,8,1),m=new It(.22,.26,8,1),d=new k(m,n.clone());d.rotation.x=Math.PI,d.position.y=-.03;const u=new k(f,n);return u.castShadow=!0,d.castShadow=!0,t.add(u,d),o=f,Lt(t,p),t}default:o=new ks(.3,0);break}const r=new k(o,n);if(r.castShadow=!0,t.add(r),p!==H.Common){const f=new fe({color:e,emissive:e,emissiveIntensity:p===H.Legendary?2:1.4,metalness:0,roughness:.4,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.45}),m=o.clone(),d=new k(m,f);d.scale.setScalar(.65),t.add(d)}return Lt(t,p),t}function Lt(p,e){const s=ss[e];if(e===H.Common)return;const i=e===H.Legendary?.4:e===H.Epic?.36:.3,t=new Me(i,.018,8,48),a=new fe({color:s,emissive:s,emissiveIntensity:e===H.Legendary?2.5:1.8,metalness:0,roughness:.05,clearcoat:.8,clearcoatRoughness:.02,transparent:!0,opacity:.9}),n=new k(t,a);if(n.rotation.x=Math.PI/3,p.add(n),e===H.Legendary){const o=new k(new Me(i*.88,.012,6,40),a.clone());o.rotation.x=Math.PI/3,o.rotation.y=Math.PI/2,p.add(o)}}class Si{constructor(e){l(this,"mesh");this.mesh=wi(e),this.mesh.castShadow=!0}update(e){this.mesh.rotation.y+=.025;for(const s of this.mesh.children)s instanceof k&&s.geometry instanceof Me&&(s.rotation.z+=.018)}setPosition(e,s,i){this.mesh.position.set(e,s,i)}dispose(){this.mesh.traverse(e=>{if(e instanceof k){e.geometry.dispose();const s=e.material;Array.isArray(s)?s.forEach(i=>i.dispose()):s.dispose()}})}}class bt{constructor(e=Date.now()){l(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,s){return Math.floor(this.next()*(s-e+1))+e}nextFloat(e,s){return this.next()*(s-e)+e}shuffle(e){const s=[...e];for(let i=s.length-1;i>0;i--){const t=Math.floor(this.next()*(i+1));[s[i],s[t]]=[s[t],s[i]]}return s}weightedPick(e,s){const i=s.reduce((a,n)=>a+n,0);let t=this.next()*i;for(let a=0;a<e.length;a++)if(t-=s[a],t<=0)return e[a];return e[e.length-1]}}class Ti{constructor(){l(this,"items",new Map);l(this,"pendingRemoval",new Set)}spawnItems(e,s,i,t,a,n){const o=new bt(n);for(const r of e){const f=o.nextFloat(-3,g.FIELD_WIDTH/2-1),m=o.nextFloat(-1.5,3),u=.4+.05;this.spawnSingle(r,f,u,m,s,i,t,a)}}spawnSingle(e,s,i,t,a,n,o,r){const f=a.rapier,m=f.RigidBodyDesc.dynamic().setTranslation(s,i,t).setLinearDamping(.7).setAngularDamping(.8),d=a.createRigidBody(m),u=f.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(f.ActiveEvents.COLLISION_EVENTS),c=a.createCollider(u,d);o.registerHandle(c.handle,"item");const h=new Si(e.rarity);h.setPosition(s,i,t),r.add(h.mesh),n.register(d,h.mesh),this.items.set(c.handle,{body:d,collider:c,mesh:h,definitionId:e.id})}getDefinitionId(e){var s;return(s=this.items.get(e))==null?void 0:s.definitionId}getItemPosition(e){const s=this.items.get(e);if(!s)return{x:0,y:0,z:0};const i=s.body.translation();return{x:i.x,y:i.y,z:i.z}}cleanupFallen(e,s){for(const[i,t]of this.items)t.body.translation().y<e&&!this.pendingRemoval.has(i)&&(this.pendingRemoval.add(i),s==null||s(i))}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,s,i,t){for(const a of this.pendingRemoval){const n=this.items.get(a);n&&(s.unregister(n.body),i.unregisterHandle(a),t.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose(),this.items.delete(a))}this.pendingRemoval.clear()}update(e){for(const s of this.items.values())s.mesh.update(e)}clear(e,s,i,t){for(const[a,n]of this.items)s.unregister(n.body),i.unregisterHandle(a),t.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const pt=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:H.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:H.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:H.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:H.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:H.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:H.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:H.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:H.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:H.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:H.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function Ie(p){return pt.find(e=>e.id===p)}const Dt={[H.Common]:60,[H.Rare]:30,[H.Epic]:8,[H.Legendary]:2};class Ht{constructor(e){l(this,"rng");this.rng=new bt(e)}pickRandom(e){const s=[];for(let i=0;i<e;i++){const t=this.pickRarity(),a=pt.filter(o=>o.rarity===t);if(a.length===0){s.push(pt[0]);continue}const n=Math.floor(this.rng.next()*a.length);s.push(a[n])}return s}pickRarity(){const e=Object.keys(Dt),s=e.map(i=>Dt[i]);return this.rng.weightedPick(e,s)}}function A(p,e,s=!1){const i=new k(p,e);return s&&(i.castShadow=!0,i.receiveShadow=!0),i}function Bt(p,e=1){return new G({color:p,emissive:p,emissiveIntensity:e,roughness:.5,metalness:.3})}class N{constructor(e){l(this,"group");l(this,"pusherMesh",null);l(this,"wallMeshes",[]);l(this,"sideGuardMeshes",[]);l(this,"collectionGlowMat",null);l(this,"gaugeMats",[]);l(this,"ledStripMats",[]);l(this,"collectionFlashRemaining",0);l(this,"pusherZBase",-12/2+g.PUSHER_DEPTH/2-g.PUSHER_RANGE);l(this,"screenCanvas",null);l(this,"screenCtx",null);l(this,"screenCanvasTex",null);l(this,"screenNeonColor","#00ff88");this.group=new es,this.rebuild(e)}rebuild(e){this.group.traverse(s=>{if(s!==this.group&&s instanceof k){s.geometry.dispose();const i=s.material;Array.isArray(i)?i.forEach(t=>t.dispose()):i.dispose()}}),this.group.clear(),this.wallMeshes=[],this.sideGuardMeshes=[],this.collectionGlowMat=null,this.gaugeMats=[],this.ledStripMats=[],this.screenCanvasTex&&(this.screenCanvasTex.dispose(),this.screenCanvasTex=null),this.screenCanvas=document.createElement("canvas"),this.screenCanvas.width=512,this.screenCanvas.height=300,this.screenCtx=this.screenCanvas.getContext("2d"),this.screenCanvasTex=new Jt(this.screenCanvas),this.screenCanvasTex.colorSpace=Xt,this.screenNeonColor="#"+e.primaryNeon.toString(16).padStart(6,"0"),this.updateScreenDisplay(0,0,0,1,1),this.buildFieldSurface(e),this.buildPusher(e),this.addPusherDetails(e),this.createWalls(e),this.buildCabinet(e),this.buildCabinetDetails(e)}static cabinetMat(e){return new G({color:e.cabinetColor,roughness:.72,metalness:.42})}static brassMat(e){return new G({color:e.brassColor,roughness:e.brassRoughness,metalness:e.brassMetalness})}buildFieldSurface(e){const s=g.FIELD_DEPTH/2+g.OPEN_ZONE_START,i=-12/2+s/2,t=de.getFieldTexture(e.fieldTexBase);t.wrapS=t.wrapT=$e,t.repeat.set(g.FIELD_WIDTH/2,s/2);const a=new G({map:t,color:16777215,roughness:.92,metalness:0}),n=new _(g.FIELD_WIDTH,g.FIELD_HEIGHT,s),o=new k(n,a);o.receiveShadow=!0,o.position.set(0,-.1/2,i),this.group.add(o);const r=-12/2,f=g.OPEN_ZONE_START,m=g.FIELD_WIDTH,d=[{z:r+(f-r)*.35,color:e.secondaryNeon,intensity:.45},{z:r+(f-r)*.65,color:e.tertiaryNeon,intensity:.4}];for(const{z:u,color:c,intensity:h}of d){const y=new G({color:c,emissive:c,emissiveIntensity:h,roughness:.2,metalness:.05}),x=new k(new _(m-.3,.015,.04),y);x.position.set(0,.01,u),this.group.add(x)}}buildPusher(e){const s=new _(g.PUSHER_WIDTH,g.PUSHER_HEIGHT,g.PUSHER_DEPTH),i=new G({color:e.pusherTexBase,roughness:.35,metalness:.65});this.pusherMesh=new k(s,i),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,g.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh)}addPusherDetails(e){const s=g.PUSHER_WIDTH,i=g.PUSHER_HEIGHT,t=g.PUSHER_DEPTH,a=A(new _(s+.06,.14,.14),N.brassMat(e));a.position.set(0,-i/2+.07,t/2),this.pusherMesh.add(a);const n=A(new _(s+.06,.06,.06),N.brassMat(e));n.position.set(0,i/2,t/2),this.pusherMesh.add(n);for(const f of[-1,1]){const m=A(new _(.1,i,.1),N.brassMat(e));m.position.set(f*(s/2-.05),0,t/2),this.pusherMesh.add(m)}const o=new G({color:e.primaryNeon,emissive:new Y(e.primaryNeon),emissiveIntensity:.85,roughness:.2,metalness:.05}),r=A(new _(s-.12,.045,.055),o);r.position.set(0,i*.1,t/2+.03),this.pusherMesh.add(r),this.ledStripMats.push({mat:o,baseIntensity:.85,phase:Math.PI*.5,speed:1.4})}createWalls(e){const t=de.getWallTexture(e.wallTexBase);t.wrapS=t.wrapT=$e;const n=(()=>{const d=t.clone();return d.wrapS=d.wrapT=$e,d.needsUpdate=!0,new G({map:d,color:16777215,roughness:.8,metalness:.15})})(),o=g.FIELD_WIDTH+.3*2;n.map.repeat.set(o/2,3.5/2);const r=new _(o,3.5,.3),f=new k(r,n);f.position.set(0,3.5/2,-12/2-.3/2),this.group.add(f),this.wallMeshes.push(f);const m=[{y:.8,color:e.secondaryNeon,baseIntensity:.8,phase:0,speed:2.4},{y:2.1,color:e.tertiaryNeon,baseIntensity:.65,phase:1.57,speed:1.8}];for(const{y:d,color:u,baseIntensity:c,phase:h,speed:y}of m){const x=new G({color:u,emissive:u,emissiveIntensity:c,roughness:.2,metalness:.05});this.ledStripMats.push({mat:x,baseIntensity:c,phase:h,speed:y});const v=new k(new _(o,.038,.3*.4),x);v.position.set(0,d,-12/2-.3+.02),this.group.add(v)}}buildCabinet(e){const s=g.FIELD_WIDTH,i=g.FIELD_DEPTH,t=-i/2,a=i/2,n=i/2+a+5.5,o=t+n/2-1,r=A(new _(12,1,n),N.cabinetMat(e),!0);r.position.set(0,-.52,o),this.group.add(r);const f=A(new _(12,.1,.1),N.brassMat(e));f.position.set(0,0,a+2.55),this.group.add(f);const m=i/2+g.OPEN_ZONE_START,d=1.1,u=7.2,c=s/2+.75,h=t+m/2;for(const J of[-1,1]){const te=A(new _(d,u,m),N.cabinetMat(e),!0);te.position.set(J*c,u/2-.5,h),this.group.add(te);const Re=A(new _(d+.08,.14,m+.08),N.brassMat(e));Re.position.set(J*c,u-.5+.07,h),this.group.add(Re);const Pe=A(new _(d+.08,.1,m+.08),N.brassMat(e));Pe.position.set(J*c,-.02,h),this.group.add(Pe);const ke=A(new _(.06,u*.75,m*.7),new G({color:e.insetColor,roughness:.9,metalness:.1}));ke.position.set(J*(c-(d/2+.01)),u/2-.5,h),this.group.add(ke);const Ne=A(new _(.06,u*.8,.06),N.brassMat(e));Ne.position.set(J*(c-d/2-.04),u/2-.5,h),this.group.add(Ne)}for(const J of[-1,1]){for(const Pe of[-.22,.22]){const ke=new G({color:e.secondaryNeon,emissive:e.secondaryNeon,emissiveIntensity:.72,roughness:.2,metalness:.05}),Ne=Pe>0?Math.PI*.6:0;this.ledStripMats.push({mat:ke,baseIntensity:.72,phase:Ne,speed:1.6});const Tt=A(new _(.032,u*.82,.032),ke);Tt.position.set(J*(c+Pe),u*.41+.04,h+m/2+.09),this.group.add(Tt)}const te=new G({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:1.5,roughness:.1,metalness:.2});this.ledStripMats.push({mat:te,baseIntensity:1.5,phase:J>0?.8:2,speed:2.2});const Re=A(new gt(.14,8,6),te);Re.position.set(J*c,u-.5+.34,h+m/2+.09),this.group.add(Re)}const y=10.5,x=1.3,v=t-1.15,M=de.getWallTexture(e.wallTexBase).clone();M.wrapS=M.wrapT=$e,M.repeat.set(6,5),M.needsUpdate=!0;const D=new G({map:M,color:16777215,roughness:.75,metalness:.18}),T=A(new _(12,y,x),D,!0);T.position.set(0,y/2-.5,v),this.group.add(T);const S=A(new _(12.1,.15,x+.1),N.brassMat(e));S.position.set(0,y-.5+.07,v),this.group.add(S);const b=3.5,O=7,L=2.25,R=t+.06,I=new G({color:0,emissive:16777215,emissiveMap:this.screenCanvasTex,emissiveIntensity:1,roughness:.3,metalness:0}),C=A(new _(O,b,.08),I);C.position.set(0,L,R),this.group.add(C);const z=A(new _(O+.24,b+.24,.06),N.brassMat(e));z.position.set(0,L,t+.01),this.group.add(z);const F=A(new _(12.1,.08,.08),N.brassMat(e));F.position.set(0,y-.5+.18,v+x/2),this.group.add(F);const $=new G({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:1.2,roughness:.2,metalness:.1}),W=A(new _(.06,b*.9,.06),$);W.position.set(-O/2-.18,L,R),this.group.add(W);const Q=A(new _(.06,b*.9,.06),$.clone());Q.position.set(O/2+.18,L,R),this.group.add(Q);const ee=A(new _(O+.6,.04,.04),$.clone());ee.position.set(0,L-b/2-.18,R),this.group.add(ee);const ge=A(new _(12,1.1,4.5),N.cabinetMat(e),!0);ge.position.set(0,-.56,a+2.25),this.group.add(ge);const Be=A(new _(12,.12,.12),N.brassMat(e));Be.position.set(0,0,a+4.45),this.group.add(Be);const ye=A(new _(12,.1,.08),N.brassMat(e));ye.position.set(0,.06,a+4.5),this.group.add(ye);const Ze=new G({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:.04,roughness:.12,metalness:.85,transparent:!0,opacity:.45}),Oe=A(new _(11.6,.02,4),Ze);Oe.position.set(0,.01,a+2.25),this.group.add(Oe);const _e=new G({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:.28,roughness:.2,metalness:.1}),pe=A(new _(.04,.03,4.1),_e);pe.position.set(-5.8,.02,a+2.25),this.group.add(pe);const xe=A(new _(.04,.03,4.1),_e.clone());xe.position.set(5.8,.02,a+2.25),this.group.add(xe);const w=A(new _(11.6,.03,.04),_e.clone());w.position.set(0,.02,a+.27),this.group.add(w);const B=A(new _(12,.5,m),N.cabinetMat(e),!0);B.position.set(0,6.7,h),this.group.add(B);const V=A(new _(12,.1,.1),N.brassMat(e));V.position.set(0,6.96,g.OPEN_ZONE_START+.1),this.group.add(V);for(const J of[-1,1]){const te=A(new _(.09,.09,i+.5),N.brassMat(e));te.position.set(J*(s/2+.04),.05,h),this.group.add(te)}const j=A(new _(s+.2,3.6,.18),new G({color:e.pusherHousingColor,roughness:.65,metalness:.5}));j.position.set(0,1.8,t-.08),this.group.add(j);const K=A(new _(s-.2,.08,.08),N.brassMat(e));K.position.set(0,3.65,t+.01),this.group.add(K);const oe=A(new _(s+.1,.07,.07),N.brassMat(e));oe.position.set(0,.06,g.OPEN_ZONE_START),this.group.add(oe);const be=new G({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:1,roughness:.2,metalness:.1,transparent:!0,opacity:.88});this.collectionGlowMat=be;const ae=A(new _(s+.2,.03,.22),be);ae.position.set(0,.015,g.OPEN_ZONE_START),this.group.add(ae);const re=A(new _(s+.1,.07,.07),N.brassMat(e));re.position.set(0,.06,t+.04),this.group.add(re);const ve=i/2+g.OPEN_ZONE_START,rs=t+ve/2;for(const J of[-1,1]){const te=A(new _(.07,.07,ve),N.brassMat(e));te.position.set(J*s/2,.06,rs),this.group.add(te)}const wt=g.OPEN_ZONE_START-t,ls=t+wt/2;for(const J of[-1,1]){const te=A(new _(.08,.08,wt),N.brassMat(e));te.position.set(J*(s/2),3.55,ls),this.group.add(te)}const St=new k(new _(100,.2,100),new G({color:e.groundColor,emissive:e.groundColor,emissiveIntensity:.1,roughness:.95,metalness:0}));St.position.set(0,-.65,0),this.group.add(St)}buildCabinetDetails(e){const s=g.FIELD_DEPTH/2,i=-12/2,t=1.1,a=7.2,n=g.FIELD_DEPTH/2+g.OPEN_ZONE_START,o=g.FIELD_WIDTH/2+.75,r=i+n/2,f=1.3,m=i-1.15;for(const T of[-1,1]){for(let b=0;b<2;b++){const O=b===0?-.26:.16,L=a*.6,R=T*(o+O),I=r+n/2+.07,C=A(new ie(.05,.05,L,8),N.brassMat(e));C.position.set(R,L/2+.3,I),this.group.add(C);const z=4;for(let F=0;F<=z;F++){const $=.3+F*(L/z),W=A(new ie(.09,.09,.07,10),N.brassMat(e));W.position.set(R,$,I),this.group.add(W)}}const S=A(new _(.48,.1,.1),N.brassMat(e));S.position.set(T*o,a*.6+.3+.05,r+n/2+.07),this.group.add(S)}for(const T of[-1,1]){const S=T*(o-t/2-.025),b=A(new ie(.24,.24,.06,18),N.brassMat(e));b.rotation.z=Math.PI/2,b.position.set(S,a*.52,r+.8),this.group.add(b);const O=Bt(e.secondaryNeon,.55),L=A(new ie(.18,.18,.03,18),O);L.rotation.z=Math.PI/2,L.position.set(S-T*.035,a*.52,r+.8),this.group.add(L),this.gaugeMats.push(O);const R=A(new ie(.16,.16,.05,14),N.brassMat(e));R.rotation.z=Math.PI/2,R.position.set(S,a*.28,r-1.2),this.group.add(R);const I=Bt(e.primaryNeon,.45),C=A(new ie(.11,.11,.025,14),I);C.rotation.z=Math.PI/2,C.position.set(S-T*.03,a*.28,r-1.2),this.group.add(C),this.gaugeMats.push(I)}const d=1.5,u=m+f/2+.05,c=A(new Me(.82,.1,10,28),N.brassMat(e));c.position.set(0,d,u),this.group.add(c);const h=A(new ie(.74,.74,.04,28),new G({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.55,transparent:!0,opacity:.82,roughness:.05,metalness:0}));h.rotation.x=Math.PI/2,h.position.set(0,d,u),this.group.add(h);for(let T=0;T<4;T++){const S=T/4*Math.PI*2+Math.PI/4,b=A(new ie(.045,.045,.06,8),N.brassMat(e));b.rotation.x=Math.PI/2,b.position.set(Math.cos(S)*.88,d+Math.sin(S)*.88,u+.03),this.group.add(b)}const y=A(new _(5.5,.05,.05),new G({color:e.secondaryNeon,emissive:e.secondaryNeon,emissiveIntensity:.9,roughness:.2,metalness:.1}));y.position.set(0,d+1.12,u),this.group.add(y);{const T=t+.12,S=.12,b=n+.12;for(const O of[-1,1])for(const L of[.33,.66]){const R=A(new _(T,S,b),N.brassMat(e));R.position.set(O*o,L*a-.5,r),this.group.add(R)}}const x=s+4.45,v=A(new _(1.3,.16,.05),new G({color:e.insetColor,roughness:.9,metalness:.1}));v.position.set(0,-.08,x),this.group.add(v);const M=A(new _(1.5,.3,.04),N.brassMat(e));M.position.set(0,-.08,x-.01),this.group.add(M);const D=A(new _(.9,.045,.06),new G({color:0,roughness:1,metalness:0}));D.position.set(0,-.06,x+.01),this.group.add(D)}updateScreenDisplay(e,s,i,t,a){const n=this.screenCtx,o=this.screenCanvasTex;if(!n||!o)return;const r=this.screenCanvas.width,f=this.screenCanvas.height,m=this.screenNeonColor;n.globalAlpha=1,n.shadowBlur=0,n.textBaseline="alphabetic",n.fillStyle="#08101e",n.fillRect(0,0,r,f);for(let D=0;D<f;D+=3)n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(0,D,r,1);n.font="bold 22px monospace",n.textAlign="center",n.fillStyle=m,n.shadowColor=m,n.shadowBlur=10,n.fillText("YUKIMEDAL",r/2,36),n.shadowBlur=0,n.globalAlpha=.35,n.strokeStyle=m,n.lineWidth=1,n.beginPath(),n.moveTo(20,48),n.lineTo(r-20,48),n.stroke(),n.globalAlpha=1,n.font="14px monospace",n.fillStyle="#6688aa",n.shadowBlur=0,n.textAlign="left",n.fillText("MEDALS",28,125),n.fillText("QUOTA",220,125),n.fillText("PHASE",390,125),n.font="bold 40px monospace",n.fillStyle=m,n.shadowColor=m,n.shadowBlur=14,n.fillText(String(e),28,168);const d=s>=i;n.fillStyle=d?"#44ff88":"#ffffff",n.shadowColor=d?"#44ff88":"#aaddff",n.shadowBlur=d?16:6,n.fillText(`${Math.floor(s)}/${i}`,220,168),n.fillStyle=m,n.shadowColor=m,n.shadowBlur=14,n.fillText(String(t),390,168),n.shadowBlur=0;const u=220,c=178,h=160,y=12;n.fillStyle="#1a2840",n.fillRect(u,c,h,y);const x=i>0?Math.min(s/i,1):0,v=Math.round(x*120),M=d?"#44ff88":`hsl(${v},100%,60%)`;n.fillStyle=M,n.shadowColor=M,n.shadowBlur=6,n.fillRect(u,c,h*x,y),n.shadowBlur=0,n.strokeStyle="#334466",n.lineWidth=1,n.strokeRect(u,c,h,y),n.font="20px monospace",n.fillStyle="#aabbcc",n.fillText(`S${a}/3`,390,204),n.globalAlpha=.3,n.strokeStyle=m,n.lineWidth=1,n.beginPath(),n.moveTo(20,213),n.lineTo(r-20,213),n.stroke(),n.globalAlpha=1,n.font="bold 48px monospace",n.textAlign="center",d?(n.fillStyle="#44ff88",n.shadowColor="#44ff88",n.shadowBlur=20,n.fillText("★ CLEAR! ★",r/2,268)):(n.fillStyle="#ffffff",n.shadowColor=m,n.shadowBlur=8,n.fillText(`${Math.floor(s)} / ${i}`,r/2,268)),n.font="12px monospace",n.fillStyle="#445566",n.shadowBlur=0,n.fillText("QUOTA",r/2,286),o.needsUpdate=!0}addSideGuardMeshes(e){const t=g.FIELD_DEPTH/2-g.OPEN_ZONE_START,a=g.OPEN_ZONE_START+t/2;for(const n of[-1,1]){const o=n*(g.FIELD_WIDTH/2+.2+.1),r=new _(.2,2,t),f=new G({color:4500223,emissive:4500223,emissiveIntensity:.55,transparent:!0,opacity:.55,roughness:.2,metalness:.1}),m=new k(r,f);m.position.set(o,2/2,a),e.add(m),this.sideGuardMeshes.push(m)}}removeSideGuardMeshes(e){for(const s of this.sideGuardMeshes)e.remove(s),s.geometry.dispose(),s.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}triggerCollectionFlash(){this.collectionFlashRemaining=.3}update(e,s=.016){if(this.collectionGlowMat)if(this.collectionFlashRemaining>0){const i=this.collectionFlashRemaining/.3;this.collectionGlowMat.emissiveIntensity=.55+i*1.45,this.collectionFlashRemaining-=s}else this.collectionGlowMat.emissiveIntensity=.35+Math.sin(e*3.8)*.2;for(let i=0;i<this.gaugeMats.length;i++){const t=i%2===0?.55:.45,a=.3,n=i%2===0?2.1:1.5,o=i*1.1;this.gaugeMats[i].emissiveIntensity=t+Math.sin(e*n+o)*a}for(const{mat:i,baseIntensity:t,phase:a,speed:n}of this.ledStripMats)i.emissiveIntensity=t+Math.sin(e*n+a)*(t*.28)}}class Ei{constructor(e,s,i,t){l(this,"physicsWorld");l(this,"physicsSync");l(this,"collisionHandler");l(this,"pusher");l(this,"medalSpawner");l(this,"itemSpawner");l(this,"dropZone");l(this,"gimmickManager");l(this,"fieldMesh");l(this,"time",0);l(this,"antiJamTimer",0);l(this,"getMedalQuotaMultiplier",()=>1);l(this,"sideGuardActive",!1);l(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=s,this.inventory=i,this.physicsWorld=new ii,this.physicsSync=new ai,this.collisionHandler=new ni,this.pusher=new oi,this.medalSpawner=new gi,this.itemSpawner=new Ti,this.dropZone=new yi,this.gimmickManager=new xi,this.fieldMesh=new N(t)}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}rebuildFieldMesh(e){de.disposeAll(),this.fieldMesh.rebuild(e)}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const s=this.medalSpawner.getQuotaValue(e),i=this.medalSpawner.getMedalPosition(e);this.medalSpawner.markForRemoval(e);const t=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(s,t),P.emit("medal:collected",{count:s,x:i.x,y:i.y,z:i.z})}),this.collisionHandler.onItemCollected(e=>{const s=this.itemSpawner.getDefinitionId(e);if(!s)return;const i=this.itemSpawner.getItemPosition(e);this.itemSpawner.markForRemoval(e);const t=this.inventory.addItem(s),a=Ie(s);a&&(this.quotaManager.addItem(a.quotaValue),P.emit("item:collected",{itemId:s,instanceId:t.instanceId,quotaValue:a.quotaValue,x:i.x,y:i.y,z:i.z}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,s=-12/2+g.PUSHER_DEPTH,i=(s- -12/2)/2,t=-12/2+i,a=e.RigidBodyDesc.fixed().setTranslation(0,-.05,t),n=this.physicsWorld.createRigidBody(a);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(g.FIELD_WIDTH/2,.05,i).setFriction(.35).setRestitution(.05),n);const o=(g.OPEN_ZONE_START-s)/2,r=s+o,f=e.RigidBodyDesc.fixed().setTranslation(0,-.05,r),m=this.physicsWorld.createRigidBody(f);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(g.FIELD_WIDTH/2,.05,o).setFriction(.25).setRestitution(.03),m);const d=3.5,u=.2,c=g.OPEN_ZONE_START- -12/2,h=-12/2+c/2,y=g.FIELD_WIDTH/2+.2,x=e.RigidBodyDesc.fixed().setTranslation(-4.3,d/2,h),v=this.physicsWorld.createRigidBody(x);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(u/2,d/2,c/2),v);const M=e.RigidBodyDesc.fixed().setTranslation(y+u/2,d/2,h),D=this.physicsWorld.createRigidBody(M);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(u/2,d/2,c/2),D);const T=8,S=.5,b=e.RigidBodyDesc.fixed().setTranslation(0,T/2,-12/2-S/2),O=this.physicsWorld.createRigidBody(b);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(g.FIELD_WIDTH/2+S,T/2,S/2),O)}startStage(e,s){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,s,this.physicsWorld,this.sceneManager);const t=new Ht(e*1e3+s).pickRandom(g.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(t,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+s+7)}spawnInitialMedals(){const e=-6+g.PUSHER_DEPTH-g.PUSHER_RANGE,s=g.OPEN_ZONE_START-g.MEDAL_RADIUS,i=g.FIELD_WIDTH/2-g.MEDAL_RADIUS,t=s-e,a=e;for(let c=0;c<g.INITIAL_FIELD_MEDALS;c++){const h=(Math.random()*2-1)*i,y=a+Math.random()*t,x=g.MEDAL_THICKNESS/2+Math.random()*.5,v=Math.random()<.25?"large":"normal";this.medalSpawner.spawn(h,x,y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,v)}const n=-12/2+g.MEDAL_RADIUS,r=e-g.MEDAL_RADIUS-n,f=6,m=Math.ceil(g.INITIAL_PUSHER_MEDALS/f),d=i*2/(f-1),u=r/Math.max(m-1,1);for(let c=0;c<g.INITIAL_PUSHER_MEDALS;c++){const h=c%f,y=Math.floor(c/f),x=-i+h*d+(Math.random()-.5)*.15,v=n+y*u+(Math.random()-.5)*.15,M=g.PUSHER_HEIGHT+g.MEDAL_THICKNESS/2+.8+y*.25;this.medalSpawner.spawn(x,M,v,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,s){const i=g.FIELD_DEPTH/2+1,t=2,n=-(3+(-s+1)/2*6);this.medalSpawner.spawn(e,t,i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:3,z:n})}update(e){this.time+=e,this.fieldMesh.update(this.time,e);const s=4,i=Math.min(e,1/15);if(this.physicsWorld.setTimestep(i/s),this.collisionHandler.processEvents(this.physicsWorld,s),this.medalSpawner.cleanupFallen(g.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,a=>{const n=this.medalSpawner.getQuotaValue(a),o=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(n,o);const r=this.medalSpawner.getMedalPosition(a);P.emit("medal:collected",{count:n,x:r.x,y:r.y,z:r.z})}),this.itemSpawner.cleanupFallen(g.MEDAL_CLEANUP_Y,a=>{const n=this.itemSpawner.getDefinitionId(a);if(!n)return;const o=this.itemSpawner.getItemPosition(a),r=this.inventory.addItem(n),f=Ie(n);f&&(this.quotaManager.addItem(f.quotaValue),P.emit("item:collected",{itemId:n,instanceId:r.instanceId,quotaValue:f.quotaValue,x:o.x,y:o.y,z:o.z}))}),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld),this.antiJamTimer+=e,this.antiJamTimer>=2){this.antiJamTimer=0;const a=-12/2+g.PUSHER_DEPTH;this.medalSpawner.nudgeDeadZone(a,g.OPEN_ZONE_START)}const t=this.pusher.update(e);this.fieldMesh.updatePusher(t),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}endStageKeepMedals(){this.gimmickManager.clear(this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}startStageKeepMedals(e,s){this.gimmickManager.setupStage(e,s,this.physicsWorld,this.sceneManager);const t=new Ht(e*1e3+s).pickRandom(g.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(t,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+s+7)}shakeAllMedals(e=3){this.medalSpawner.shakeAll(e)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,s=2,i=.2,t=g.FIELD_DEPTH/2-g.OPEN_ZONE_START,a=g.OPEN_ZONE_START+t/2;for(const n of[-1,1]){const o=n*(g.FIELD_WIDTH/2+.2+i/2),r=e.RigidBodyDesc.fixed().setTranslation(o,s/2,a),f=this.physicsWorld.createRigidBody(r);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(i/2,s/2,t/2),f),this.sideGuardBodies.push(f)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class Mi{constructor(){l(this,"current",0);l(this,"target",0);l(this,"phase",1);l(this,"stage",1);l(this,"reached",!1)}startStage(e,s){this.phase=e,this.stage=s,this.current=0,this.reached=!1,this.target=this.calcTarget(e,s),P.emit("stage:started",{phase:e,stage:s,quotaTarget:this.target}),P.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,s){const i=(e-1)*g.STAGES_PER_PHASE+s;return Math.ceil(g.BASE_QUOTA*Math.pow(g.QUOTA_MULTIPLIER,i-1))}addMedals(e,s=1){this.current+=e*s,P.emit("quota:updated",{current:this.current,target:this.target}),!this.reached&&this.current>=this.target&&(this.reached=!0,P.emit("quota:reached",{phase:this.phase,stage:this.stage}))}addItem(e,s=1){this.current+=e*s,P.emit("quota:updated",{current:this.current,target:this.target}),!this.reached&&this.current>=this.target&&(this.reached=!0,P.emit("quota:reached",{phase:this.phase,stage:this.stage}))}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class Ci{constructor(e){l(this,"phase",1);l(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===g.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(E.PLAYING)}clearCurrentStage(){P.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(E.STAGE_CLEAR),this.stage===g.STAGES_PER_PHASE&&P.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<g.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(E.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function Ii(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class Ai{constructor(){l(this,"items",[])}addItem(e){const s={instanceId:Ii(),definitionId:e,collectedAt:Date.now()};return this.items.push(s),s}removeItem(e){const s=this.items.findIndex(i=>i.instanceId===e);return s===-1?!1:(this.items.splice(s,1),!0)}getAll(){return[...this.items]}getDefinition(e){const s=this.items.find(i=>i.instanceId===e);if(s)return Ie(s.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,s)=>{const i=Ie(s.definitionId);return e+((i==null?void 0:i.sellPrice)??0)},0)}}class _i{constructor(){l(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});P.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),P.on("item:collected",()=>{this.data.totalItemsCollected++}),P.on("stage:cleared",({phase:e,stage:s})=>{this.data.phase=e,this.data.stage=s})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class Ri{calculate(e,s){const i=s.bestPhase*3+s.bestStage,a=e.phase*3+e.stage>i;return s.updateBest(e.phase,e.stage),s.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:a,bestPhase:s.bestPhase,bestStage:s.bestStage}}}var q=(p=>(p.Gold="Gold",p.Alchemy="Alchemy",p.Throw="Throw",p.Guard="Guard",p))(q||{}),U=(p=>(p.Common="Common",p.Rare="Rare",p.Epic="Epic",p))(U||{});const is=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:q.Gold,rarity:U.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:q.Gold,rarity:U.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:q.Gold,rarity:U.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:q.Gold,rarity:U.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:q.Gold,rarity:U.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:q.Alchemy,rarity:U.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:q.Alchemy,rarity:U.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:q.Alchemy,rarity:U.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:q.Alchemy,rarity:U.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:q.Alchemy,rarity:U.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:q.Throw,rarity:U.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:q.Throw,rarity:U.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:q.Throw,rarity:U.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:q.Throw,rarity:U.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:q.Throw,rarity:U.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:q.Guard,rarity:U.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:q.Guard,rarity:U.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:q.Guard,rarity:U.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:q.Guard,rarity:U.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:q.Guard,rarity:U.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function Ot(p){return is.find(e=>e.id===p)}class Pi{constructor(){l(this,"owned",[])}addSkill(e,s){this.owned.push({definitionId:e,acquiredAt:s}),P.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let s=1;for(const i of this.owned){const t=Ot(i.definitionId);if(t)for(const a of t.effects)a.type===e&&(s*=a.value)}return s}getEffectSum(e){let s=0;for(const i of this.owned){const t=Ot(i.definitionId);if(t)for(const a of t.effects)a.type===e&&(s+=a.value)}return s}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const Nt={[U.Common]:60,[U.Rare]:30,[U.Epic]:10};class ki{pickChoices(e,s,i){const t=new bt(i),a=new Set(s.map(f=>f.definitionId)),n=is.filter(f=>!a.has(f.id));if(n.length===0)return[];const o=[],r=new Set;for(let f=0;f<e&&o.length<n.length;f++){const m=Object.keys(Nt),d=m.map(y=>Nt[y]),u=t.weightedPick(m,d),c=n.filter(y=>y.rarity===u&&!r.has(y.id));if(c.length===0){const y=n.filter(v=>!r.has(v.id));if(y.length===0)break;const x=y[Math.floor(t.next()*y.length)];o.push(x),r.add(x.id);continue}const h=c[Math.floor(t.next()*c.length)];o.push(h),r.add(h.id)}return o}}const vt=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:160,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:100,durationMs:3e4,color:"#ffaa00"},{id:"medal_shower",name:"メダルシャワー",description:"即座に20枚のメダルが降ってくる",price:120,durationMs:0,color:"#ff60a0"},{id:"earthquake",name:"地震",description:"フィールドのメダルを激しく揺らして詰まりを解消",price:80,durationMs:0,color:"#ff8844"}];function Gt(p){return vt.find(e=>e.id===p)}class Li{constructor(){l(this,"shopMoney");l(this,"medals");l(this,"sellMultiplier",1);l(this,"ownedActiveItems",new Map);this.shopMoney=g.INITIAL_SHOP_MONEY,this.medals=g.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,s){const i=s.getDefinition(e);if(!i)return 0;const t=Math.floor(i.sellPrice*this.sellMultiplier);return s.removeItem(e),this.shopMoney+=t,t}buyMedals(e){const s=e*g.MEDAL_BUY_PRICE;return this.shopMoney<s?!1:(this.shopMoney-=s,this.medals+=e,!0)}buyActiveItem(e){const s=vt.find(i=>i.id===e);return!s||this.shopMoney<s.price?!1:(this.shopMoney-=s.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const s=this.ownedActiveItems.get(e)??0;return s<=0?!1:(s===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,s-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,s])=>({id:e,count:s}))}reset(){this.shopMoney=g.INITIAL_SHOP_MONEY,this.medals=g.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let $t=!1;function Di(){if($t)return;$t=!0;const p=document.createElement("style");p.textContent=`
    @keyframes titleGlow {
      0%, 100% { text-shadow: 0 0 20px var(--t-primary), 0 0 50px var(--t-primary), 0 0 80px var(--t-primary-faint); filter: brightness(1); }
      50% { text-shadow: 0 0 40px var(--t-primary), 0 0 90px var(--t-primary), 0 0 130px var(--t-primary-faint), 0 2px 0 rgba(0,0,0,0.5); filter: brightness(1.15); }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes titleCoinFloat {
      0%,100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(5deg); }
    }
    @keyframes coinOrbit {
      from { transform: rotate(0deg) translateX(var(--orbit-r)) rotate(0deg); }
      to   { transform: rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg); }
    }
    @keyframes titleFadeIn {
      0% { opacity: 0; transform: translateY(30px) scale(0.95); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes subtitleSlide {
      0% { opacity: 0; letter-spacing: 0.5em; }
      100% { opacity: 1; letter-spacing: 0.15em; }
    }
    @keyframes btnPulse {
      0%, 100% { box-shadow: 0 0 0 0 var(--t-primary-faint); }
      50% { box-shadow: 0 0 0 8px rgba(0,0,0,0); }
    }
    @keyframes decorativeLine {
      0% { width: 0; opacity: 0; }
      100% { width: 100%; opacity: 1; }
    }
    @keyframes jacketSpin {
      from { transform: rotateY(0deg); }
      to { transform: rotateY(360deg); }
    }
  `,document.head.appendChild(p)}class Hi{constructor(e){l(this,"el");l(this,"titleEl");l(this,"onStartCallbacks",[]);l(this,"onSettingsCallbacks",[]);l(this,"hideTimer",null);Di(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay);
      pointer-events: all;
      opacity: 0;
      transition: opacity 320ms ease;
      overflow: hidden;
    `;const s=document.createElement("div");s.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;";for(let u=0;u<22;u++){const c=document.createElement("div"),h=14+Math.random()*32,y=Math.random()*100,x=Math.random()*100,v=Math.random()*10,M=10+Math.random()*10,D=.07+Math.random()*.13;c.style.cssText=`
        position: absolute;
        width: ${h}px; height: ${h}px;
        border-radius: 50%;
        border: 2px solid var(--t-primary);
        left: ${y}%;
        top: ${x}%;
        opacity: ${D};
        animation: titleCoinFloat ${M}s ease-in-out infinite;
        animation-delay: -${v}s;
      `,s.appendChild(c)}this.el.appendChild(s);const i=document.createElement("div");i.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: clamp(24px, 4vh, 48px) clamp(32px, 5vw, 64px);
      background: var(--t-panel-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--t-border-faint);
      border-radius: 20px;
      box-shadow: 0 8px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08);
      animation: titleFadeIn 0.7s ease-out forwards;
      max-width: 90vw;
      min-width: min(420px, 85vw);
    `;const t=document.createElement("div");t.style.cssText=`
      width: clamp(48px, 8vw, 72px);
      height: clamp(48px, 8vw, 72px);
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, var(--t-text-bright), var(--t-primary) 50%, var(--t-tertiary));
      border: 3px solid var(--t-primary);
      box-shadow: 0 0 16px var(--t-primary-faint), 0 0 32px var(--t-primary-faint);
      margin-bottom: clamp(12px, 2vh, 20px);
      display: flex; align-items: center; justify-content: center;
      font-size: clamp(22px, 4vw, 36px);
      animation: titleCoinFloat 4s ease-in-out infinite;
    `,t.textContent="🪙",i.appendChild(t);const a=document.createElement("div");a.style.cssText=`
      width: clamp(160px, 30vw, 280px);
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--t-primary), transparent);
      margin-bottom: clamp(10px, 2vh, 16px);
      opacity: 0;
      animation: decorativeLine 0.8s ease-out 0.3s forwards;
    `,i.appendChild(a),this.titleEl=document.createElement("h1"),this.titleEl.style.cssText=`
      font-size: clamp(2.2rem, 6vw, 4.5rem);
      color: var(--t-primary);
      letter-spacing: 0.25em;
      margin-bottom: 0.4rem;
      animation: titleGlow 3s ease-in-out infinite;
      text-align: center;
      line-height: 1;
    `,this.titleEl.textContent="YukiMedal",i.appendChild(this.titleEl);const n=document.createElement("p");n.style.cssText=`
      font-size: clamp(0.65rem, 1.5vw, 0.9rem);
      color: var(--t-text-dim);
      margin-bottom: clamp(20px, 4vh, 36px);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      opacity: 0;
      animation: subtitleSlide 0.8s ease-out 0.5s forwards;
    `,n.textContent="— Roguelike Medal Pusher —",i.appendChild(n);const o=document.createElement("div");o.style.cssText=`
      display: flex; align-items: center; gap: 12px;
      margin-bottom: clamp(20px, 4vh, 32px);
      opacity: 0; animation: decorativeLine 0.6s ease-out 0.6s forwards;
      width: 100%;
    `,o.innerHTML=`
      <div style="flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--t-border-faint));"></div>
      <div style="color:var(--t-primary);font-size:0.7rem;letter-spacing:0.3em;">⬡ ⬡ ⬡</div>
      <div style="flex:1;height:1px;background:linear-gradient(90deg,var(--t-border-faint),transparent);"></div>
    `,i.appendChild(o);const r=document.createElement("button");r.style.cssText=`
      font-size: clamp(1rem, 2.5vw, 1.3rem);
      font-family: inherit;
      padding: clamp(10px, 2vh, 14px) clamp(36px, 6vw, 56px);
      background: linear-gradient(135deg, var(--t-primary-faint) 0%, var(--t-primary-faint) 40%, rgba(255,255,255,0.12) 50%, var(--t-primary-faint) 60%, var(--t-primary-faint) 100%);
      background-size: 300% auto;
      border: 2px solid var(--t-primary);
      color: var(--t-primary);
      cursor: pointer;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      transition: all 0.22s ease;
      border-radius: 8px;
      animation: shimmer 2s linear infinite, btnPulse 2.5s ease-in-out infinite;
      width: 100%;
      position: relative;
      overflow: hidden;
    `,r.textContent="START",r.addEventListener("mouseenter",()=>{r.style.background="var(--t-primary)",r.style.color="#000",r.style.transform="scale(1.04)"}),r.addEventListener("mouseleave",()=>{r.style.background="linear-gradient(135deg, var(--t-primary-faint) 0%, var(--t-primary-faint) 40%, rgba(255,255,255,0.12) 50%, var(--t-primary-faint) 60%, var(--t-primary-faint) 100%)",r.style.backgroundSize="300% auto",r.style.color="var(--t-primary)",r.style.transform=""}),r.addEventListener("click",()=>{this.onStartCallbacks.forEach(u=>u())}),i.appendChild(r);const f=document.createElement("button");f.style.cssText=`
      font-size: clamp(0.7rem, 1.5vw, 0.85rem);
      font-family: inherit;
      padding: clamp(7px, 1.2vh, 9px) clamp(24px, 4vw, 36px);
      background: transparent;
      border: 1px solid var(--t-border-faint);
      color: var(--t-text-dim);
      cursor: pointer;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      transition: all 0.2s ease;
      border-radius: 6px;
      margin-top: 10px;
      width: 100%;
    `,f.textContent="⚙ SETTINGS",f.addEventListener("mouseenter",()=>{f.style.borderColor="var(--t-primary)",f.style.color="var(--t-primary)",f.style.background="var(--t-primary-faint)"}),f.addEventListener("mouseleave",()=>{f.style.borderColor="var(--t-border-faint)",f.style.color="var(--t-text-dim)",f.style.background="transparent"}),f.addEventListener("click",()=>{this.onSettingsCallbacks.forEach(u=>u())}),i.appendChild(f);const m=document.createElement("div");m.style.cssText=`
      width: clamp(100px, 20vw, 180px);
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--t-border-faint), transparent);
      margin-top: clamp(14px, 2.5vh, 20px);
    `,i.appendChild(m),this.el.appendChild(i);const d=document.createElement("div");d.style.cssText=`
      position: absolute;
      bottom: 12px;
      right: 16px;
      font-size: 0.6rem;
      color: var(--t-text-dim);
      opacity: 0.4;
      letter-spacing: 0.05em;
    `,d.textContent="v0.1.0",this.el.appendChild(d),e.appendChild(this.el)}applyTheme(e){}onStart(e){this.onStartCallbacks.push(e)}onSettings(e){this.onSettingsCallbacks.push(e)}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},320)}}class Bi{constructor(e){l(this,"el");l(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px; left: 16px;
      display: flex;
      align-items: center;
      padding: 8px 16px;
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--t-border-faint);
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      font-size: clamp(1.1rem, 1.8vw, 1.4rem);
      color: var(--t-primary);
      text-shadow: 0 0 8px var(--t-shadow-glow);
      transition: transform 0.25s ease, color 0.25s ease;
      white-space: nowrap;
      z-index: 10;
    `,e.appendChild(this.el)}update(e){const s=e!==this.prevMedals,i=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,s&&(i?this.el.style.color="#ff4444":this.el.style.color="var(--t-primary)",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="flex"}hide(){this.el.style.display="none"}}let zt=!1;function Oi(){if(zt)return;zt=!0;const p=document.createElement("style");p.textContent=`
    @keyframes barPulse {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.03); }
    }
    @keyframes quotaUrgent {
      0%, 100% { box-shadow: 0 4px 24px rgba(0,0,0,0.4), 0 0 8px var(--t-primary), inset 0 1px 0 rgba(255,255,255,0.08); }
      50%       { box-shadow: 0 4px 24px rgba(0,0,0,0.4), 0 0 20px var(--t-primary), inset 0 1px 0 rgba(255,255,255,0.08); }
    }
    @keyframes quotaDanger {
      0%, 100% { border-color: rgba(255,60,60,0.8); box-shadow: 0 4px 24px rgba(0,0,0,0.4), 0 0 16px rgba(255,40,40,0.6), inset 0 1px 0 rgba(255,255,255,0.08); }
      50%       { border-color: rgba(255,100,100,1.0); box-shadow: 0 4px 24px rgba(0,0,0,0.4), 0 0 32px rgba(255,40,40,0.9), inset 0 1px 0 rgba(255,255,255,0.08); }
    }
  `,document.head.appendChild(p)}class Ni{constructor(e){l(this,"container");l(this,"bar");l(this,"label");l(this,"reached",!1);l(this,"urgent",!1);l(this,"danger",!1);Oi(),this.container=document.createElement("div"),this.container.style.cssText=`
      position: absolute;
      top: 16px; left: 50%;
      transform: translateX(-50%);
      width: min(calc(100vw - 220px), 280px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 6px 16px;
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--t-border-faint);
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: center;
      z-index: 10;
    `,this.label=document.createElement("div"),this.label.style.cssText="font-size: clamp(1rem, 1.5vw, 1.2rem); color: var(--t-text-dim); margin-bottom: 4px;",this.label.textContent="QUOTA: 0 / 30";const s=document.createElement("div");s.style.cssText="position: relative; width: 100%;";const i=document.createElement("div");i.style.cssText=`
      width: 100%;
      height: 12px;
      background: var(--t-track-bg);
      border-radius: 6px;
      overflow: hidden;
      position: relative;
    `,this.bar=document.createElement("div"),this.bar.style.cssText=`
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--t-bar-start), var(--t-bar-end));
      border-radius: 6px;
      transition: width 0.3s ease;
      position: relative;
    `;const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      top: 1px;
      right: 0;
      width: 40%;
      height: 4px;
      background: rgba(255,255,255,0.28);
      border-radius: 2px;
      pointer-events: none;
    `,this.bar.appendChild(t),i.appendChild(this.bar);for(const a of[25,50,75]){const n=document.createElement("div");n.style.cssText=`
        position: absolute;
        top: -2px; bottom: -2px;
        left: ${a}%;
        width: 1px;
        background: rgba(255,255,255,0.18);
        pointer-events: none;
        z-index: 1;
      `,s.appendChild(n)}s.appendChild(i),this.container.appendChild(this.label),this.container.appendChild(s),e.appendChild(this.container)}update(e,s){const i=e/s,t=Math.min(i,1)*100;this.bar.style.width=`${t}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${s}`,e>=s&&!this.reached?(this.reached=!0,this.urgent=!1,this.bar.style.background="linear-gradient(90deg, var(--t-success), var(--t-primary))",this.bar.style.boxShadow="0 0 14px var(--t-shadow-glow)",this.bar.style.animation="barPulse 0.6s ease infinite",this.container.style.animation=""):e<s&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, var(--t-bar-start), var(--t-bar-end))",this.bar.style.boxShadow="",this.bar.style.animation=""),!this.reached&&i>=.75&&!this.urgent?(this.urgent=!0,this.container.style.animation="quotaUrgent 0.9s ease-in-out infinite"):(this.reached||i<.75)&&this.urgent&&(this.urgent=!1,this.container.style.animation="")}setDanger(e){e!==this.danger&&(this.danger=e,e?(this.urgent=!1,this.container.style.animation="quotaDanger 0.45s ease-in-out infinite",this.label.style.color="#ff6666"):(this.container.style.animation="",this.label.style.color="var(--t-text-dim)"))}show(){this.container.style.display="flex"}hide(){this.container.style.display="none"}}class Gi{constructor(e){l(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px; right: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 6px 16px;
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--t-border-faint);
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      font-size: clamp(0.85rem, 1.3vw, 1.1rem);
      color: var(--t-text-dim);
      text-align: right;
      white-space: nowrap;
      z-index: 10;
    `,e.appendChild(this.el)}update(e,s){const i=document.createElement("span");i.style.cssText="color: var(--t-primary); font-weight: bold;",i.textContent=String(e),this.el.innerHTML="";const t=document.createTextNode("Phase ");this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(document.createElement("br")),this.el.appendChild(document.createTextNode(`Stage ${s} / 3`))}show(){this.el.style.display="flex"}hide(){this.el.style.display="none"}}let Ft=!1;function $i(){if(Ft)return;Ft=!0;const p=document.createElement("style");p.textContent=`
    @keyframes floatUp {
      0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-80px) scale(0.8); }
    }
    @keyframes squashIn {
      0% { transform: translateX(-50%) scale(1.5); }
      100% { transform: translateX(-50%) scale(1); }
    }
    @keyframes feverPulse {
      0%,100% { opacity: 1; text-shadow: 0 0 18px var(--t-primary), 0 0 40px var(--t-primary); }
      50% { opacity: 0.8; text-shadow: 0 0 30px var(--t-primary), 0 0 60px var(--t-primary), 0 0 80px var(--t-secondary); }
    }
    @keyframes feverBg {
      0%,100% { border-color: var(--t-primary); box-shadow: inset 0 0 32px rgba(255,215,0,0.15), 0 0 32px rgba(255,215,0,0.3); }
      50% { border-color: var(--t-secondary); box-shadow: inset 0 0 48px rgba(0,232,255,0.18), 0 0 48px rgba(0,232,255,0.35); }
    }
    @keyframes edgeGlow {
      0%,100% { opacity: 0.7; }
      50% { opacity: 1.0; }
    }
    @keyframes comboIn {
      0% { transform: translateX(-50%) scale(1.6); opacity:0; }
      60% { transform: translateX(-50%) scale(0.95); opacity:1; }
      100% { transform: translateX(-50%) scale(1); opacity:1; }
    }
    @keyframes feverBarShrink {
      from { width: 100%; }
      to   { width: 0%; }
    }
    @keyframes flashOverlay {
      0% { opacity: 0.55; }
      100% { opacity: 0; }
    }
    @keyframes stageCountNum {
      0%   { opacity: 0; transform: translateX(-50%) scale(2.5); }
      20%  { opacity: 1; transform: translateX(-50%) scale(1); }
      70%  { opacity: 1; transform: translateX(-50%) scale(1); }
      100% { opacity: 0; transform: translateX(-50%) scale(0.7); }
    }
    @keyframes stageGoText {
      0%   { opacity: 0; transform: translateX(-50%) scale(0.5); }
      30%  { opacity: 1; transform: translateX(-50%) scale(1.2); }
      60%  { opacity: 1; transform: translateX(-50%) scale(1); }
      100% { opacity: 0; transform: translateX(-50%) scale(1.3); }
    }
  `,document.head.appendChild(p)}class zi{constructor(e){l(this,"el");l(this,"medalCounter");l(this,"quotaBar");l(this,"phaseIndicator");l(this,"throwHint");l(this,"inventoryPanel");l(this,"activeItemPanel");l(this,"countdownEl");l(this,"feverBannerEl");l(this,"comboEl");l(this,"edgeGlowEl");l(this,"onUseActiveCallbacks",[]);l(this,"hideTimer",null);l(this,"jackpotHudEl");l(this,"jackpotBarEl");l(this,"comboHideTimer",null);l(this,"aimIndicatorEl");l(this,"stageCountEl");this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new Bi(this.el),this.quotaBar=new Ni(this.el),this.phaseIndicator=new Gi(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      font-size: clamp(1rem, 1.8vw, 1.15rem);
      color: var(--t-text-dim);
      text-align: center;
    `,this.throwHint.textContent="Tap / Click to throw medal",this.el.appendChild(this.throwHint),this.inventoryPanel=document.createElement("div"),this.inventoryPanel.style.cssText=`
      position: absolute; bottom: clamp(50px, 8vh, 60px); right: 16px;
      max-width: min(220px, 32vw); max-height: min(220px, 28vh);
      overflow-y: auto; pointer-events: none;
      scrollbar-width: none;
    `,this.el.appendChild(this.inventoryPanel),this.activeItemPanel=document.createElement("div"),this.activeItemPanel.style.cssText=`
      position: absolute; bottom: clamp(50px, 8vh, 60px); left: 16px;
      max-width: min(180px, 35vw); pointer-events: all;
    `,this.el.appendChild(this.activeItemPanel),this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
      display: none;
      position: absolute;
      top: 76px;
      left: 16px;
      text-align: center;
      pointer-events: none;
      background: rgba(255,40,40,0.18);
      border: 1px solid rgba(255,80,80,0.5);
      border-radius: 8px;
      padding: clamp(2px, 0.5vh, 4px) clamp(6px, 1vw, 10px);
    `,this.countdownEl.innerHTML=`
      <div style="font-size:0.85rem;color:#ff8888;letter-spacing:0.15em;margin-bottom:1px;">MEDAL EMPTY</div>
      <div class="cd-number" style="font-size: 1.6rem; font-weight: bold; color: #ff4444;
        text-shadow: 0 0 8px #ff0000; line-height: 1.1;">10</div>
    `,this.el.appendChild(this.countdownEl),this.edgeGlowEl=document.createElement("div"),this.edgeGlowEl.style.cssText=`
      position: absolute; inset: 0;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s ease;
      box-shadow: inset 0 0 60px rgba(255,215,0,0.22), 0 0 60px rgba(255,215,0,0.3);
    `,this.el.appendChild(this.edgeGlowEl),this.feverBannerEl=document.createElement("div"),this.feverBannerEl.style.cssText=`
      position: absolute; top: clamp(84px, 12vh, 108px); left: 50%; transform: translateX(-50%);
      display: none; flex-direction: column; align-items: center;
      pointer-events: none; z-index: 10;
    `,this.feverBannerEl.innerHTML=`
      <div style="
        font-size: clamp(1.6rem, 4vw, 2.6rem); font-weight: 900; letter-spacing: 0.25em;
        color: var(--t-primary);
        animation: feverPulse 0.7s ease-in-out infinite;
        text-transform: uppercase;
      ">FEVER!</div>
      <div class="fever-mult" style="
        font-size: clamp(0.7rem, 1.4vw, 0.9rem); font-weight: 700; letter-spacing: 0.08em;
        color: var(--t-secondary); margin-top: 3px;
        text-shadow: 0 0 8px var(--t-secondary);
      ">×2.0</div>
      <div style="
        width: clamp(140px, 20vw, 200px); height: 5px; background: rgba(255,255,255,0.15);
        border-radius: 3px; margin-top: 6px; overflow: hidden;
      ">
        <div class="fever-timer-bar" style="
          height: 100%; background: var(--t-primary);
          border-radius: 3px;
        "></div>
      </div>
    `,this.el.appendChild(this.feverBannerEl),this.comboEl=document.createElement("div"),this.comboEl.style.cssText=`
      position: absolute; bottom: 16%; left: 50%;
      transform: translateX(-50%);
      display: none; pointer-events: none; z-index: 10;
      font-size: 2rem; font-weight: bold;
      color: var(--t-secondary);
      text-shadow: 0 0 12px var(--t-secondary), 0 0 28px var(--t-secondary);
      letter-spacing: 0.12em;
      background: rgba(0,0,0,0.35);
      padding: 4px 18px 4px 18px;
      border-radius: 24px;
      border: 1px solid rgba(255,255,255,0.10);
      backdrop-filter: blur(6px);
    `,this.el.appendChild(this.comboEl),this.jackpotHudEl=document.createElement("div"),this.jackpotHudEl.style.cssText=`
      position: absolute;
      top: clamp(90px, 13vh, 110px);
      right: 16px;
      width: clamp(140px, 16vw, 170px);
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--t-border-faint);
      border-radius: 10px;
      padding: clamp(4px, 0.8vh, 6px) clamp(6px, 1vw, 10px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.4);
      pointer-events: none;
      display: none;
    `,this.jackpotHudEl.innerHTML=`
      <div style="font-size:1rem;color:var(--t-primary);letter-spacing:0.15em;margin-bottom:5px;font-weight:700;">🔥 FEVER</div>
      <div style="width:100%;height:8px;background:var(--t-track-bg);border-radius:4px;overflow:hidden;">
        <div class="jp-bar" style="height:100%;width:0%;background:linear-gradient(90deg,var(--t-secondary),var(--t-primary));border-radius:4px;transition:width 0.3s ease;box-shadow:0 0 6px var(--t-primary);"></div>
      </div>
      <div class="jp-label" style="font-size:0.85rem;color:var(--t-text-dim);text-align:center;margin-top:4px;letter-spacing:0.06em;">あと 20</div>
    `,this.jackpotBarEl=this.jackpotHudEl.querySelector(".jp-bar"),this.el.appendChild(this.jackpotHudEl),this.stageCountEl=document.createElement("div"),this.stageCountEl.style.cssText=`
      position: absolute;
      top: 50%; left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 6rem; font-weight: 900;
      color: var(--t-primary);
      text-shadow: 0 0 30px var(--t-primary), 0 0 60px var(--t-primary);
      pointer-events: none;
      display: none;
      z-index: 15;
      letter-spacing: 0.1em;
    `,this.el.appendChild(this.stageCountEl),this.aimIndicatorEl=document.createElement("div"),this.aimIndicatorEl.style.cssText=`
      position: absolute;
      bottom: 0;
      width: 2px;
      height: 38%;
      background: linear-gradient(to top, var(--t-primary), transparent);
      pointer-events: none;
      opacity: 0;
      transition: left 0.04s linear, opacity 0.15s ease;
      transform: translateX(-50%);
      border-radius: 2px 2px 0 0;
      box-shadow: 0 0 10px var(--t-primary), 0 0 20px var(--t-primary);
      z-index: 5;
    `;const s=document.createElement("div");s.style.cssText=`
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 14px;
      height: 14px;
      border: 2px solid var(--t-primary);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--t-primary);
    `,this.aimIndicatorEl.appendChild(s),this.el.appendChild(this.aimIndicatorEl),e.appendChild(this.el),$i()}update(e,s,i,t,a){this.medalCounter.update(e),this.quotaBar.update(s,i),this.phaseIndicator.update(t,a),this.throwHint.style.display=e<=0?"none":""}showFloatingText(e,s="var(--t-primary)",i){let t="2rem";const a=parseInt(e.replace("+",""),10);isNaN(a)||(a>=5?t="2.6rem":a>=2?t="2.2rem":t="1.6rem");const n=i!==void 0?Math.max(15,Math.min(85,i)):50,o=document.createElement("div");o.style.cssText=`
      position: absolute;
      bottom: 30%;
      left: ${n}%;
      transform: translateX(-50%) scale(1.5);
      font-size: ${t};
      font-weight: bold;
      color: ${s};
      text-shadow: 0 0 8px ${s};
      pointer-events: none;
      animation: squashIn 0.12s ease forwards;
    `,o.textContent=e,this.el.appendChild(o),setTimeout(()=>{o.style.animation="floatUp 1.2s ease-out forwards"},120),setTimeout(()=>o.remove(),1320)}updateInventory(e){if(this.inventoryPanel.innerHTML="",e.length===0)return;const s={Common:"#9999aa",Rare:"#4499ff",Epic:"#bb44ff",Legendary:"#ffaa00"},i={Common:"◇",Rare:"◆",Epic:"★",Legendary:"♛"},t=document.createElement("div");t.style.cssText=`
      color: var(--t-text-dim); font-size: 0.6rem;
      margin-bottom: 5px; text-transform: uppercase;
      letter-spacing: 0.18em; padding-left: 2px;
    `,t.textContent="▸ ITEMS",this.inventoryPanel.appendChild(t);for(const a of e){const n=Ie(a.definitionId);if(!n)continue;const o=String(n.rarity),r=s[o]??"#9999aa",f=i[o]??"◇",m=document.createElement("div");m.style.cssText=`
        background: rgba(0,0,0,0.70);
        border: 1px solid ${r}33;
        border-left: 3px solid ${r};
        border-radius: 0 6px 6px 0;
        padding: 4px 8px 4px 6px;
        margin-bottom: 3px;
        font-size: 0.7rem;
        color: var(--t-text-bright);
        display: flex;
        align-items: center;
        gap: 5px;
        backdrop-filter: blur(4px);
      `,m.innerHTML=`
        <span style="color:${r};font-size:0.75rem;flex-shrink:0">${f}</span>
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${n.name}</span>
      `,this.inventoryPanel.appendChild(m)}}updateActiveItems(e){if(this.activeItemPanel.innerHTML="",e.length===0)return;const s=document.createElement("div");s.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",s.textContent="Active Items",this.activeItemPanel.appendChild(s);for(const i of e){const t=document.createElement("button"),a=i.remainingMs??0,n=a>0,o=n?` (${Math.ceil(a/1e3)}s)`:"";t.style.cssText=`
        display: block;
        width: 100%;
        margin-bottom: 6px;
        padding: 6px 10px;
        background: ${n?`${i.color}33`:"rgba(0,0,0,0.6)"};
        border: 2px solid ${i.color};
        color: ${i.color};
        cursor: pointer;
        font-size: 0.8rem;
        border-radius: 6px;
        text-align: left;
        pointer-events: all;
      `,t.innerHTML=`<strong>${i.name}</strong> x${i.count}${o}`,t.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(r=>r(i.id))}),this.activeItemPanel.appendChild(t)}}showFever(e,s=2){this.edgeGlowEl.style.opacity="1",this.edgeGlowEl.style.animation="edgeGlow 0.8s ease-in-out infinite",this.feverBannerEl.style.display="flex";const i=this.feverBannerEl.querySelector(".fever-timer-bar");i&&(i.style.animation="none",i.style.width="100%",i.offsetWidth,i.style.animation=`feverBarShrink ${e}ms linear forwards`);const t=this.feverBannerEl.querySelector(".fever-mult");t&&(t.textContent=`×${s.toFixed(1)} QUOTA BONUS`),this.flashScreen("rgba(255,215,0,0.22)")}hideFever(){this.edgeGlowEl.style.opacity="0",this.edgeGlowEl.style.animation="",this.feverBannerEl.style.display="none",this.flashScreen("rgba(100,100,200,0.18)")}showCombo(e){if(e<2){this.hideCombo();return}this.comboHideTimer!==null&&(clearTimeout(this.comboHideTimer),this.comboHideTimer=null),this.comboEl.style.display="block",this.comboEl.textContent=`COMBO ×${e}`;const s=e>=10?"3.0rem":e>=5?"2.4rem":"1.9rem";this.comboEl.style.fontSize=s,this.comboEl.style.animation="none",this.comboEl.offsetWidth,this.comboEl.style.animation="comboIn 0.25s ease forwards";const i=Math.min(e*20,200);this.comboEl.style.filter=`hue-rotate(${i}deg)`,this.comboHideTimer=setTimeout(()=>{this.hideCombo(),this.comboHideTimer=null},3e3)}hideCombo(){this.comboHideTimer!==null&&(clearTimeout(this.comboHideTimer),this.comboHideTimer=null),this.comboEl.style.display="none"}flashScreen(e){const s=document.createElement("div");s.style.cssText=`
      position: absolute; inset: 0; background: ${e};
      pointer-events: none; border-radius: 4px;
      animation: flashOverlay 0.5s ease-out forwards;
    `,this.el.appendChild(s),setTimeout(()=>s.remove(),500)}showStageCountdown(e,s,i){const t=["3","2","1","GO!"];let a=0;const n=()=>{if(a>=t.length){this.stageCountEl.style.display="none",i();return}const o=t[a]==="GO!";this.stageCountEl.textContent=t[a],this.stageCountEl.style.display="block",this.stageCountEl.style.color=o?"var(--t-success)":"var(--t-primary)",this.stageCountEl.style.textShadow=o?"0 0 30px var(--t-success), 0 0 60px var(--t-success)":"0 0 30px var(--t-primary), 0 0 60px var(--t-primary)",this.stageCountEl.style.animation="none",this.stageCountEl.offsetWidth,this.stageCountEl.style.animation=o?"stageGoText 0.7s ease-out forwards":"stageCountNum 0.85s ease-in-out forwards",a++,setTimeout(n,o?700:850)};this.showFloatingText(`PHASE ${e} — STAGE ${s}`,"var(--t-text-dim)"),setTimeout(n,400)}showAim(e){if(isNaN(e)||window.innerWidth<window.innerHeight){this.aimIndicatorEl.style.opacity="0";return}const s=(e+1)/2*100;this.aimIndicatorEl.style.left=`${s}%`,this.aimIndicatorEl.style.opacity="0.85"}flashAim(){window.innerWidth<window.innerHeight||(this.aimIndicatorEl.style.opacity="1",this.aimIndicatorEl.style.transform="translateX(-50%) scaleY(1.15)",setTimeout(()=>{this.aimIndicatorEl.style.transform="translateX(-50%) scaleY(1)",this.aimIndicatorEl.style.opacity="0.85"},120))}hideAim(){this.aimIndicatorEl.style.opacity="0"}onUseActive(e){this.onUseActiveCallbacks.push(e)}updateJackpot(e,s){this.jackpotHudEl.style.display="block";const i=Math.min(e/s,1)*100;this.jackpotBarEl.style.width=`${i}%`;const t=Math.max(0,Math.ceil(s-e)),a=this.jackpotHudEl.querySelector(".jp-label");a&&(t<=5?(a.textContent=`あと ${t}!! 🔥`,a.style.color="var(--t-primary)",a.style.fontWeight="700"):t<=12?(a.textContent=`あと ${t}!`,a.style.color="var(--t-secondary)",a.style.fontWeight="600"):(a.textContent=`あと ${t}`,a.style.color="var(--t-text-dim)",a.style.fontWeight="")),i>=80?(this.jackpotHudEl.style.boxShadow="0 0 16px var(--t-primary), 0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-primary)"):i>=60?(this.jackpotHudEl.style.boxShadow="0 0 8px var(--t-secondary), 0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-secondary)"):(this.jackpotHudEl.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-border-faint)")}resetJackpot(e){this.jackpotBarEl.style.width="0%";const s=this.jackpotHudEl.querySelector(".jp-label");s&&(s.textContent=`あと ${e}`,s.style.color="var(--t-text-dim)",s.style.fontWeight=""),this.jackpotHudEl.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-border-faint)"}showCountdown(e){const s=this.countdownEl.querySelector(".cd-number");s&&(s.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}let Wt=!1;function Fi(){if(Wt)return;Wt=!0;const p=document.createElement("style");p.textContent=`
    @keyframes stageResultBounceIn {
      0%   { opacity: 0; transform: scale(0.4) translateY(-20px); }
      60%  { opacity: 1; transform: scale(1.08) translateY(4px); }
      80%  { transform: scale(0.97) translateY(-2px); }
      100% { transform: scale(1) translateY(0); }
    }
    @keyframes stageStatsFadeUp {
      0%   { opacity: 0; transform: translateY(18px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes starPop {
      0%   { opacity: 0; transform: scale(0) rotate(-30deg); }
      70%  { transform: scale(1.3) rotate(5deg); }
      100% { opacity: 1; transform: scale(1) rotate(0deg); }
    }
    @keyframes coinBurst {
      0%   { opacity: 1; transform: translate(-50%, -50%) scale(0.5); }
      60%  { opacity: 1; }
      100% { opacity: 0; transform: translate(calc(-50% + var(--tx, 0px)), calc(-50% + var(--ty, 0px))) scale(1); }
    }
    @keyframes resultFadeIn {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
  `,document.head.appendChild(p)}class Wi{constructor(e){l(this,"el");l(this,"onContinueCallbacks",[]);l(this,"onSkipCallbacks",[]);l(this,"continueBtn");l(this,"shopBtn");l(this,"hideTimer",null);l(this,"countUpTimer",null);Fi(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay);
      pointer-events: all;
      gap: 0;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.continueBtn=document.createElement("button"),this.shopBtn=document.createElement("button"),e.appendChild(this.el)}show(e,s,i,t,a){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.countUpTimer!==null&&(clearInterval(this.countUpTimer),this.countUpTimer=null),this.el.innerHTML="";const n=document.createElement("div"),o=i?"PHASE CLEAR!":"STAGE CLEAR!",r=i?"var(--t-primary)":"var(--t-success)";n.style.cssText=`
      font-size: clamp(1.8rem, 5vw, 3rem);
      font-weight: 900;
      color: ${r};
      letter-spacing: 0.15em;
      text-shadow: 0 0 20px ${r}, 0 0 40px ${r};
      animation: stageResultBounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      margin-bottom: clamp(14px, 3vh, 24px);
      text-align: center;
    `,n.textContent=o,this.el.appendChild(n),this.spawnCoinBurst();const f=document.createElement("div");f.style.cssText=`
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: clamp(16px, 3vh, 24px) clamp(24px, 5vw, 40px);
      min-width: min(320px, 80vw);
      max-width: 90vw;
      text-align: center;
      animation: stageStatsFadeUp 0.4s 0.2s ease-out both;
      margin-bottom: clamp(16px, 3vh, 28px);
    `;const m=document.createElement("div");m.style.cssText="color: var(--t-text-dim); font-size: clamp(0.65rem, 1.3vw, 0.8rem); letter-spacing: 0.15em; margin-bottom: 10px;",m.textContent=`PHASE ${e}  —  STAGE ${s}`;const d=document.createElement("div");d.style.cssText="margin-bottom: 8px;";const u=document.createElement("div");u.style.cssText="color: var(--t-text-dim); font-size: clamp(0.65rem, 1.2vw, 0.75rem); letter-spacing: 0.1em; margin-bottom: 4px;",u.textContent="QUOTA";const c=document.createElement("div");c.style.cssText=`
      font-size: clamp(1.5rem, 3.5vw, 2rem); font-weight: bold;
      color: ${r};
      text-shadow: 0 0 12px ${r};
    `,c.textContent=`0 / ${a}`;const h=Math.floor(t/a*100),y=document.createElement("div");y.style.cssText="color: var(--t-text-dim); font-size: 0.85rem; margin-top: 4px;",y.textContent=`${h}%`,d.appendChild(u),d.appendChild(c),d.appendChild(y);const x=Math.floor(t);let v=0;const M=Math.max(1,Math.floor(x/30));this.countUpTimer=setInterval(()=>{v=Math.min(v+M,x),c.textContent=`${v} / ${a}`,v>=x&&this.countUpTimer!==null&&(clearInterval(this.countUpTimer),this.countUpTimer=null)},40);const D=h>=140?3:h>=110?2:1,T=document.createElement("div");T.style.cssText="display: flex; justify-content: center; gap: 8px; margin-top: 16px;";for(let R=1;R<=3;R++){const I=document.createElement("span");I.style.cssText=`
        font-size: 1.8rem;
        opacity: ${R<=D?"1":"0.2"};
        color: ${R<=D?"#ffd700":"#666"};
        animation: starPop 0.35s ${.5+R*.12}s cubic-bezier(0.34, 1.56, 0.64, 1) both;
      `,I.textContent="★",T.appendChild(I)}f.appendChild(m),f.appendChild(d),f.appendChild(T),this.el.appendChild(f);const S=document.createElement("div");S.style.cssText="display: flex; gap: 12px; animation: stageStatsFadeUp 0.4s 0.35s ease-out both; flex-wrap: wrap; justify-content: center;",i||(this.continueBtn=this.createButton("NEXT STAGE →","var(--t-tertiary)",!1,()=>{this.onContinueCallbacks.forEach(R=>R())}),S.appendChild(this.continueBtn));const b=i?"GO TO SHOP →":"SHOP (skip)",O=i?"var(--t-primary)":"#ff8800",L=i;this.shopBtn=this.createButton(b,O,L,()=>{this.onSkipCallbacks.forEach(R=>R())}),S.appendChild(this.shopBtn),this.el.appendChild(S),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}spawnCoinBurst(){const e=[{x:0,y:-130},{x:92,y:-92},{x:130,y:0},{x:92,y:92},{x:0,y:130},{x:-92,y:92},{x:-130,y:0},{x:-92,y:-92}];for(const s of e){const i=document.createElement("div");i.style.cssText=`
        position: absolute;
        left: 50%;
        top: 30%;
        font-size: 1.6rem;
        pointer-events: none;
        z-index: 20;
        animation: coinBurst 0.75s ease-out forwards;
      `,i.style.setProperty("--tx",`${s.x}px`),i.style.setProperty("--ty",`${s.y}px`),i.textContent="🪙",this.el.appendChild(i),setTimeout(()=>i.remove(),800)}}createButton(e,s,i,t){const a=document.createElement("button");return a.style.cssText=`
      font-size: clamp(0.8rem, 1.8vw, 0.95rem);
      font-family: inherit;
      padding: clamp(10px, 1.8vh, 14px) clamp(24px, 4vw, 36px);
      background: ${i?s:"transparent"};
      border: 2px solid ${s};
      color: ${i?"#000":s};
      cursor: pointer;
      letter-spacing: 0.1em;
      border-radius: 8px;
      font-weight: bold;
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 0 12px ${s}44;
    `,a.textContent=e,a.addEventListener("mouseenter",()=>{a.style.background=i?s:`${s}22`,a.style.transform="translateY(-2px)",a.style.boxShadow=`0 4px 20px ${s}66`}),a.addEventListener("mouseleave",()=>{a.style.background=i?s:"transparent",a.style.transform="translateY(0)",a.style.boxShadow=`0 0 12px ${s}44`}),a.addEventListener("click",t),a}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.countUpTimer!==null&&(clearInterval(this.countUpTimer),this.countUpTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let Ut=!1;function Ui(){if(Ut)return;Ut=!0;const p=document.createElement("style");p.textContent=`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes gameOverGlow {
      0%, 100% { text-shadow: 0 0 20px #ff3333, 0 0 40px #ff333366; }
      50% { text-shadow: 0 0 40px #ff3333, 0 0 80px #ff333366, 0 0 120px #ff333322; }
    }
    @keyframes newBestShine {
      0%, 100% { text-shadow: 0 0 10px var(--t-primary), 0 0 20px var(--t-primary); filter: brightness(1); }
      50% { text-shadow: 0 0 20px var(--t-primary), 0 0 40px var(--t-primary), 0 0 60px var(--t-primary); filter: brightness(1.3); }
    }
    @keyframes statRowIn {
      0% { opacity: 0; transform: translateX(-20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes resultCardIn {
      0% { opacity: 0; transform: scale(0.92) translateY(20px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
  `,document.head.appendChild(p)}class Vi{constructor(e){l(this,"el");l(this,"onRetryCallbacks",[]);l(this,"onTitleCallbacks",[]);l(this,"hideTimer",null);Ui(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      gap: 0;
      opacity: 0;
      transition: opacity 280ms ease;
      overflow: hidden;
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="";for(let u=0;u<8;u++){const c=document.createElement("div"),h=4+Math.random()*8;c.style.cssText=`
        position: absolute;
        width: ${h}px; height: ${h}px;
        border-radius: 50%;
        background: rgba(255,50,50,${.06+Math.random()*.1});
        left: ${Math.random()*100}%;
        top: ${Math.random()*100}%;
        pointer-events: none;
      `,this.el.appendChild(c)}const s=document.createElement("div");s.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: clamp(20px, 4vh, 36px) clamp(24px, 5vw, 56px);
      background: var(--t-panel-bg);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,60,60,0.3);
      border-radius: 20px;
      box-shadow: 0 8px 48px rgba(255,30,30,0.2), 0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
      animation: resultCardIn 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
      max-width: 90vw;
      min-width: min(360px, 82vw);
    `;const i=document.createElement("div");i.style.cssText=`
      font-size: clamp(2.5rem, 6vw, 3.5rem);
      margin-bottom: 8px;
      animation: fadeInUp 0.4s ease forwards;
    `,i.textContent="💀",s.appendChild(i);const t=document.createElement("h2");if(t.style.cssText=`
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      color: #ff4444;
      margin-bottom: clamp(4px, 1vh, 8px);
      animation: gameOverGlow 2s ease-in-out infinite;
      letter-spacing: 0.2em;
      text-align: center;
    `,t.textContent="GAME OVER",s.appendChild(t),e.isNewBest){const u=document.createElement("div");u.style.cssText=`
        font-size: clamp(0.85rem, 1.8vw, 1.0rem);
        color: var(--t-primary);
        margin-bottom: clamp(8px, 1.5vh, 14px);
        animation: newBestShine 1.5s ease-in-out infinite, fadeInUp 0.4s 0.1s ease forwards;
        opacity: 0;
        letter-spacing: 0.2em;
        background: var(--t-primary-faint);
        padding: 4px 16px;
        border-radius: 20px;
        border: 1px solid var(--t-primary);
      `,u.textContent="★ NEW BEST! ★",s.appendChild(u)}const a=document.createElement("div");a.style.cssText=`
      width: 100%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,60,60,0.4), transparent);
      margin: clamp(8px, 1.5vh, 12px) 0;
    `,s.appendChild(a);const n=document.createElement("div");n.style.cssText=`
      width: 100%;
      margin: 0 0 clamp(16px, 3vh, 24px);
      display: flex;
      flex-direction: column;
      gap: 6px;
    `;const o=[{icon:"🏆",label:"Reached",value:`Phase ${e.phase} · Stage ${e.stage}`,highlight:!1},{icon:"🪙",label:"Medals Collected",value:String(e.totalMedalsCollected),highlight:!0},{icon:"✨",label:"Items Collected",value:String(e.totalItemsCollected),highlight:!1},{icon:"📈",label:"Best Run",value:`Phase ${e.bestPhase} · Stage ${e.bestStage}`,highlight:!1}];o.forEach((u,c)=>{const h=document.createElement("div");h.style.cssText=`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: clamp(5px, 0.8vh, 8px) clamp(10px, 1.5vw, 14px);
        background: rgba(255,255,255,0.03);
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.05);
        animation: statRowIn 0.35s ${.15+c*.08}s ease-out both;
      `,h.innerHTML=`
        <span style="display:flex;align-items:center;gap:8px;color:var(--t-text-dim);font-size:clamp(0.7rem,1.3vw,0.82rem);">
          <span>${u.icon}</span>
          <span>${u.label}</span>
        </span>
        <span style="font-size:clamp(0.75rem,1.5vw,0.9rem);font-weight:bold;color:${u.highlight?"var(--t-primary)":"var(--t-text-bright)"}">
          ${u.value}
        </span>
      `,n.appendChild(h)}),s.appendChild(n);const r=document.createElement("div"),f=.15+o.length*.08;r.style.cssText=`
      display: flex; gap: 12px; width: 100%;
      animation: fadeInUp 0.4s ${f}s ease forwards;
      opacity: 0;
    `;const m=document.createElement("button");m.style.cssText=`
      flex: 1;
      font-size: clamp(0.8rem, 1.8vw, 1rem);
      font-family: inherit;
      padding: clamp(10px, 1.8vh, 13px) 0;
      background: rgba(255,68,68,0.15);
      border: 2px solid #ff4444;
      color: #ff6666;
      cursor: pointer;
      letter-spacing: 0.15em;
      border-radius: 8px;
      font-weight: bold;
      transition: all 0.2s ease;
    `,m.textContent="TRY AGAIN",m.addEventListener("mouseenter",()=>{m.style.background="#ff4444",m.style.color="#000",m.style.transform="scale(1.03)"}),m.addEventListener("mouseleave",()=>{m.style.background="rgba(255,68,68,0.15)",m.style.color="#ff6666",m.style.transform=""}),m.addEventListener("click",()=>this.onRetryCallbacks.forEach(u=>u()));const d=document.createElement("button");d.style.cssText=`
      flex: 1;
      font-size: clamp(0.8rem, 1.8vw, 1rem);
      font-family: inherit;
      padding: clamp(10px, 1.8vh, 13px) 0;
      background: transparent;
      border: 1px solid var(--t-border-faint);
      color: var(--t-text-dim);
      cursor: pointer;
      letter-spacing: 0.1em;
      border-radius: 8px;
      transition: all 0.2s ease;
    `,d.textContent="← TITLE",d.addEventListener("mouseenter",()=>{d.style.background="rgba(255,255,255,0.07)",d.style.borderColor="var(--t-primary)",d.style.color="var(--t-primary)"}),d.addEventListener("mouseleave",()=>{d.style.background="transparent",d.style.borderColor="var(--t-border-faint)",d.style.color="var(--t-text-dim)"}),d.addEventListener("click",()=>this.onTitleCallbacks.forEach(u=>u())),r.appendChild(m),r.appendChild(d),s.appendChild(r),this.el.appendChild(s),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onRetry(e){this.onRetryCallbacks.push(e)}onTitle(e){this.onTitleCallbacks.push(e)}}let Vt=!1;function Yi(){if(Vt)return;Vt=!0;const p=document.createElement("style");p.textContent=`
    @keyframes skillCardSlideUp {
      0%   { opacity: 0; transform: translateY(40px) scale(0.92); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes skillTitlePulse {
      0%,100% { text-shadow: 0 0 20px #aa44ff, 0 0 40px #aa44ff; }
      50%      { text-shadow: 0 0 30px #cc66ff, 0 0 60px #cc66ff, 0 0 80px #aa44ff; }
    }
  `,document.head.appendChild(p)}const qi={Gold:"💰",Alchemy:"⚗️",Throw:"🎯",Guard:"🛡️"},Qi={Gold:"#ffd700",Alchemy:"#00ff88",Throw:"#ff8800",Guard:"#4488ff"},ji={Common:"★",Uncommon:"★★",Rare:"★★★",Epic:"★★★★",Legendary:"★★★★★"},Zi={Common:"#aaaaaa",Uncommon:"#44cc77",Rare:"#4488ff",Epic:"#aa44ff",Legendary:"#ffaa00"};class Xi{constructor(e){l(this,"el");l(this,"onSelectCallbacks",[]);l(this,"hideTimer",null);Yi(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay);
      pointer-events: all;
      gap: 20px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="";const s=document.createElement("div");s.style.cssText="text-align: center;";const i=document.createElement("h2");i.style.cssText=`
      font-size: 2rem;
      color: #cc66ff;
      letter-spacing: 0.2em;
      font-weight: 900;
      animation: skillTitlePulse 1.5s ease-in-out infinite;
      margin-bottom: 6px;
    `,i.textContent="✦ CHOOSE A SKILL ✦";const t=document.createElement("p");t.style.cssText="color: var(--t-text-dim); font-size: 0.82rem; letter-spacing: 0.08em;",t.textContent="Select one permanent upgrade for your run",s.appendChild(i),s.appendChild(t),this.el.appendChild(s);const a=document.createElement("div");a.style.cssText="display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; max-width: 760px;",e.forEach((n,o)=>{a.appendChild(this.createCard(n,o))}),this.el.appendChild(a),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}createCard(e,s){const i=Qi[e.tag]??"#aaaacc",t=qi[e.tag]??"⭐",a=Zi[e.rarity]??"#aaaaaa",n=ji[e.rarity]??"★",o=document.createElement("div");o.style.cssText=`
      width: 220px;
      padding: 0;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(12px);
      border: 2px solid ${i}55;
      border-radius: 16px;
      cursor: pointer;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.5);
      animation: skillCardSlideUp 0.4s ${s*.1}s cubic-bezier(0.34, 1.56, 0.64, 1) both;
      transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    `;const r=document.createElement("div");r.style.cssText=`
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, ${i}22, ${i}08);
      border-bottom: 1px solid ${i}33;
      font-size: 3rem;
    `,r.textContent=t;const f=document.createElement("div");f.style.cssText="padding: 16px 18px;";const m=document.createElement("div");m.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;";const d=document.createElement("span");d.style.cssText=`
      font-size: 0.65rem;
      color: ${i};
      background: ${i}22;
      border: 1px solid ${i}44;
      border-radius: 4px;
      padding: 2px 7px;
      letter-spacing: 0.08em;
      font-weight: bold;
    `,d.textContent=e.tag.toUpperCase();const u=document.createElement("span");u.style.cssText=`font-size: 0.7rem; color: ${a};`,u.textContent=n,m.appendChild(d),m.appendChild(u);const c=document.createElement("div");c.style.cssText=`
      font-size: 1rem;
      color: var(--t-text-bright);
      font-weight: bold;
      margin-bottom: 8px;
      line-height: 1.2;
    `,c.textContent=e.name;const h=document.createElement("div");return h.style.cssText=`
      font-size: 0.75rem;
      color: var(--t-text-dim);
      line-height: 1.5;
    `,h.textContent=e.description,f.appendChild(m),f.appendChild(c),f.appendChild(h),o.appendChild(r),o.appendChild(f),o.addEventListener("mouseenter",()=>{o.style.borderColor=i,o.style.transform="translateY(-6px) scale(1.02)",o.style.boxShadow=`0 12px 40px rgba(0,0,0,0.6), 0 0 24px ${i}44`,r.style.background=`linear-gradient(135deg, ${i}44, ${i}18)`}),o.addEventListener("mouseleave",()=>{o.style.borderColor=`${i}55`,o.style.transform="translateY(0) scale(1)",o.style.boxShadow="0 4px 24px rgba(0,0,0,0.5)",r.style.background=`linear-gradient(135deg, ${i}22, ${i}08)`}),o.addEventListener("click",()=>{this.onSelectCallbacks.forEach(y=>y(e.id))}),o}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const ct=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class Ki{constructor(e){l(this,"el");l(this,"moneyEl");l(this,"inventoryEl");l(this,"onBuyMedalsCallbacks",[]);l(this,"onSellCallbacks",[]);l(this,"onContinueCallbacks",[]);l(this,"onBuyActiveCallbacks",[]);l(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      opacity: 0;
      transition: opacity 280ms ease;
    `;const s=document.createElement("div");s.style.cssText=`
      position: sticky;
      top: 0;
      z-index: 20;
      background: var(--t-bg-overlay-dark);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--t-border-faint);
      padding: clamp(10px, 1.5vh, 14px) clamp(16px, 3vw, 24px);
      display: flex;
      align-items: center;
      gap: clamp(10px, 2vw, 16px);
      flex-wrap: wrap;
    `;const i=document.createElement("h2");i.style.cssText=`
      font-size: clamp(1.3rem, 2.8vw, 1.8rem);
      color: var(--t-primary);
      letter-spacing: 0.12em;
      flex: 1;
      min-width: 80px;
    `,i.textContent="🏪 SHOP",this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText=`
      color: var(--t-primary);
      font-size: clamp(1rem, 2vw, 1.3rem);
      font-weight: bold;
      background: var(--t-panel-bg);
      border: 1px solid var(--t-border-faint);
      border-radius: 24px;
      padding: clamp(4px, 0.8vh, 6px) clamp(14px, 2vw, 20px);
      backdrop-filter: blur(8px);
      text-shadow: 0 0 8px var(--t-shadow-glow);
    `;const t=document.createElement("button");t.style.cssText=`
      padding: clamp(8px, 1.3vh, 12px) clamp(18px, 3vw, 28px);
      background: var(--t-success);
      border: none;
      color: #000;
      cursor: pointer;
      font-size: clamp(0.85rem, 1.5vw, 1rem);
      font-family: inherit;
      border-radius: 10px;
      font-weight: bold;
      letter-spacing: 0.1em;
      transition: all 0.18s;
      box-shadow: 0 0 14px rgba(0,200,100,0.35);
    `,t.textContent="NEXT PHASE →",t.addEventListener("mouseenter",()=>{t.style.transform="scale(1.05)",t.style.boxShadow="0 0 24px rgba(0,200,100,0.6)"}),t.addEventListener("mouseleave",()=>{t.style.transform="",t.style.boxShadow="0 0 14px rgba(0,200,100,0.35)"}),t.addEventListener("click",()=>this.onContinueCallbacks.forEach(n=>n())),s.appendChild(i),s.appendChild(this.moneyEl),s.appendChild(t);const a=document.createElement("div");a.style.cssText=`
      max-width: 900px;
      margin: 0 auto;
      padding: clamp(16px, 2.5vh, 22px) clamp(16px, 3vw, 24px) 32px;
    `,this.inventoryEl=document.createElement("div"),a.appendChild(this.inventoryEl),this.el.appendChild(s),this.el.appendChild(a),e.appendChild(this.el)}show(e,s,i=[]){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.moneyEl.textContent=`💰 ${e} G`,this.renderContent(e,s,i),this.el.scrollTop=0,this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}sectionHeader(e,s){const i=document.createElement("div");i.style.cssText=`
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 14px;
    `;const t=document.createElement("h3");t.style.cssText=`
      color: ${s};
      font-size: clamp(0.95rem, 2vw, 1.15rem);
      letter-spacing: 0.1em;
      white-space: nowrap;
    `,t.textContent=e;const a=document.createElement("div");return a.style.cssText=`
      flex: 1; height: 1px;
      background: linear-gradient(90deg, ${s}66, transparent);
    `,i.appendChild(t),i.appendChild(a),i}renderContent(e,s,i){this.inventoryEl.innerHTML="";const t=document.createElement("div");t.style.cssText="margin-bottom: 28px;",t.appendChild(this.sectionHeader("🪙 BUY MEDALS","var(--t-primary)"));const a=document.createElement("div");a.style.cssText=`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 14px;
    `;const n=[{count:10,price:50,coins:"🪙🪙🪙"},{count:30,price:130,coins:"🪙🪙🪙🪙🪙",badge:"POPULAR"},{count:100,price:400,coins:"🪙🪙🪙🪙🪙🪙🪙",badge:"BEST VALUE"}];for(const d of n){const u=e>=d.price,c=document.createElement("div");if(c.style.cssText=`
        position: relative;
        padding: 18px 16px 14px;
        ${ct}
        background: ${u?"rgba(0,0,0,0.55)":"rgba(0,0,0,0.25)"};
        border: 2px solid ${u?"var(--t-primary)":"#333"};
        cursor: ${u?"pointer":"default"};
        text-align: center;
        transition: transform 0.15s, box-shadow 0.15s;
        opacity: ${u?"1":"0.45"};
      `,d.badge){const v=document.createElement("div");v.style.cssText=`
          position: absolute; top: -11px; left: 50%; transform: translateX(-50%);
          background: var(--t-primary); color: #000;
          font-size: clamp(0.6rem, 1.2vw, 0.72rem); font-weight: 900;
          padding: 3px 10px; border-radius: 12px;
          letter-spacing: 0.1em; white-space: nowrap;
        `,v.textContent=d.badge,c.appendChild(v)}const h=document.createElement("div");h.style.cssText="font-size: 1.2rem; margin-bottom: 8px; letter-spacing: 0.05em;",h.textContent=d.coins;const y=document.createElement("div");y.style.cssText=`
        color: ${u?"var(--t-primary)":"#555"};
        font-size: clamp(1rem, 2vw, 1.2rem); font-weight: bold; margin-bottom: 6px;
      `,y.textContent=`${d.count} medals`;const x=document.createElement("div");x.style.cssText=`
        color: ${u?"var(--t-text-dim)":"#444"};
        font-size: clamp(0.85rem, 1.6vw, 1rem);
        font-weight: bold;
      `,x.textContent=`${d.price} G`,c.appendChild(h),c.appendChild(y),c.appendChild(x),u&&(c.addEventListener("mouseenter",()=>{c.style.transform="translateY(-4px)",c.style.boxShadow="0 10px 36px rgba(0,0,0,0.55), 0 0 20px rgba(200,131,26,0.35)"}),c.addEventListener("mouseleave",()=>{c.style.transform="",c.style.boxShadow=""}),c.addEventListener("click",()=>this.onBuyMedalsCallbacks.forEach(v=>v(d.count)))),a.appendChild(c)}t.appendChild(a),this.inventoryEl.appendChild(t);const o=document.createElement("div");o.style.cssText="margin-bottom: 28px;",o.appendChild(this.sectionHeader("✨ ACTIVE ITEMS  —  use during game","var(--t-tertiary)"));const r=document.createElement("div");r.style.cssText=`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 12px;
    `;const f=new Map(i.map(d=>[d.id,d.count]));for(const d of vt){const u=e>=d.price,c=f.get(d.id)??0,h=document.createElement("div");h.style.cssText=`
        padding: 14px 12px;
        ${ct}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${u?d.color:"#444"};
        opacity: ${u?"1":"0.5"};
        transition: transform 0.15s, box-shadow 0.15s;
        display: flex;
        flex-direction: column;
        gap: 4px;
      `;const y=document.createElement("div");y.style.cssText=`
        color: ${d.color};
        font-size: clamp(0.9rem, 1.8vw, 1.05rem); font-weight: bold;
      `,y.textContent=d.name;const x=document.createElement("div");x.style.cssText="color: var(--t-text-dim); font-size: clamp(0.75rem, 1.4vw, 0.85rem); flex: 1;",x.textContent=d.description;const v=document.createElement("div");v.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;";const M=document.createElement("div");M.style.cssText="color: #88cc88; font-size: clamp(0.75rem, 1.4vw, 0.85rem);",M.textContent=`×${c}`;const D=document.createElement("button");D.style.cssText=`
        padding: 5px 12px;
        background: ${u?`${d.color}22`:"transparent"};
        border: 1px solid ${u?d.color:"#555"};
        color: ${u?d.color:"#555"};
        cursor: ${u?"pointer":"default"};
        font-size: clamp(0.75rem, 1.4vw, 0.85rem);
        font-family: inherit;
        border-radius: 6px;
        font-weight: bold;
        transition: background 0.15s;
        letter-spacing: 0.05em;
      `,D.textContent=`${d.price} G`,u&&(D.addEventListener("mouseenter",()=>{D.style.background=`${d.color}44`}),D.addEventListener("mouseleave",()=>{D.style.background=`${d.color}22`}),h.addEventListener("mouseenter",()=>{h.style.transform="translateY(-3px)",h.style.boxShadow=`0 8px 32px rgba(0,0,0,0.5), 0 0 14px ${d.color}44`}),h.addEventListener("mouseleave",()=>{h.style.transform="",h.style.boxShadow=""}),D.addEventListener("click",()=>this.onBuyActiveCallbacks.forEach(T=>T(d.id)))),v.appendChild(M),v.appendChild(D),h.appendChild(y),h.appendChild(x),h.appendChild(v),r.appendChild(h)}o.appendChild(r),this.inventoryEl.appendChild(o);const m=document.createElement("div");if(m.appendChild(this.sectionHeader("🎁 YOUR ITEMS  —  tap to sell","var(--t-text-dim)")),s.length===0){const d=document.createElement("p");d.style.cssText="color: var(--t-text-dim); opacity: 0.45; font-size: clamp(0.9rem, 1.8vw, 1rem);",d.textContent="No items collected yet.",m.appendChild(d)}else{const d=document.createElement("div");d.style.cssText=`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 12px;
      `;for(const u of s){const c=Ie(u.definitionId);if(!c)continue;const h=document.createElement("div"),x={Common:"#aaaaaa",Uncommon:"#44cc77",Rare:"#4488ff",Epic:"#aa44ff",Legendary:"#ffaa00"}[c.rarity]??"#aaaaaa";h.style.cssText=`
          padding: 12px 14px;
          ${ct}
          background: rgba(0,0,0,0.5);
          border: 1px solid ${x}44;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `,h.innerHTML=`
          <div style="color:var(--t-text-bright);font-size:clamp(0.85rem,1.7vw,1rem);margin-bottom:4px;font-weight:bold;">${c.name}</div>
          <div style="color:${x};font-size:clamp(0.7rem,1.3vw,0.8rem);margin-bottom:8px;font-weight:600;">${c.rarity}</div>
          <div style="color:var(--t-primary);font-size:clamp(0.8rem,1.5vw,0.9rem);font-weight:bold;">Sell: ${c.sellPrice} G</div>
        `,h.addEventListener("mouseenter",()=>{h.style.borderColor="var(--t-primary)",h.style.transform="translateY(-3px)",h.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),h.addEventListener("mouseleave",()=>{h.style.borderColor=`${x}44`,h.style.transform="",h.style.boxShadow=""}),h.addEventListener("click",()=>this.onSellCallbacks.forEach(v=>v(u.instanceId))),d.appendChild(h)}m.appendChild(d)}this.inventoryEl.appendChild(m)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}const Ji={name:"cyber",displayName:"CYBER NEON",ui:{bgOverlay:"rgba(10,10,30,0.62)",bgOverlayDark:"rgba(10,5,20,0.88)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.3)",secondary:"#00ffcc",tertiary:"#00aaff",success:"#00ff88",textDim:"#aaaacc",textBright:"#ffffff",borderFaint:"rgba(255,255,255,0.13)",panelBg:"rgba(255,255,255,0.05)",trackBg:"#333355",barStart:"#4444ff",barEnd:"#00ffaa",shadowGlow:"rgba(255,215,0,0.67)"},scene:{background:1979506,fogColor:1979506,cabinetColor:2236734,brassColor:9474232,brassRoughness:.15,brassMetalness:.92,insetColor:657950,screenBase:2080,screenEmissive:4160,groundColor:2437216,primaryNeon:16766720,secondaryNeon:65484,tertiaryNeon:4482815,starColor:8952319,gridColorA:1714782,gridColorB:924218,pusherHousingColor:2631754,bloomStrength:.5,bloomThreshold:.88,bloomRadius:.4,fieldTexBase:"#2a2a4e",pusherTexBase:"#3a3a6e",wallTexBase:"#1a1a3e"},lights:{ambientColor:5793960,ambientIntensity:1.1,fillColor:4210943,fillIntensity:.5,warmPointColor:16765056,warmPointIntensity:1.2,coolPointColor:4482815,coolPointIntensity:.8}},as={name:"steampunk",displayName:"STEAMPUNK",ui:{bgOverlay:"rgba(24,14,4,0.62)",bgOverlayDark:"rgba(18,10,2,0.88)",primary:"#ff9820",primaryFaint:"rgba(255,152,32,0.35)",secondary:"#ffb830",tertiary:"#d46820",success:"#ffb020",textDim:"#c8a870",textBright:"#ffeec0",borderFaint:"rgba(255,152,32,0.30)",panelBg:"rgba(255,152,32,0.08)",trackBg:"#3a2010",barStart:"#a05010",barEnd:"#ff9820",shadowGlow:"rgba(255,152,32,0.75)"},scene:{background:4859924,fogColor:4859924,cabinetColor:3941906,brassColor:12619840,brassRoughness:.35,brassMetalness:.78,insetColor:1182724,screenBase:1575936,screenEmissive:5251072,groundColor:3940368,primaryNeon:16750624,secondaryNeon:16758832,tertiaryNeon:13920288,starColor:16760896,gridColorA:6962196,gridColorB:3809288,pusherHousingColor:3678228,bloomStrength:.55,bloomThreshold:.86,bloomRadius:.5,fieldTexBase:"#2e1e0c",pusherTexBase:"#3a2210",wallTexBase:"#261608"},lights:{ambientColor:10514480,ambientIntensity:1.3,fillColor:10510384,fillIntensity:.6,warmPointColor:16748592,warmPointIntensity:.95,coolPointColor:9455640,coolPointIntensity:.6}},ea={name:"royal",displayName:"ROYAL CASINO",ui:{bgOverlay:"rgba(8,4,24,0.65)",bgOverlayDark:"rgba(5,2,16,0.90)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.28)",secondary:"#00e8ff",tertiary:"#ff28a0",success:"#40ff90",textDim:"#b090d0",textBright:"#fff8e0",borderFaint:"rgba(255,215,0,0.22)",panelBg:"rgba(255,215,0,0.06)",trackBg:"#1a083a",barStart:"#8040ff",barEnd:"#ffd700",shadowGlow:"rgba(255,215,0,0.78)"},scene:{background:1181244,fogColor:1181244,cabinetColor:1969720,brassColor:13934608,brassRoughness:.08,brassMetalness:.98,insetColor:656416,screenBase:524320,screenEmissive:3805344,groundColor:2757712,primaryNeon:16766720,secondaryNeon:59647,tertiaryNeon:16722080,starColor:16769152,gridColorA:2624080,gridColorB:1312048,pusherHousingColor:1706032,bloomStrength:.7,bloomThreshold:.8,bloomRadius:.5,fieldTexBase:"#12082a",pusherTexBase:"#1a0c34",wallTexBase:"#0e0620"},lights:{ambientColor:7352480,ambientIntensity:1.2,fillColor:5251264,fillIntensity:.6,warmPointColor:16765056,warmPointIntensity:1.3,coolPointColor:6295807,coolPointIntensity:1.2}},ns={cyber:Ji,steampunk:as,royal:ea};let Yt=!1;function ta(){if(Yt)return;Yt=!0;const p=document.createElement("style");p.textContent=`
    .settings-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: var(--t-track-bg);
      outline: none;
      accent-color: var(--t-primary);
    }
    .settings-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--t-primary);
      cursor: pointer;
    }
    .settings-slider::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--t-primary);
      cursor: pointer;
      border: none;
    }
  `,document.head.appendChild(p)}class sa{constructor(e){l(this,"el");l(this,"onVolumeChangeCallbacks",[]);l(this,"onThemeChangeCallbacks",[]);l(this,"onCloseCallbacks",[]);l(this,"hideTimer",null);l(this,"themeBtns",new Map);ta(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      opacity: 0;
      transition: opacity 280ms ease;
      z-index: 100;
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="",this.themeBtns.clear(),this.buildContent(e),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}buildContent(e){const s=document.createElement("div");s.style.cssText=`
      background: var(--t-panel-bg);
      backdrop-filter: blur(16px);
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 40px 48px;
      min-width: 420px;
      max-width: 520px;
      width: 90%;
    `;const i=document.createElement("h2");i.style.cssText="font-size: 1.6rem; color: var(--t-primary); margin-bottom: 32px; letter-spacing: 0.2em; text-align: center;",i.textContent="SETTINGS",s.appendChild(i);const t=document.createElement("div");t.style.cssText="margin-bottom: 32px;";const a=document.createElement("div");a.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",a.textContent="VOLUME",t.appendChild(a);const n=[{label:"Master",type:"master",value:e.masterVolume},{label:"BGM",type:"bgm",value:e.bgmVolume},{label:"SFX",type:"sfx",value:e.sfxVolume}];for(const h of n){const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;";const x=document.createElement("div");x.style.cssText="font-size: 0.85rem; color: var(--t-text-bright); width: 52px; flex-shrink: 0;",x.textContent=h.label;const v=document.createElement("input");v.type="range",v.min="0",v.max="1",v.step="0.05",v.value=String(h.value),v.className="settings-slider",v.style.cssText="flex: 1;";const M=document.createElement("div");M.style.cssText="font-size: 0.8rem; color: var(--t-primary); width: 36px; text-align: right; flex-shrink: 0;",M.textContent=`${Math.round(h.value*100)}%`,v.addEventListener("input",()=>{const D=parseFloat(v.value);M.textContent=`${Math.round(D*100)}%`,this.onVolumeChangeCallbacks.forEach(T=>T(h.type,D))}),y.appendChild(x),y.appendChild(v),y.appendChild(M),t.appendChild(y)}s.appendChild(t);const o=document.createElement("hr");o.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",s.appendChild(o);const r=document.createElement("div");r.style.cssText="margin-bottom: 32px;";const f=document.createElement("div");f.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",f.textContent="THEME",r.appendChild(f);const m=document.createElement("div");m.style.cssText="display: flex; gap: 10px; flex-wrap: wrap;";const d=["royal","cyber","steampunk"];for(const h of d){const y=h===e.theme,x=document.createElement("button");x.style.cssText=`
        flex: 1;
        padding: 12px 16px;
        background: ${y?"var(--t-primary)":"transparent"};
        border: 2px solid var(--t-primary);
        color: ${y?"var(--t-bg-overlay-dark)":"var(--t-primary)"};
        cursor: pointer;
        font-size: 0.85rem;
        border-radius: 8px;
        letter-spacing: 0.1em;
        transition: all 0.2s;
        font-weight: ${y?"bold":"normal"};
      `,x.textContent=ns[h].displayName,x.addEventListener("click",()=>{this.selectTheme(h),this.onThemeChangeCallbacks.forEach(v=>v(h))}),this.themeBtns.set(h,x),m.appendChild(x)}r.appendChild(m),s.appendChild(r);const u=document.createElement("hr");u.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",s.appendChild(u);const c=document.createElement("button");c.style.cssText=`
      width: 100%;
      padding: 12px;
      background: transparent;
      border: 2px solid var(--t-border-faint);
      color: var(--t-text-dim);
      cursor: pointer;
      font-size: 0.9rem;
      border-radius: 8px;
      letter-spacing: 0.15em;
      transition: all 0.2s;
    `,c.textContent="CLOSE",c.addEventListener("mouseenter",()=>{c.style.borderColor="var(--t-primary)",c.style.color="var(--t-primary)"}),c.addEventListener("mouseleave",()=>{c.style.borderColor="var(--t-border-faint)",c.style.color="var(--t-text-dim)"}),c.addEventListener("click",()=>{this.onCloseCallbacks.forEach(h=>h())}),s.appendChild(c),this.el.appendChild(s)}selectTheme(e){this.themeBtns.forEach((s,i)=>{const t=i===e;s.style.background=t?"var(--t-primary)":"transparent",s.style.color=t?"var(--t-bg-overlay-dark)":"var(--t-primary)",s.style.fontWeight=t?"bold":"normal"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onVolumeChange(e){this.onVolumeChangeCallbacks.push(e)}onThemeChange(e){this.onThemeChangeCallbacks.push(e)}onClose(e){this.onCloseCallbacks.push(e)}}const Z=["🥇","⭐","💎","🎰"];let qt=!1;function ia(){if(qt)return;qt=!0;const p=document.createElement("style");p.textContent=`
    @keyframes chanceIn {
      0% { opacity: 0; transform: translateY(-20px) scale(0.9); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes reelFlash {
      0%,100% { background: rgba(0,0,0,0.4); }
      50% { background: rgba(255,215,0,0.15); }
    }
    @keyframes chanceResultPop {
      0% { transform: scale(0.5); opacity: 0; }
      60% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
  `,document.head.appendChild(p)}class aa{constructor(e){l(this,"el");l(this,"reelEls",[]);l(this,"reelWrapperEls",[]);l(this,"resultEl");l(this,"hideTimer",null);ia(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      opacity: 0;
      transition: opacity 280ms ease;
      z-index: 200;
    `;const s=document.createElement("div");s.style.cssText=`
      font-size: 2rem;
      font-weight: 900;
      color: var(--t-primary);
      letter-spacing: 0.3em;
      margin-bottom: 28px;
      text-shadow: 0 0 24px var(--t-primary), 0 0 48px var(--t-primary);
      animation: chanceIn 0.4s ease forwards;
    `,s.textContent="✦ CHANCE TIME! ✦",this.el.appendChild(s);const i=document.createElement("div");i.style.cssText=`
      display: flex;
      gap: 12px;
      background: rgba(0,0,0,0.7);
      border: 2px solid var(--t-primary);
      border-radius: 16px;
      padding: 16px;
      box-shadow: 0 0 40px var(--t-primary), inset 0 0 24px rgba(0,0,0,0.6);
    `;for(let a=0;a<3;a++){const n=document.createElement("div");n.style.cssText=`
        width: 88px;
        height: 88px;
        overflow: hidden;
        border-radius: 10px;
        background: rgba(0,0,0,0.4);
        border: 1px solid var(--t-border-faint);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        position: relative;
        transition: box-shadow 0.3s ease;
      `,this.reelWrapperEls.push(n);const o=document.createElement("div");o.style.cssText="text-align: center; line-height: 1; user-select: none;",o.textContent=Z[0],this.reelEls.push(o),n.appendChild(o),i.appendChild(n)}this.el.appendChild(i);const t=document.createElement("div");t.style.cssText=`
      margin-top: 14px;
      font-size: 0.75rem;
      color: var(--t-text-dim);
      letter-spacing: 0.15em;
    `,t.textContent="3 MATCH: +40 medals  |  2 MATCH: +15 medals",this.el.appendChild(t),this.resultEl=document.createElement("div"),this.resultEl.style.cssText=`
      font-size: 1.6rem;
      font-weight: bold;
      margin-top: 24px;
      min-height: 2.2rem;
      text-align: center;
      color: var(--t-primary);
      letter-spacing: 0.1em;
    `,this.el.appendChild(this.resultEl),e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.resultEl.textContent="",this.resultEl.style.animation="",this.reelWrapperEls.forEach(t=>{t.style.boxShadow="",t.style.animation=""}),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"});const s=Math.random()*100;let i;if(s<15){const t=Z[Math.floor(Math.random()*Z.length)];i={type:"triple",medals:40,symbols:[t,t,t]}}else if(s<50){const t=Z[Math.floor(Math.random()*Z.length)];let a=Z[Math.floor(Math.random()*Z.length)];for(;a===t;)a=Z[Math.floor(Math.random()*Z.length)];i={type:"double",medals:15,symbols:[t,t,a]}}else{let t,a,n;do t=Z[Math.floor(Math.random()*Z.length)],a=Z[Math.floor(Math.random()*Z.length)],n=Z[Math.floor(Math.random()*Z.length)];while(t===a||a===n||t===n);i={type:"miss",medals:0,symbols:[t,a,n]}}this._spinReels(i,e)}_spinReels(e,s){this.reelEls.forEach(t=>{t.textContent=Z[Math.floor(Math.random()*Z.length)]});const i=(t,a,n)=>new Promise(o=>{const r=this.reelEls[t],f=setInterval(()=>{r.textContent=Z[Math.floor(Math.random()*Z.length)]},75);setTimeout(()=>{clearInterval(f),r.textContent=a,this.reelWrapperEls[t].style.boxShadow="0 0 16px var(--t-primary)",this.reelWrapperEls[t].style.animation="reelFlash 0.4s ease",o()},n)});i(0,e.symbols[0],1e3).then(()=>i(1,e.symbols[1],500)).then(()=>i(2,e.symbols[2],500)).then(()=>{let t="",a="var(--t-text-dim)";e.type==="triple"?(t=`🎉 JACKPOT!  +${e.medals} MEDALS!`,a="var(--t-primary)",this.reelWrapperEls.forEach(n=>{n.style.boxShadow="0 0 28px var(--t-primary), inset 0 0 12px rgba(255,215,0,0.2)"})):e.type==="double"?(t=`✓ MATCH!  +${e.medals} MEDALS!`,a="var(--t-success)"):(t="MISS...  Try again next time!",a="var(--t-text-dim)"),this.resultEl.textContent=t,this.resultEl.style.color=a,this.resultEl.style.animation="none",this.resultEl.offsetWidth,this.resultEl.style.animation="chanceResultPop 0.4s ease forwards",setTimeout(()=>{this.hide(),s(e)},1800)})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class na{constructor(e){l(this,"titleScreen");l(this,"gameScreen");l(this,"stageResultScreen");l(this,"resultScreen");l(this,"skillSelectScreen");l(this,"shopScreen");l(this,"settingsScreen");l(this,"chanceScreen");this.titleScreen=new Hi(e),this.gameScreen=new zi(e),this.stageResultScreen=new Wi(e),this.resultScreen=new Vi(e),this.skillSelectScreen=new Xi(e),this.shopScreen=new Ki(e),this.settingsScreen=new sa(e),this.chanceScreen=new aa(e),P.on("state:changed",({to:s})=>{this.handleStateChange(s)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case E.TITLE:this.titleScreen.show();break;case E.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case E.STAGE_CLEAR:break;case E.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,s,i,t,a,n,o){this.gameScreen.update(e,s,i,t,a),n&&this.gameScreen.updateInventory(n),o&&this.gameScreen.updateActiveItems(o)}}function We(p,e){if(window.innerWidth<window.innerHeight){const t=e/window.innerHeight*2-1,a=p/window.innerWidth*2-1;return[t,a]}const s=p/window.innerWidth*2-1,i=e/window.innerHeight*2-1;return[s,i]}const oa=300,ra=380;class la{constructor(e){l(this,"throwCallbacks",[]);l(this,"aimCallbacks",[]);l(this,"enabled",!1);l(this,"holdTimer",null);l(this,"autoInterval",null);l(this,"autoActive",!1);l(this,"ignoreNextClick",!1);l(this,"lastNX",0);l(this,"lastNY",0);l(this,"activePointerId",null);l(this,"onMouseMove",e=>{if(!this.enabled)return;const[s]=We(e.clientX,e.clientY);this._fireAim(s)});l(this,"onMouseLeave",()=>{this._fireAim(NaN)});l(this,"onClick",e=>{if(!this.enabled)return;if(this.ignoreNextClick){this.ignoreNextClick=!1;return}const[s,i]=We(e.clientX,e.clientY);this._fire(s,i)});l(this,"onTouch",e=>{if(!this.enabled||(e.preventDefault(),e.touches.length>0))return;const s=e.changedTouches[0];if(!s)return;const[i,t]=We(s.clientX,s.clientY);this._fire(i,t)});l(this,"onPointerDown",e=>{!this.enabled||e.button!==0||this.activePointerId===null&&(this.activePointerId=e.pointerId,[this.lastNX,this.lastNY]=We(e.clientX,e.clientY),this.holdTimer=setTimeout(()=>{this.autoActive=!0,this.autoInterval=setInterval(()=>{if(!this.enabled){this._stopAutoThrow();return}this._fire(this.lastNX,this.lastNY)},ra)},oa))});l(this,"onPointerUp",e=>{e.pointerId===this.activePointerId&&(this.activePointerId=null,this.autoActive&&(this.ignoreNextClick=!0),this._stopAutoThrow())});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1}),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointercancel",this.onPointerUp),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}enable(){this.enabled=!0}disable(){this.enabled=!1,this.activePointerId=null,this._stopAutoThrow(),this._fireAim(NaN)}onThrow(e){return this.throwCallbacks.push(e),()=>{const s=this.throwCallbacks.indexOf(e);s!==-1&&this.throwCallbacks.splice(s,1)}}onAim(e){return this.aimCallbacks.push(e),()=>{const s=this.aimCallbacks.indexOf(e);s!==-1&&this.aimCallbacks.splice(s,1)}}_fire(e,s){this.throwCallbacks.forEach(i=>i(e,s))}_fireAim(e){this.aimCallbacks.forEach(s=>s(e))}_stopAutoThrow(){this.holdTimer!==null&&(clearTimeout(this.holdTimer),this.holdTimer=null),this.autoInterval!==null&&(clearInterval(this.autoInterval),this.autoInterval=null),this.autoActive=!1}dispose(){this._stopAutoThrow(),this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("mouseleave",this.onMouseLeave)}}const he=class he{constructor(){l(this,"ctx",null);l(this,"masterGain",null);l(this,"sfxGain",null);l(this,"bgmGain",null);l(this,"bgmPlaying",!1);l(this,"bgmNextTime",0);l(this,"bgmSchedulerTimer",null);l(this,"bgmBeatIndex",0);l(this,"bgmBPM",110)}get bgmBeat(){return 60/this.bgmBPM}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.8,this.bgmGain.connect(this.masterGain)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getSfxGain(){return this.getCtx(),this.sfxGain}getBgmGain(){return this.getCtx(),this.bgmGain}setMasterVolume(e){this.getCtx(),this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}setBgmVolume(e){this.getCtx(),this.bgmGain&&(this.bgmGain.gain.value=Math.max(0,Math.min(1,e)))}setSfxVolume(e){this.getCtx(),this.sfxGain&&(this.sfxGain.gain.value=Math.max(0,Math.min(1,e)))}playThrow(){const e=this.getCtx(),s=this.getSfxGain(),i=e.sampleRate*.12,t=e.createBuffer(1,i,e.sampleRate),a=t.getChannelData(0);for(let f=0;f<i;f++)a[f]=Math.random()*2-1;const n=e.createBufferSource();n.buffer=t;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(800,e.currentTime),o.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),o.Q.value=1.5;const r=e.createGain();r.gain.setValueAtTime(.4,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),n.connect(o),o.connect(r),r.connect(s),n.start(),n.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),s=this.getSfxGain(),i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const t=e.createGain();t.gain.setValueAtTime(.3,e.currentTime),t.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),i.connect(t),t.connect(s),i.start(),i.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),s=this.getSfxGain();[523.25,659.25,783.99,1046.5].forEach((t,a)=>{this._playNote(e,s,"sine",t,e.currentTime+a*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),s=this.getSfxGain();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([t,a,n])=>{this._playNote(e,s,"square",t,e.currentTime+a,n,.2)})}playGameOver(){const e=this.getCtx(),s=this.getSfxGain();[440,349.23,293.66,220].forEach((t,a)=>{this._playNote(e,s,"sawtooth",t,e.currentTime+a*.22,.3,.18)})}playFeverStart(){const e=this.getCtx(),s=this.getSfxGain();[523.25,659.25,783.99,1046.5,1318.5].forEach((t,a)=>{this._playNote(e,s,"square",t,e.currentTime+a*.055,.18,.28)}),this._playNote(e,s,"sawtooth",110,e.currentTime,.35,.25)}playFeverEnd(){const e=this.getCtx(),s=this.getSfxGain();[880,659.25,523.25,392].forEach((t,a)=>{this._playNote(e,s,"sine",t,e.currentTime+a*.09,.25,.18)})}playCombo(e){const s=this.getCtx(),i=this.getSfxGain(),t=440*Math.pow(1.12,Math.min(e-2,8));this._playNote(s,i,"triangle",t,s.currentTime,.12,.22),this._playNote(s,i,"triangle",t*1.5,s.currentTime+.06,.1,.15)}playSkillSelected(){const e=this.getCtx(),s=this.getSfxGain();this._playNote(e,s,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),s=this.getSfxGain(),i=Math.floor(e.sampleRate*.02),t=e.createBuffer(1,i,e.sampleRate),a=t.getChannelData(0);for(let r=0;r<a.length;r++)a[r]=(Math.random()*2-1)*(1-r/a.length);const n=e.createBufferSource();n.buffer=t;const o=e.createGain();o.gain.value=.35,n.connect(o),o.connect(s),n.start()}playJackpotFanfare(){const e=this.getCtx(),s=this.getSfxGain(),i=[261.63,329.63,392,523.25,659.25,783.99,1046.5];i.forEach((a,n)=>{this._playNote(e,s,"square",a,e.currentTime+n*.04,.18,.25)});const t=e.currentTime+i.length*.04+.05;this._playNote(e,s,"sine",1046.5,t,.7,.3),this._playNote(e,s,"sine",1318.5,t,.7,.22),this._playNote(e,s,"sine",1567.98,t,.7,.16),this._playNote(e,s,"sawtooth",110,e.currentTime,.45,.28)}startBGM(e=!1){this.bgmPlaying&&this.stopBGM(),this.bgmBPM=e?145:110,this.bgmPlaying=!0;const s=this.getCtx();this.bgmNextTime=s.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,s=this.getBgmGain(),i=.3,t=100;for(;this.bgmNextTime<e.currentTime+i;)this._scheduleBGMBeat(e,s,this.bgmNextTime),this.bgmNextTime+=this.bgmBeat,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),t)}_scheduleBGMBeat(e,s,i){const t=this.bgmBeatIndex,a=this.bgmBPM>120?he.MELODY_FEVER:he.MELODY_NORMAL,n=he.BASS_FREQS,o=Math.floor(t/2)%n.length;t%2===0&&this._scheduleNote(e,s,"sawtooth",n[o],i,this.bgmBeat*1.8,.12);let r=t%8,f=0;for(const[y,x]of a){if(r>=f&&r<f+x){y>0&&this._scheduleNote(e,s,"square",y,i,this.bgmBeat*x*.85,.1);break}f+=x}const m=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),d=m.getChannelData(0);for(let y=0;y<d.length;y++)d[y]=(Math.random()*2-1)*(1-y/d.length);const u=e.createBufferSource();u.buffer=m;const c=e.createBiquadFilter();c.type="highpass",c.frequency.value=8e3;const h=e.createGain();h.gain.value=.04,u.connect(c),c.connect(h),h.connect(s),u.start(i)}_playNote(e,s,i,t,a,n,o){const r=e.createOscillator();r.type=i,r.frequency.value=t;const f=e.createGain();f.gain.setValueAtTime(o,a),f.gain.exponentialRampToValueAtTime(.001,a+n),r.connect(f),f.connect(s),r.start(a),r.stop(a+n)}_scheduleNote(e,s,i,t,a,n,o){this._playNote(e,s,i,t,a,n,o)}};l(he,"BASS_FREQS",[110,98,82.41,110]),l(he,"MELODY_NORMAL",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]),l(he,"MELODY_FEVER",[[392,.5],[523.25,.5],[659.25,.5],[783.99,.5],[659.25,.5],[523.25,.5],[392,.5],[523.25,.5]]);let mt=he;const Qt="yukimedal_settings",De={masterVolume:.7,bgmVolume:.8,sfxVolume:1,theme:"royal"},me=class me{constructor(){l(this,"_data");this._data=this._load()}static getInstance(){return me._instance||(me._instance=new me),me._instance}get masterVolume(){return this._data.masterVolume}get bgmVolume(){return this._data.bgmVolume}get sfxVolume(){return this._data.sfxVolume}get theme(){return this._data.theme}get snapshot(){return{...this._data}}setMasterVolume(e){this._data.masterVolume=Math.max(0,Math.min(1,e)),this._save()}setBgmVolume(e){this._data.bgmVolume=Math.max(0,Math.min(1,e)),this._save()}setSfxVolume(e){this._data.sfxVolume=Math.max(0,Math.min(1,e)),this._save()}setTheme(e){this._data.theme=e,this._save()}_load(){try{const e=localStorage.getItem(Qt);if(e){const s=JSON.parse(e);return{masterVolume:typeof s.masterVolume=="number"?s.masterVolume:De.masterVolume,bgmVolume:typeof s.bgmVolume=="number"?s.bgmVolume:De.bgmVolume,sfxVolume:typeof s.sfxVolume=="number"?s.sfxVolume:De.sfxVolume,theme:["cyber","steampunk","royal"].includes(s.theme)?s.theme:De.theme}}}catch{}return{...De}}_save(){try{localStorage.setItem(Qt,JSON.stringify(this._data))}catch{}}};l(me,"_instance",null);let ut=me;const ue=class ue{constructor(){l(this,"_currentName","steampunk");l(this,"_currentTheme",as);l(this,"_callbacks",[]);l(this,"_styleEl",null)}static getInstance(){return ue._instance||(ue._instance=new ue),ue._instance}get currentName(){return this._currentName}get currentTheme(){return this._currentTheme}applyTheme(e){const s=ns[e];if(!s)return;this._styleEl||(this._styleEl=document.getElementById("theme-vars"),this._styleEl||(this._styleEl=document.createElement("style"),this._styleEl.id="theme-vars",document.head.appendChild(this._styleEl)));const i=s.ui;this._styleEl.textContent=`:root {
  --t-bg-overlay:     ${i.bgOverlay};
  --t-bg-overlay-dark: ${i.bgOverlayDark};
  --t-primary:        ${i.primary};
  --t-primary-faint:  ${i.primaryFaint};
  --t-secondary:      ${i.secondary};
  --t-tertiary:       ${i.tertiary};
  --t-success:        ${i.success};
  --t-text-dim:       ${i.textDim};
  --t-text-bright:    ${i.textBright};
  --t-border-faint:   ${i.borderFaint};
  --t-panel-bg:       ${i.panelBg};
  --t-track-bg:       ${i.trackBg};
  --t-bar-start:      ${i.barStart};
  --t-bar-end:        ${i.barEnd};
  --t-shadow-glow:    ${i.shadowGlow};
}`,this._currentName=e,this._currentTheme=s,this._callbacks.forEach(t=>t(s))}onChange(e){this._callbacks.push(e)}};l(ue,"_instance",null);let ft=ue;const ce=class ce{constructor(){l(this,"comboCount",0);l(this,"lastCollectMs",0);l(this,"feverEndMs",0);l(this,"_wasInFever",!1)}onMedalCollected(e){const s=Date.now();s-this.lastCollectMs<ce.COMBO_WINDOW_MS?this.comboCount+=e:this.comboCount=e,this.lastCollectMs=s,P.emit("combo:updated",{count:this.comboCount}),this.comboCount>=ce.COMBO_TO_FEVER&&!this.isFever&&this._triggerFever()}update(){const e=this.isFever;this._wasInFever&&!e&&(this._wasInFever=!1,this.comboCount=0,P.emit("fever:ended",void 0)),this._wasInFever=e}get isFever(){return Date.now()<this.feverEndMs}get feverRemainingMs(){return Math.max(0,this.feverEndMs-Date.now())}get comboCountValue(){return this.comboCount}reset(){this.comboCount=0,this.lastCollectMs=0,this.feverEndMs=0,this._wasInFever=!1}_triggerFever(){this.feverEndMs=Date.now()+ce.FEVER_DURATION_MS,this.comboCount=0,this._wasInFever=!0,P.emit("fever:started",void 0)}};l(ce,"COMBO_WINDOW_MS",5e3),l(ce,"COMBO_TO_FEVER",6),l(ce,"FEVER_DURATION_MS",1e4),l(ce,"FEVER_SPEED_MULT",1.6);let je=ce;const Ue=new gt(.05,4,4),ca=new ie(.06,.06,.02,8),da=new Hs(.06,0),ha=new gt(.028,4,4);class pa{constructor(e){l(this,"particles",[]);l(this,"flashRings",[]);l(this,"scene");this.scene=e}spawnFlashRing(e,s,i,t){const a=new et(.1,.38,20),n=new He({color:t,transparent:!0,opacity:.9,side:tt}),o=new k(a,n);o.position.set(e,s,i),o.rotation.x=-Math.PI/2,this.scene.add(o),this.flashRings.push({mesh:o,life:0,maxLife:.25});const r=new et(.05,.22,16),f=new He({color:t,transparent:!0,opacity:.65,side:tt}),m=new k(r,f);m.position.set(e,s+.01,i),m.rotation.x=-Math.PI/2,this.scene.add(m),this.flashRings.push({mesh:m,life:-.06,maxLife:.35})}spawnMedalCollect(e,s,i){this.spawnFlashRing(e,s,i,16766720);const t=14;for(let a=0;a<t;a++){const n=a<5,o=n?ca:Ue,r=new G({color:n?16763904:16766720,emissive:new Y(n?14522624:16766720),emissiveIntensity:n?.6:1,metalness:n?.9:.3,roughness:n?.2:.5,transparent:!0}),f=new k(o,r);f.position.set(e,s,i);const m=a/t*Math.PI*2,d=1.5+Math.random()*3.5,u=new se(Math.cos(m)*d*.55,2.5+Math.random()*3.5,Math.sin(m)*d*.55);this.scene.add(f),this.particles.push({mesh:f,velocity:u,life:0,maxLife:.7+Math.random()*.5})}}spawnItemCollect(e,s,i,t){this.spawnFlashRing(e,s,i,t),this.spawnFlashRing(e,s+.1,i,t);const a=new Y(t),n=24;for(let o=0;o<n;o++){const f=o%3===0?da:Ue,m=new G({color:t,emissive:a,emissiveIntensity:1,metalness:.1,roughness:.4,transparent:!0}),d=new k(f,m);d.position.set(e,s,i);const u=o/n*Math.PI*2+Math.random()*.4,c=2.5+Math.random()*3,h=new se(Math.cos(u)*c,3.5+Math.random()*2.5,Math.sin(u)*c);this.scene.add(d),this.particles.push({mesh:d,velocity:h,life:0,maxLife:1.2+Math.random()*.5})}}spawnThrow(e,s,i){for(let a=0;a<9;a++){const n=new G({color:16766720,emissive:new Y(16766720),emissiveIntensity:1,metalness:.5,roughness:.3,transparent:!0}),o=new k(Ue,n);o.position.set(e,s,i);const r=a/9*Math.PI*2,f=1.2+Math.random()*1.6,m=new se(Math.cos(r)*f*.4,2.5+Math.random()*2,Math.sin(r)*f*.2);this.scene.add(o),this.particles.push({mesh:o,velocity:m,life:0,maxLife:.35+Math.random()*.2})}}spawnCoinGlints(e,s,i,t=3){const a=[16774314,16769152,16766720,16777215,16771248];for(let n=0;n<t;n++){const o=a[Math.floor(Math.random()*a.length)],r=new G({color:o,emissive:new Y(o),emissiveIntensity:2.5,transparent:!0,opacity:.9}),f=new k(ha,r),m=(Math.random()-.5)*1.2,d=(Math.random()-.5)*1.2;f.position.set(e+m,s+Math.random()*.1,i+d);const u=Math.random()*Math.PI*2,c=.4+Math.random()*.6,h=new se(Math.cos(u)*c*.3,.8+Math.random()*1.2,Math.sin(u)*c*.3);this.scene.add(f),this.particles.push({mesh:f,velocity:h,life:0,maxLife:.35+Math.random()*.25})}}spawnJackpot(e,s,i){this.spawnFlashRing(e,s,i,16766720);const t=new et(.3,.8,32),a=new He({color:16777215,transparent:!0,opacity:.85,side:tt}),n=new k(t,a);n.position.set(e,s,i),n.rotation.x=-Math.PI/2,this.scene.add(n),this.flashRings.push({mesh:n,life:0,maxLife:.4});const o=30;for(let r=0;r<o;r++){const f=r/o*360,m=new Y(`hsl(${f}, 100%, 60%)`),d=r%4===0,u=new G({color:m,emissive:m,emissiveIntensity:1,metalness:d?.8:.2,roughness:.3,transparent:!0}),c=new k(Ue,u);c.position.set(e,s,i);const h=r/o*Math.PI*2+Math.random()*.3,y=3.5+Math.random()*4.5,x=new se(Math.cos(h)*y,4+Math.random()*5,Math.sin(h)*y);this.scene.add(c),this.particles.push({mesh:c,velocity:x,life:0,maxLife:1.6+Math.random()*.6})}}update(e){const i=[];for(const a of this.particles){a.life+=e;const n=a.life/a.maxLife;a.velocity.y+=-9.8*e,a.mesh.position.addScaledVector(a.velocity,e),a.mesh.rotation.x+=e*5,a.mesh.rotation.y+=e*4,a.mesh.rotation.z+=e*3;const o=Math.max(0,1-n*.65);a.mesh.scale.setScalar(o),a.mesh.material.opacity=Math.pow(1-n,1.6),n>=1&&i.push(a)}for(const a of i)this.scene.remove(a.mesh),a.mesh.material.dispose(),this.particles.splice(this.particles.indexOf(a),1);const t=[];for(const a of this.flashRings){if(a.life+=e,a.life<0)continue;const n=a.life/a.maxLife,r=1+(1-Math.pow(1-n,2.2))*3.2;a.mesh.scale.set(r,r,r);const f=a.mesh.material.opacity>.7?.9:.65;a.mesh.material.opacity=f*Math.pow(1-n,.7),n>=1&&t.push(a)}for(const a of t)this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose(),this.flashRings.splice(this.flashRings.indexOf(a),1)}clear(){for(const e of this.particles)this.scene.remove(e.mesh),e.mesh.material.dispose();this.particles=[];for(const e of this.flashRings)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.flashRings=[]}}class ma{constructor(){l(this,"counter",0);l(this,"jackpotCount",0)}onQuotaAdded(e){this.counter+=e,P.emit("jackpot:progress",{current:this.counter,target:g.JACKPOT_THRESHOLD}),this.counter>=g.JACKPOT_THRESHOLD&&(this.counter-=g.JACKPOT_THRESHOLD,this.jackpotCount++,P.emit("jackpot:triggered",{count:this.jackpotCount}))}reset(){this.counter=0,this.jackpotCount=0}get progress(){return Math.min(1,this.counter/g.JACKPOT_THRESHOLD)}get current(){return this.counter}get target(){return g.JACKPOT_THRESHOLD}}const dt=1280,ht=720;function os(){const p=document.getElementById("ui-root");if(!p)return;const e=window.innerWidth<window.innerHeight,s=e?window.innerHeight:window.innerWidth,i=e?window.innerWidth:window.innerHeight,t=s/dt,a=i/ht,n=Math.min(t,a),o=Math.round((s-dt*n)/2),r=Math.round((i-ht*n)/2);p.style.width=`${dt}px`,p.style.height=`${ht}px`,p.style.transform=`translate(${o}px, ${r}px) scale(${n})`,p.style.transformOrigin="top left",p.style.inset="unset",p.style.top="0",p.style.left="0"}os();window.addEventListener("resize",os);screen.orientation&&"lock"in screen.orientation&&screen.orientation.lock("landscape").catch(()=>{});async function ua(){const p=ut.getInstance(),e=ft.getInstance();e.applyTheme(p.theme);const s=new Ns,i=new Gs,t=new zs,a=new _i,n=new Ri;let o=0;const r=document.getElementById("app"),f=document.getElementById("ui-root"),m=new Js(r),d=new ei,u=new ti(m),c=new si(m.scene);m.setCamera(d.camera);const h=e.currentTheme;m.applySceneTheme(h.scene),u.applyTheme(h.lights),c.applyTheme(h.scene);const y=new Mi,x=new Ci(s),v=new Ai,M=new Pi,D=new ki,T=new Li,S=new Ei(m,y,v,h.scene);S.setMedalQuotaMultiplierFn(()=>M.quotaPerMedalMultiplier);const b=new na(f),O=new la(m.renderer.domElement);b.titleScreen.applyTheme(p.theme);const L=new je,R=new pa(m.scene),I=new ma,C=new mt;C.setMasterVolume(p.masterVolume),C.setBgmVolume(p.bgmVolume),C.setSfxVolume(p.sfxVolume),e.onChange(w=>{m.applySceneTheme(w.scene),u.applyTheme(w.lights),c.applyTheme(w.scene),b.titleScreen.applyTheme(w.name),S.physicsWorld.initialized&&S.rebuildFieldMesh(w.scene)}),b.titleScreen.onSettings(()=>{b.settingsScreen.show(p.snapshot)}),b.settingsScreen.onClose(()=>{b.settingsScreen.hide()}),b.settingsScreen.onVolumeChange((w,B)=>{w==="master"?(p.setMasterVolume(B),C.setMasterVolume(B)):w==="bgm"?(p.setBgmVolume(B),C.setBgmVolume(B)):(p.setSfxVolume(B),C.setSfxVolume(B))}),b.settingsScreen.onThemeChange(w=>{p.setTheme(w),e.applyTheme(w)});let z=0,F=!1,$=0,W=0,Q=0;b.titleScreen.onStart(()=>{s.is(E.TITLE)&&Be()}),b.stageResultScreen.onContinue(()=>{b.stageResultScreen.hide(),x.advanceStage(),ye()}),b.stageResultScreen.onSkip(()=>{b.stageResultScreen.hide(),x.advancePhase(),Ze()}),b.shopScreen.onBuyMedals(w=>{const B=w*g.MEDAL_BUY_PRICE;T.buyMedals(w)?b.shopScreen.show(T.money,v.getAll(),T.getOwnedActiveItems()):console.log(`Not enough shop money (need ${B} G, have ${T.money} G)`)}),b.shopScreen.onSell(w=>{const B=T.sellItem(w,v);a.addShopMoney(B),b.shopScreen.show(T.money,v.getAll(),T.getOwnedActiveItems())}),b.shopScreen.onBuyActive(w=>{T.buyActiveItem(w)&&b.shopScreen.show(T.money,v.getAll(),T.getOwnedActiveItems())}),b.shopScreen.onContinue(()=>{b.shopScreen.hide(),Oe()}),b.skillSelectScreen.onSelect(w=>{M.addSkill(w,x.currentPhase),T.setSellMultiplier(M.itemSellMultiplier),b.skillSelectScreen.hide(),s.transition(E.STAGE_START),ye()}),b.resultScreen.onRetry(()=>{b.resultScreen.hide(),s.transition(E.TITLE),b.titleScreen.show()}),b.resultScreen.onTitle(()=>{b.resultScreen.hide(),s.transition(E.TITLE),b.titleScreen.show()}),b.gameScreen.onUseActive(w=>{if(!s.is(E.PLAYING)||!T.useActiveItem(w))return;const B=Gt(w);if(!B)return;const V=Date.now()+B.durationMs;if(w==="side_guard")Q=V,S.addSideGuardWalls(),S.fieldMesh.addSideGuardMeshes(S.fieldMesh.group);else if(w==="medal_fever")W=V;else if(w==="medal_shower"){for(let j=0;j<20;j++)setTimeout(()=>{if(!s.is(E.PLAYING))return;const K=(Math.random()*2-1)*(g.FIELD_WIDTH/2-.5),oe=(Math.random()-.5)*(g.FIELD_DEPTH/2);S.medalSpawner.spawn(K,5,oe,S.physicsWorld,S.physicsSync,S.collisionHandler,m)},j*150);d.shake(.12,.3)}else w==="earthquake"&&(S.shakeAllMedals(4),d.shake(.4,.5),b.gameScreen.showFloatingText("🌋 地震！","var(--t-secondary)"))}),O.onAim(w=>{s.is(E.PLAYING)?b.gameScreen.showAim(w):b.gameScreen.hideAim()}),O.onThrow((w,B)=>{if(!s.is(E.PLAYING))return;const V=w*(g.FIELD_WIDTH/2+.5),j=M.medalThrowCount;let K=0;for(let oe=0;oe<j&&T.spendMedal();oe++){const be=(oe-Math.floor(j/2))*.6;S.throwMedal(V+be,B),K++}K>0&&(P.emit("medal:thrown",{count:K}),R.spawnThrow(V,2,g.FIELD_DEPTH/2-.5))}),P.on("quota:reached",()=>{s.is(E.PLAYING)&&(O.disable(),setTimeout(()=>{if(!s.is(E.PLAYING))return;const w=M.onClearBonusMedals;w>0&&T.addMedals(w);const B=Math.max(0,Math.floor((y.currentValue/y.targetValue-1)*100)),V=15+Math.min(30,B);T.addMoney(V),x.clearCurrentStage(),b.chanceScreen.show(j=>{j.medals>0&&(T.addMedals(j.medals),b.gameScreen.showFloatingText(`+${j.medals}`,"var(--t-primary)"));const K=x.isLastStageOfPhase;b.stageResultScreen.show(x.currentPhase,x.currentStage,K,y.currentValue,y.targetValue)})},500))}),P.on("medal:collected",({count:w,x:B,y:V,z:j})=>{if(s.is(E.PLAYING)){const K=(B/g.FIELD_WIDTH*2+1)/2*72+14;b.gameScreen.showFloatingText(`+${w}`,w>=2?"var(--t-secondary)":"var(--t-primary)",K),T.addMedals(w),L.onMedalCollected(w),I.onQuotaAdded(w),R.spawnMedalCollect(B,Math.max(V,0),j),o+=w*150+Math.floor(Math.random()*50),de.refreshJackpot(o),S.fieldMesh.triggerCollectionFlash()}}),P.on("item:collected",({x:w,y:B,z:V})=>{s.is(E.PLAYING)&&R.spawnItemCollect(w,Math.max(B,0),V,59647)}),P.on("jackpot:progress",({current:w,target:B})=>{s.is(E.PLAYING)&&b.gameScreen.updateJackpot(w,B)}),P.on("jackpot:triggered",()=>{if(!s.is(E.PLAYING))return;T.addMedals(g.JACKPOT_MEDAL_REWARD),b.gameScreen.showFloatingText(`JACKPOT! +${g.JACKPOT_MEDAL_REWARD}`,"var(--t-primary)"),C.playJackpotFanfare(),d.shake(.35,.6),R.spawnJackpot(0,2,-2),b.gameScreen.resetJackpot(g.JACKPOT_THRESHOLD)}),P.on("fever:started",()=>{S.pusher.speedMultiplier=je.FEVER_SPEED_MULT;const B=1.5*(W>Date.now()?2:1)*M.quotaPerMedalMultiplier;b.gameScreen.showFever(1e4,B),C.playFeverStart(),u.setFeverMode(!0),C.startBGM(!0),d.shake(.2,.4);for(let V=0;V<12;V++)setTimeout(()=>{if(!s.is(E.PLAYING))return;const j=(Math.random()*2-1)*(g.FIELD_WIDTH/2-.5),K=(Math.random()*2-1)*(g.FIELD_DEPTH/4);S.medalSpawner.spawn(j,4.5,K,S.physicsWorld,S.physicsSync,S.collisionHandler,m)},V*250)}),P.on("fever:ended",()=>{S.pusher.speedMultiplier=1,b.gameScreen.hideFever(),b.gameScreen.hideCombo(),C.playFeverEnd(),u.setFeverMode(!1),C.startBGM(!1)}),P.on("combo:updated",({count:w})=>{s.is(E.PLAYING)&&w>=2&&(b.gameScreen.showCombo(w),C.playCombo(w))}),P.on("medal:thrown",()=>{C.playThrow(),b.gameScreen.flashAim()}),P.on("medal:collected",()=>C.playMedalCollected()),P.on("quota:reached",()=>C.playQuotaReached()),P.on("stage:cleared",()=>C.playStageCleared()),P.on("game:over",()=>C.playGameOver()),P.on("skill:selected",()=>C.playSkillSelected()),P.on("medal:collected",()=>d.shake(.04,.08)),P.on("quota:reached",()=>d.shake(.15,.3)),P.on("stage:cleared",()=>d.shake(.28,.5)),P.on("game:over",()=>d.shake(.5,.8)),P.on("state:changed",({to:w})=>{w===E.PLAYING?C.startBGM(!1):C.stopBGM(),d.setTitleMode(w===E.TITLE)});let ee=0,ge=0;i.addUpdateFn(w=>{if(ee+=w,s.is(E.PLAYING)){const B=Date.now();Q>0&&B>Q&&(Q=0,S.removeSideGuardWalls(),S.fieldMesh.removeSideGuardMeshes(S.fieldMesh.group)),W>0&&B>W&&(W=0);const V=W>Date.now()?2:1,j=L.isFever?1.5:1,K=V*j;S.setMedalQuotaMultiplierFn(()=>M.quotaPerMedalMultiplier*K),S.update(w),ge+=w;const oe=L.isFever?.25:.55;if(ge>=oe&&S.medalSpawner.count>0){ge=0;const ae=(Math.random()-.5)*5,re=-2+(Math.random()-.5)*4,ve=L.isFever?5:2;R.spawnCoinGlints(ae,.5,re,ve)}const be=T.getOwnedActiveItems().map(ae=>{const re=Gt(ae.id),ve=ae.id==="side_guard"?Math.max(0,Q-Date.now()):ae.id==="medal_fever"?Math.max(0,W-Date.now()):0;return{...ae,name:re.name,color:re.color,remainingMs:ve}});if(b.updateGameHUD(T.currentMedals,y.currentValue,y.targetValue,x.currentPhase,x.currentStage,v.getAll(),be),S.fieldMesh.updateScreenDisplay(T.currentMedals,y.currentValue,y.targetValue,x.currentPhase,x.currentStage),!F&&T.currentMedals<=0&&!y.isReached&&(F=!0,$=10,O.disable(),b.gameScreen.quotaBar.setDanger(!0)),F&&T.currentMedals>0&&(F=!1,$=0,b.gameScreen.hideCountdown(),b.gameScreen.quotaBar.setDanger(!1),O.enable()),F&&$>0){const ae=Math.ceil($);$-=w;const re=Math.ceil($);re!==ae&&re>0&&C.playCountdownTick(),$>0?b.gameScreen.showCountdown($):(b.gameScreen.hideCountdown(),_e())}}L.update(),R.update(w),c.update(w),u.update(ee),d.update(w),m.render(d.camera)});function Be(){t.incrementRuns(),T.reset(),v.clear(),M.reset(),a.reset(),x.reset(),z=0,F=!1,$=0,W=0,Q=0,L.reset(),I.reset(),S.pusher.speedMultiplier=1,o=0,de.refreshJackpot(0),s.transition(E.STAGE_START),ye()}async function ye(){const w=x.currentPhase,B=x.currentStage;F=!1,$=0,b.gameScreen.hideCountdown(),b.gameScreen.quotaBar.setDanger(!1),L.reset(),I.reset(),S.pusher.speedMultiplier=1,b.gameScreen.hideFever(),b.gameScreen.hideCombo(),b.gameScreen.resetJackpot(g.JACKPOT_THRESHOLD),y.startStage(w,B);try{S.physicsWorld.initialized?B===1?S.endStage():S.endStageKeepMedals():(xe(!0),await S.init(),xe(!1))}catch(V){console.error("Field init failed:",V),xe(!1);return}B===1?S.startStage(w,B):S.startStageKeepMedals(w,B),x.startCurrentStage(),S.pusher.paused=!0,b.gameScreen.showStageCountdown(w,B,()=>{S.pusher.paused=!1,s.is(E.PLAYING)&&O.enable()})}function Ze(){S.endStage(),s.transition(E.SHOP),b.shopScreen.show(T.money,v.getAll(),T.getOwnedActiveItems())}function Oe(){s.transition(E.SKILL_SELECT);const w=D.pickChoices(g.SKILL_CHOICES,M.getOwnedSkills(),Date.now());b.skillSelectScreen.show(w)}function _e(){if(z>0){z--,$=0,b.gameScreen.hideCountdown(),O.enable(),F=!1;return}S.endStage();const w=n.calculate(a.snapshot,t);t.updateBest(w.phase,w.stage),s.transition(E.GAME_OVER),s.transition(E.RESULT),b.resultScreen.show(w)}const pe=document.createElement("div");pe.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: var(--t-bg-overlay-dark); color: var(--t-primary);
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,pe.textContent="LOADING...",f.appendChild(pe);function xe(w){pe.style.display=w?"flex":"none"}P.on("skill:selected",()=>{z=Math.max(z,M.gameOverShields)}),i.start(),d.setTitleMode(!0),s.transition(E.TITLE),b.titleScreen.show(),console.log("YukiMedal initialized")}ua().catch(console.error);
