var ts=Object.defineProperty;var ss=(c,e,s)=>e in c?ts(c,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[e]=s;var r=(c,e,s)=>ss(c,typeof e!="symbol"?e+"":e,s);import{M as k,O as is,B as We,F as bt,S as Me,U as qe,V as ne,W as Ve,H as Ye,N as as,C as ns,a as Y,b as se,A as os,c as Oe,R as rs,d as ls,e as cs,L as ds,f as hs,g as ps,h as Ut,i as ms,j as us,k as Wt,l as A,m as N,n as fs,P as Ee,o as gs,p as ys,q as xs,r as bs,s as vs,t as Vt,u as ws,D as Ze,v as vt,w as ze,x as Xe,y as Ke,G as wt,z as Ts,E as ie,I as Ss,J as ye,T as Ie,K as Es,Q as Ms,X as Yt,Y as Cs,Z as Tt,_ as Is,$ as _s,a0 as Le,a1 as ht,a2 as As,a3 as Je,a4 as et}from"./three-CzJWjZO5.js";import{O as $e}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();var M=(c=>(c.INIT="INIT",c.TITLE="TITLE",c.STAGE_START="STAGE_START",c.PLAYING="PLAYING",c.STAGE_CLEAR="STAGE_CLEAR",c.SKIP_PROMPT="SKIP_PROMPT",c.GAME_OVER="GAME_OVER",c.SHOP="SHOP",c.SKILL_SELECT="SKILL_SELECT",c.RESULT="RESULT",c))(M||{});class Rs{constructor(){r(this,"listeners",new Map)}on(e,s){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(s),()=>i.delete(s)}once(e,s){const i=this.on(e,t=>{s(t),i()})}emit(e,s){const i=this.listeners.get(e);if(i)for(const t of i)t(s)}off(e,s){var i;(i=this.listeners.get(e))==null||i.delete(s)}clear(){this.listeners.clear()}}const L=new Rs,Ps=[{from:M.INIT,to:M.TITLE},{from:M.TITLE,to:M.STAGE_START},{from:M.STAGE_START,to:M.PLAYING},{from:M.PLAYING,to:M.STAGE_CLEAR},{from:M.PLAYING,to:M.GAME_OVER},{from:M.STAGE_CLEAR,to:M.STAGE_START},{from:M.STAGE_CLEAR,to:M.SKIP_PROMPT},{from:M.STAGE_CLEAR,to:M.SHOP},{from:M.SKIP_PROMPT,to:M.SHOP},{from:M.SKIP_PROMPT,to:M.STAGE_START},{from:M.SHOP,to:M.SKILL_SELECT},{from:M.SKILL_SELECT,to:M.STAGE_START},{from:M.GAME_OVER,to:M.RESULT},{from:M.RESULT,to:M.TITLE}];class ks{constructor(){r(this,"current",M.INIT)}get state(){return this.current}canTransition(e){return Ps.some(s=>(Array.isArray(s.from)?s.from:[s.from]).includes(this.current)&&s.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const s=this.current;this.current=e,L.emit("state:changed",{from:s,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class Ls{constructor(){r(this,"updateFns",[]);r(this,"rafId",null);r(this,"lastTime",0);r(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const s=this.updateFns.indexOf(e);s!==-1&&this.updateFns.splice(s,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=s=>{this.rafId=requestAnimationFrame(e);const i=(s-this.lastTime)/1e3;this.lastTime=s;const t=Math.min(i,this.maxDelta);for(const a of this.updateFns)a(t)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const St="yukimedal_save",Ds="yukimedal_best",tt={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class Hs{constructor(){r(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(St);return e?{...tt,...JSON.parse(e)}:{...tt}}catch{return{...tt}}}save(){try{localStorage.setItem(St,JSON.stringify(this.data))}catch{}}updateBest(e,s){const i=e*3+s,t=this.data.bestPhase*3+this.data.bestStage;i>t&&(this.data.bestPhase=e,this.data.bestStage=s,localStorage.setItem(Ds,JSON.stringify({phase:e,stage:s}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const qt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Re{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Os=new is(-1,1,1,-1,0,1);class Bs extends We{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}}const Gs=new Bs;class pt{constructor(e){this._mesh=new k(Gs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Os)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ns extends Re{constructor(e,s){super(),this.textureID=s!==void 0?s:"tDiffuse",e instanceof Me?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qe.clone(e.uniforms),this.material=new Me({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new pt(this.material)}render(e,s,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Et extends Re{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,i){const t=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,o;this.inverse?(n=0,o=1):(n=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(t.REPLACE,t.REPLACE,t.REPLACE),a.buffers.stencil.setFunc(t.ALWAYS,n,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(t.EQUAL,1,4294967295),a.buffers.stencil.setOp(t.KEEP,t.KEEP,t.KEEP),a.buffers.stencil.setLocked(!0)}}class zs extends Re{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $s{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const i=e.getSize(new ne);this._width=i.width,this._height=i.height,s=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ye}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ns(qt),this.copyPass.material.blending=as,this.clock=new ns}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const s=this.renderer.getRenderTarget();let i=!1;for(let t=0,a=this.passes.length;t<a;t++){const n=this.passes[t];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Et!==void 0&&(n instanceof Et?i=!0:n instanceof zs&&(i=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const i=this._width*this._pixelRatio,t=this._height*this._pixelRatio;this.renderTarget1.setSize(i,t),this.renderTarget2.setSize(i,t);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,t)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Fs extends Re{constructor(e,s,i=null,t=null,a=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=i,this.clearColor=t,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Y}render(e,s,i){const t=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=t}}const Us={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Y(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class _e extends Re{constructor(e,s,i,t){super(),this.strength=s!==void 0?s:1,this.radius=i,this.threshold=t,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Y(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(a,n,{type:Ye}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Ve(a,n,{type:Ye});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new Ve(a,n,{type:Ye});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),n=Math.round(n/2)}const o=Us;this.highPassUniforms=qe.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=t,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=s,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new se(1,1,1),new se(1,1,1),new se(1,1,1),new se(1,1,1),new se(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const p=qt;this.copyUniforms=qe.clone(p.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,blending:os,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Y,this.oldClearAlpha=1,this.basic=new Oe,this.fsQuad=new pt(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,s){let i=Math.round(e/2),t=Math.round(s/2);this.renderTargetBright.setSize(i,t);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,t),this.renderTargetsVertical[a].setSize(i,t),this.separableBlurMaterials[a].uniforms.invSize.value=new ne(1/i,1/t),i=Math.round(i/2),t=Math.round(t/2)}render(e,s,i,t,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=_e.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_e.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){const s=[];for(let i=0;i<e;i++)s.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Me({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:s}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Me({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}_e.BlurDirectionX=new ne(1,0);_e.BlurDirectionY=new ne(0,1);const Ws={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Vs extends Re{constructor(){super();const e=Ws;this.uniforms=qe.clone(e.uniforms),this.material=new rs({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new pt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,s,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ls.getTransfer(this._outputColorSpace)===cs&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ds?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ut?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ms?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===us&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ys extends Wt{constructor(){super();const e=new A;e.deleteAttribute("uv");const s=new N({side:fs}),i=new N,t=new Ee(16777215,900,28,2);t.position.set(.418,16.199,.3),this.add(t);const a=new k(e,s);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const n=new k(e,i);n.position.set(-10.906,2.009,1.846),n.rotation.set(0,-.195,0),n.scale.set(2.328,7.905,4.651),this.add(n);const o=new k(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new k(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const d=new k(e,i);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);const p=new k(e,i);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);const u=new k(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new k(e,Se(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const h=new k(e,Se(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);const m=new k(e,Se(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const y=new k(e,Se(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const x=new k(e,Se(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const v=new k(e,Se(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(s=>{s.isMesh&&(e.add(s.geometry),e.add(s.material))});for(const s of e)s.dispose()}}function Se(c){const e=new Oe;return e.color.setScalar(c),e}class qs{constructor(e){r(this,"scene");r(this,"renderer");r(this,"composer");r(this,"renderPass");r(this,"bloomPass");r(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});this.scene=new Wt,this.scene.background=new Y(1710638),this.scene.fog=new gs(1710638,20,60),this.renderer=new ys({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xs,this.renderer.toneMapping=Ut,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=bs,e.appendChild(this.renderer.domElement);const s=new vs(this.renderer);s.compileEquirectangularShader();const i=s.fromScene(new Ys,.04).texture;this.scene.environment=i,s.dispose();const t=window.innerWidth,a=window.innerHeight,n=new Vt(60,t/a,.1,200);this.renderPass=new Fs(this.scene,n),this.bloomPass=new _e(new ne(t,a),.88,.42,.72);const o=new Vs;this.composer=new $s(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(o),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}applySceneTheme(e){this.scene.background.set(e.background),this.scene.fog&&this.scene.fog.color.set(e.fogColor),this.bloomPass.strength=e.bloomStrength,this.bloomPass.threshold=e.bloomThreshold,this.bloomPass.radius=e.bloomRadius}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const g={INITIAL_MEDALS:120,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:40,QUOTA_MULTIPLIER:1.2,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:7.2,PUSHER_HEIGHT:1.2,PUSHER_RANGE:3.5,PUSHER_PERIOD_MS:2e3,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_RADIUS_TRIPLE:.55,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:4,INITIAL_PUSHER_MEDALS:3,MEDAL_PROB_NORMAL:58,MEDAL_PROB_DOUBLE:78,MEDAL_PROB_TRIPLE:88,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,JACKPOT_THRESHOLD:20,JACKPOT_MEDAL_REWARD:20,OPEN_ZONE_START:4,MEDAL_CLEANUP_Y:-8};class Qs{constructor(){r(this,"camera");r(this,"target",new se(0,0,-1.5));r(this,"basePosition",new se(0,6,15));r(this,"shakeOffset",new se);r(this,"shakeIntensity",0);r(this,"shakeDecay",0);r(this,"titleMode",!1);r(this,"titleAngle",0);r(this,"idleTime",0);r(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.updateCameraForAspect()});this.camera=new Vt(g.CAMERA_FOV,window.innerWidth/window.innerHeight,g.CAMERA_NEAR,g.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}updateCameraForAspect(){const e=window.innerWidth/window.innerHeight;e<.9?(this.basePosition.set(0,12,11),this.target.set(0,0,-1)):e<1.3?(this.basePosition.set(0,8,13),this.target.set(0,0,-1.5)):(this.basePosition.set(0,6,15),this.target.set(0,0,-1.5)),this.titleMode||(this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target))}setFrontView(){this.updateCameraForAspect()}setTitleMode(e){this.titleMode=e,e||this.setFrontView()}shake(e,s){this.shakeIntensity=e,this.shakeDecay=s>0?-Math.log(.01)/s:0}update(e){if(this.titleMode){this.titleAngle+=e*.18;const t=Math.sin(this.titleAngle)*3,a=6.5+Math.sin(this.titleAngle*.55)*1,n=14.5+Math.cos(this.titleAngle*.7)*1.5;this.camera.position.set(t,a,n),this.camera.lookAt(t*.2,1.5,-2);return}this.idleTime+=e;const s=Math.sin(this.idleTime*.22)*.055,i=Math.sin(this.idleTime*.31)*.038;this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity+s,(Math.random()*2-1)*this.shakeIntensity+i,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition),this.camera.position.x+=s,this.camera.position.y+=i),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class js{constructor(e){r(this,"ambient");r(this,"dirLight");r(this,"fillLight");r(this,"warmPoint");r(this,"coolPoint");r(this,"sideLeft");r(this,"sideRight");r(this,"fieldSpot");r(this,"backSpot");r(this,"graze");r(this,"scanLight");r(this,"feverActive",!1);this.ambient=new ws(4210784,.55),this.dirLight=new Ze(16775408,1.4),this.dirLight.position.set(6,14,8),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=55,this.dirLight.shadow.camera.left=-14,this.dirLight.shadow.camera.right=14,this.dirLight.shadow.camera.top=14,this.dirLight.shadow.camera.bottom=-14,this.dirLight.shadow.bias=-4e-4,this.fillLight=new Ze(5267711,.28),this.fillLight.position.set(-6,4,6),this.warmPoint=new Ee(16760928,1,18),this.warmPoint.position.set(0,7,5),this.coolPoint=new Ee(3364351,.65,22),this.coolPoint.position.set(0,5,-9),this.sideLeft=new Ee(16771280,.55,24),this.sideLeft.position.set(-10,5,2),this.sideRight=new Ee(16771280,.55,24),this.sideRight.position.set(10,5,2),this.fieldSpot=new vt(16774376,1.6,32,Math.PI/4.5,.35,1.2),this.fieldSpot.position.set(0,11,2),this.fieldSpot.target.position.set(0,0,-.5),this.fieldSpot.castShadow=!1,this.backSpot=new vt(8952319,.8,22,Math.PI/6,.45,1.6),this.backSpot.position.set(0,10,-11),this.backSpot.target.position.set(0,1,0),this.backSpot.castShadow=!1,this.graze=new Ze(16767136,.55),this.graze.position.set(14,2,4),this.scanLight=new Ee(16775912,1.3,12),this.scanLight.position.set(0,8,-1),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint,this.sideLeft,this.sideRight,this.fieldSpot,this.fieldSpot.target,this.backSpot,this.backSpot.target,this.graze,this.scanLight)}update(e){this.scanLight.position.x=Math.sin(e*.57)*4.8,this.scanLight.position.z=Math.cos(e*.38)*1.5-3,this.scanLight.intensity=(this.feverActive?2.2:1.3)+Math.sin(e*1.1)*(this.feverActive?.35:.18)}applyTheme(e){this.ambient.color.set(e.ambientColor),this.ambient.intensity=e.ambientIntensity,this.fillLight.color.set(e.fillColor),this.fillLight.intensity=e.fillIntensity,this.warmPoint.color.set(e.warmPointColor),this.warmPoint.intensity=e.warmPointIntensity,this.coolPoint.color.set(e.coolPointColor),this.coolPoint.intensity=e.coolPointIntensity}setFeverMode(e){this.feverActive=e,this.fieldSpot.intensity=e?2.2:1.6,this.fieldSpot.color.set(e?16772710:16774376),this.scanLight.color.set(e?16763972:16775912)}}class Zs{constructor(e){r(this,"stars");r(this,"starMat");r(this,"brightStars");r(this,"brightStarMat");r(this,"grid");r(this,"scene");r(this,"dustMotes");r(this,"dustPos");r(this,"_t",0);this.scene=e;const s=2800,i=new Float32Array(s*3),t=65;for(let m=0;m<s;m++){const y=Math.random()*Math.PI*2,x=Math.acos(2*Math.random()-1),v=(.3+Math.random()*.7)*t;i[m*3]=v*Math.sin(x)*Math.cos(y),i[m*3+1]=v*Math.sin(x)*Math.sin(y),i[m*3+2]=v*Math.cos(x)}const a=new We;a.setAttribute("position",new ze(i,3)),this.starMat=new Xe({size:.13,color:8952319,transparent:!0,opacity:.88,sizeAttenuation:!0}),this.stars=new Ke(a,this.starMat),e.add(this.stars);const n=200,o=new Float32Array(n*3),l=new Float32Array(n*3),d=[new Y(16765088),new Y(10070783),new Y(16769152),new Y(16756991),new Y(8454143)];for(let m=0;m<n;m++){const y=Math.random()*Math.PI*2,x=Math.acos(2*Math.random()-1),v=(.5+Math.random()*.45)*t;o[m*3]=v*Math.sin(x)*Math.cos(y),o[m*3+1]=v*Math.sin(x)*Math.sin(y),o[m*3+2]=v*Math.cos(x);const E=d[Math.floor(Math.random()*d.length)];l[m*3]=E.r,l[m*3+1]=E.g,l[m*3+2]=E.b}const p=new We;p.setAttribute("position",new ze(o,3)),p.setAttribute("color",new ze(l,3)),this.brightStarMat=new Xe({size:.4,vertexColors:!0,transparent:!0,opacity:.95,sizeAttenuation:!0}),this.brightStars=new Ke(p,this.brightStarMat),e.add(this.brightStars),this.grid=new wt(80,40,1714782,924218),this.grid.position.y=-.56,e.add(this.grid);const u=160;this.dustPos=new Float32Array(u*3);for(let m=0;m<u;m++)this.dustPos[m*3]=(Math.random()-.5)*12,this.dustPos[m*3+1]=Math.random()*7,this.dustPos[m*3+2]=(Math.random()-.5)*14;const f=new We;f.setAttribute("position",new ze(this.dustPos,3));const h=new Xe({size:.045,color:16765088,transparent:!0,opacity:.32,sizeAttenuation:!0,depthWrite:!1});this.dustMotes=new Ke(f,h),e.add(this.dustMotes)}applyTheme(e){this.starMat.color.set(e.starColor),this.scene.remove(this.grid),this.grid.geometry.dispose(),this.grid.material.dispose(),this.grid=new wt(80,40,e.gridColorA,e.gridColorB),this.grid.position.y=-.56,this.scene.add(this.grid)}update(e){this._t+=e,this.stars.rotation.y+=.008*e,this.brightStars.rotation.y-=.003*e,this.brightStars.rotation.x+=.001*e,this.starMat.opacity=.8+Math.sin(this._t*.45)*.08,this.brightStarMat.opacity=.88+Math.sin(this._t*.62+1.1)*.07;const s=this.dustPos.length/3;for(let i=0;i<s;i++)this.dustPos[i*3]+=Math.sin(i*2.3+this.dustPos[i*3+1]*.7)*6e-4*e,this.dustPos[i*3+1]+=(.006+i%7*5e-4)*e,this.dustPos[i*3+1]>7.5&&(this.dustPos[i*3]=(Math.random()-.5)*12,this.dustPos[i*3+1]=-.2,this.dustPos[i*3+2]=(Math.random()-.5)*14);this.dustMotes.geometry.attributes.position.needsUpdate=!0}}class Xs{constructor(){r(this,"world");r(this,"_initialized",!1)}async init(){await $e.init(),this.world=new $e.World({x:0,y:g.GRAVITY,z:0});const e=this.world.integrationParameters;e.numSolverIterations=16,e.numAdditionalFrictionIterations=8,e.numInternalPgsIterations=2,e.maxCcdSubsteps=8,this._initialized=!0}get rapier(){return $e}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,s){return this.world.createCollider(e,s)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new $e.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}setTimestep(e){this._initialized&&(this.world.integrationParameters.dt=e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class Ks{constructor(){r(this,"bodyToMesh",new Map)}register(e,s){this.bodyToMesh.set(e.handle,s)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(s=>{const i=this.bodyToMesh.get(s.handle);if(!i)return;const t=s.translation(),a=s.rotation(),n=i.userData.physicsYOffset??0;i.position.set(t.x,t.y+n,t.z),i.quaternion.set(a.x,a.y,a.z,a.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class Js{constructor(){r(this,"handles",new Map);r(this,"dropZoneHandles",new Set);r(this,"eventQueue");r(this,"medalCollectedCallback");r(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,s){this.handles.set(e,s),s==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e,s=1){for(let i=0;i<s;i++)e.stepWithEvents(this.eventQueue);this.eventQueue.drainCollisionEvents((i,t,a)=>{var d,p;if(!a)return;const n=this.handles.get(i),o=this.handles.get(t);if(n==="drop_zone"&&(o==="medal"||o==="item")||o==="drop_zone"&&(n==="medal"||n==="item")){const u=n==="drop_zone"?t:i,f=n==="drop_zone"?o:n;f==="medal"?(d=this.medalCollectedCallback)==null||d.call(this,u):f==="item"&&((p=this.itemCollectedCallback)==null||p.call(this,u))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class ei{constructor(){r(this,"body");r(this,"time",0);r(this,"zBase");r(this,"initialized",!1);r(this,"speedMultiplier",1);this.zBase=-12/2+g.PUSHER_DEPTH/2-g.PUSHER_RANGE}async initPhysics(e){const s=e.rapier,i=s.RigidBodyDesc.kinematicVelocityBased().setTranslation(0,g.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(i);const t=s.ColliderDesc.cuboid(g.PUSHER_WIDTH/2,g.PUSHER_HEIGHT/2,g.PUSHER_DEPTH/2).setFriction(1.2);e.createCollider(t,this.body),this.initialized=!0}update(e){this.time+=e*this.speedMultiplier;const s=g.PUSHER_PERIOD_MS/1e3,i=this.time%s/s,t=(1-Math.cos(i*Math.PI*2))/2*g.PUSHER_RANGE;if(this.initialized){const a=Math.PI*g.PUSHER_RANGE/s*Math.sin(i*Math.PI*2);this.body.setLinvel({x:0,y:0,z:a},!0),i<e/s&&this.body.setTranslation({x:0,y:g.PUSHER_HEIGHT/2,z:this.zBase},!0)}return t}get currentZOffset(){const e=g.PUSHER_PERIOD_MS/1e3,s=this.time%e/e;return(1-Math.cos(s*Math.PI*2))/2*g.PUSHER_RANGE}get restZ(){return this.zBase}}function Fe(c){return[c>>16&255,c>>8&255,c&255]}function st(c){const e=c.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function K(c,e,s,i){return`rgb(${Math.min(255,c+i)},${Math.min(255,e+i)},${Math.min(255,s+i)})`}function De(c,e,s,i){return`rgb(${Math.max(0,c-i)},${Math.max(0,e-i)},${Math.max(0,s-i)})`}function Mt(c,e,s){return`rgb(${c},${e},${s})`}function ce(c,e,s,i,t){return`rgba(${Math.min(255,c+i)},${Math.min(255,e+i)},${Math.min(255,s+i)},${t})`}const Ce=class Ce{static get(e,s){if(!this.cache.has(e)){const i=s(),t=new Ts(i);this.cache.set(e,t)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),a=256/2,n=256/2,o=256/2-2,[l,d,p]=Fe(e),u=Mt(l,d,p),f=K(l,d,p,75),h=K(l,d,p,38),m=De(l,d,p,60),y=De(l,d,p,90),x=t.createRadialGradient(a-32,n-32,4,a,n,o);x.addColorStop(0,f),x.addColorStop(.25,K(l,d,p,55)),x.addColorStop(.55,h),x.addColorStop(.8,u),x.addColorStop(1,m),t.fillStyle=x,t.beginPath(),t.arc(a,n,o,0,Math.PI*2),t.fill(),t.save(),t.globalCompositeOperation="source-over";const v=480;for(let I=0;I<v;I++){const _=I/v*Math.PI*2,z=.012+Math.random()*.028,F=Math.random()>.5;t.strokeStyle=F?`rgba(${Math.min(255,l+45)},${Math.min(255,d+40)},${Math.min(255,p+35)},${z})`:`rgba(${Math.max(0,l-20)},${Math.max(0,d-18)},${Math.max(0,p-15)},${z*.7})`,t.lineWidth=.5+Math.random()*.6,t.beginPath(),t.moveTo(a+Math.cos(_)*16,n+Math.sin(_)*16),t.lineTo(a+Math.cos(_)*(o-20),n+Math.sin(_)*(o-20)),t.stroke()}t.restore();for(let I=0;I<4;I++){const _=o-6-I*8;t.strokeStyle=De(l,d,p,35+I*10),t.lineWidth=2,t.beginPath(),t.arc(a,n,_,0,Math.PI*2),t.stroke(),t.strokeStyle=K(l,d,p,22+I*6),t.lineWidth=.9,t.beginPath(),t.arc(a,n,_+2.5,0,Math.PI*2),t.stroke()}t.strokeStyle=y,t.lineWidth=8,t.beginPath(),t.arc(a,n,o-5,0,Math.PI*2),t.stroke(),t.save(),t.strokeStyle=K(l,d,p,60),t.globalAlpha=.55,t.lineWidth=3,t.beginPath(),t.arc(a,n,o-3,Math.PI*.9,Math.PI*1.8),t.stroke(),t.restore();const E=68,C=t.createRadialGradient(a-10,n-10,0,a,n,E);C.addColorStop(0,K(l,d,p,65)),C.addColorStop(.4,K(l,d,p,30)),C.addColorStop(.75,h),C.addColorStop(.92,u),C.addColorStop(1,m),t.fillStyle=C,t.beginPath(),t.arc(a,n,E,0,Math.PI*2),t.fill(),t.strokeStyle=De(l,d,p,50),t.lineWidth=2.5,t.beginPath(),t.arc(a,n,E+.5,0,Math.PI*2),t.stroke(),t.strokeStyle=K(l,d,p,48),t.lineWidth=1.2,t.beginPath(),t.arc(a,n,E-2.5,0,Math.PI*2),t.stroke(),t.lineCap="round";for(let I=0;I<24;I++){const _=I*Math.PI/12,z=I%2===0,F=z?16:22,$=z?56:48,U=z?.28:.18;t.strokeStyle=`rgba(${Math.min(255,l+50)},${Math.min(255,d+45)},${Math.min(255,p+38)},${U})`,t.lineWidth=z?2.5:1.5,t.beginPath(),t.moveTo(a+Math.cos(_)*F,n+Math.sin(_)*F),t.lineTo(a+Math.cos(_)*$,n+Math.sin(_)*$),t.stroke()}const w=e===13691135;if(w||e===16719968){const I=w?"×2":"×3",_=22,z=t.createRadialGradient(a-5,n-5,0,a,n,_);z.addColorStop(0,K(l,d,p,100)),z.addColorStop(.6,h),z.addColorStop(1,m),t.fillStyle=z,t.beginPath(),t.arc(a,n,_,0,Math.PI*2),t.fill(),t.strokeStyle=y,t.lineWidth=2,t.beginPath(),t.arc(a,n,_,0,Math.PI*2),t.stroke(),t.font="bold 26px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(255,255,255,0.96)",t.shadowColor="rgba(0,0,0,0.85)",t.shadowBlur=6,t.fillText(I,a,n+1),t.shadowBlur=0,t.textAlign="left"}else{const F=Math.PI/5,$=t.createRadialGradient(a-4,n-4,0,a,n,13);$.addColorStop(0,f),$.addColorStop(.5,h),$.addColorStop(1,m),t.fillStyle=$,t.beginPath();for(let U=0;U<10;U++){const j=U%2===0?13:5.5,te=U*F-Math.PI/2;U===0?t.moveTo(a+j*Math.cos(te),n+j*Math.sin(te)):t.lineTo(a+j*Math.cos(te),n+j*Math.sin(te))}t.closePath(),t.fill(),t.strokeStyle=y,t.lineWidth=1.5,t.stroke()}const b=t.createRadialGradient(a-48,n-48,0,a-48,n-48,95);b.addColorStop(0,"rgba(255,255,255,0.72)"),b.addColorStop(.2,"rgba(255,255,255,0.32)"),b.addColorStop(.5,"rgba(255,255,255,0.08)"),b.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=b,t.beginPath(),t.arc(a,n,o-2,0,Math.PI*2),t.fill();const H=t.createRadialGradient(a+52,n+50,0,a+52,n+50,60);H.addColorStop(0,"rgba(255,255,255,0.22)"),H.addColorStop(.4,"rgba(255,255,255,0.06)"),H.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=H,t.beginPath(),t.arc(a,n,o-2,0,Math.PI*2),t.fill();const D=t.getImageData(0,0,256,256),P=D.data;for(let I=0;I<P.length;I+=4){const _=(Math.random()-.5)*10;P[I]=Math.max(0,Math.min(255,P[I]+_)),P[I+1]=Math.max(0,Math.min(255,P[I+1]+_)),P[I+2]=Math.max(0,Math.min(255,P[I+2]+_))}return t.putImageData(D,0,0),i})}static getFieldTexture(e="#2a2a4e"){return this.get(`field_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d"),[a,n,o]=st(e),l=a>o+20;if(t.fillStyle=e,t.fillRect(0,0,512,512),l){const d=t.getImageData(0,0,512,512),p=d.data;for(let h=0;h<p.length;h+=4){const m=(Math.random()-.5)*22;p[h]=Math.max(0,Math.min(255,a+m)),p[h+1]=Math.max(0,Math.min(255,n+m)),p[h+2]=Math.max(0,Math.min(255,o+m)),p[h+3]=255}t.putImageData(d,0,0);for(let h=0;h<512;h+=3){const m=.07+Math.random()*.06,y=Math.random()>.5;t.strokeStyle=y?`rgba(${Math.min(255,a+18)},${Math.min(255,n+14)},${Math.min(255,o+10)},${m})`:`rgba(${Math.max(0,a-14)},${Math.max(0,n-10)},${Math.max(0,o-8)},${m})`,t.lineWidth=1+Math.random()*1.5,t.beginPath(),t.moveTo(0,h+.5),t.lineTo(512,h+.5),t.stroke()}t.save(),t.globalAlpha=.1;const u=36;t.strokeStyle=K(a,n,o,50),t.lineWidth=.8,t.translate(512/2,512/2),t.rotate(Math.PI/4),t.translate(-512/2,-512/2);for(let h=-512;h<=512*2;h+=u)t.beginPath(),t.moveTo(h,-512),t.lineTo(h,512*2),t.stroke();for(let h=-512;h<=512*2;h+=u)t.beginPath(),t.moveTo(-512,h),t.lineTo(512*2,h),t.stroke();t.restore();const f=t.createRadialGradient(512/2,512/2,512*.25,512/2,512/2,512*.75);f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,0.28)"),t.fillStyle=f,t.fillRect(0,0,512,512)}else{const d=t.getImageData(0,0,512,512),p=d.data;for(let h=0;h<p.length;h+=4){const m=(Math.random()-.5)*18;p[h]=Math.max(0,Math.min(255,a+m)),p[h+1]=Math.max(0,Math.min(255,n+m)),p[h+2]=Math.max(0,Math.min(255,o+m)),p[h+3]=255}t.putImageData(d,0,0),t.save(),t.globalAlpha=.14;const u=40;t.strokeStyle=K(a,n,o,60),t.lineWidth=.8,t.translate(512/2,512/2),t.rotate(Math.PI/4),t.translate(-512/2,-512/2);for(let h=-512;h<=512*2;h+=u)t.beginPath(),t.moveTo(h,-512),t.lineTo(h,512*2),t.stroke();for(let h=-512;h<=512*2;h+=u)t.beginPath(),t.moveTo(-512,h),t.lineTo(512*2,h),t.stroke();t.restore(),t.save(),t.globalAlpha=.25,t.fillStyle=K(a,n,o,80),t.translate(512/2,512/2),t.rotate(Math.PI/4),t.translate(-512/2,-512/2);for(let h=0;h<=512*2;h+=u)for(let m=0;m<=512*2;m+=u)t.beginPath(),t.arc(h-512/2,m-512/2,1.8,0,Math.PI*2),t.fill();t.restore();for(let h=0;h<512;h+=4){const m=.04+Math.random()*.04,y=Math.random()>.5;t.strokeStyle=y?`rgba(${Math.min(255,a+20)},${Math.min(255,n+16)},${Math.min(255,o+14)},${m})`:`rgba(${Math.max(0,a-10)},${Math.max(0,n-8)},${Math.max(0,o-8)},${m})`,t.lineWidth=1+Math.random()*1.2,t.beginPath(),t.moveTo(0,h+.5),t.lineTo(512,h+.5),t.stroke()}const f=t.createRadialGradient(512/2,512/2,512*.2,512/2,512/2,512*.72);f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,0.30)"),t.fillStyle=f,t.fillRect(0,0,512,512)}return i})}static getPusherTexture(e="#3a3a6e"){return this.get(`pusher_${e}`,()=>{const t=document.createElement("canvas");t.width=256,t.height=128;const a=t.getContext("2d"),[n,o,l]=st(e),d=n>l+20;if(a.fillStyle=e,a.fillRect(0,0,256,128),d){a.strokeStyle=ce(n,o,l,90,.38),a.lineWidth=.8;const f=14;for(let h=-128;h<384;h+=f)a.beginPath(),a.moveTo(h,0),a.lineTo(h+128,128),a.stroke();for(let h=0;h<512;h+=f)a.beginPath(),a.moveTo(h,0),a.lineTo(h-128,128),a.stroke();a.fillStyle=K(n,o,l,90);for(let h=0;h<2;h++){const m=10+h*108;for(let y=20;y<256;y+=36)a.fillStyle=K(n,o,l,80),a.beginPath(),a.arc(y,m,4.5,0,Math.PI*2),a.fill(),a.fillStyle=ce(n,o,l,150,.7),a.beginPath(),a.arc(y-1,m-1,2,0,Math.PI*2),a.fill(),a.fillStyle="rgba(0,0,0,0.45)",a.beginPath(),a.arc(y+1,m+1,3,.5,Math.PI*2),a.fill()}}else{for(let f=0;f<128;f++){const h=.015+Math.random()*.055;a.strokeStyle=ce(n,o,l,100,h),a.lineWidth=1,a.beginPath(),a.moveTo(0,f+.5),a.lineTo(256,f+.5),a.stroke()}a.fillStyle=ce(n,o,l,120,.35);for(let f=24;f<256;f+=48)a.beginPath(),a.arc(f,8,3,0,Math.PI*2),a.fill()}const p=a.createLinearGradient(0,0,0,18);p.addColorStop(0,ce(n,o,l,150,.6)),p.addColorStop(1,ce(n,o,l,150,0)),a.fillStyle=p,a.fillRect(0,0,256,18);const u=a.createLinearGradient(0,114,0,128);return u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,0.55)"),a.fillStyle=u,a.fillRect(0,114,256,14),t})}static getWallTexture(e="#1a1a3e"){return this.get(`wall_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),[a,n,o]=st(e),l=a>o+20;if(t.fillStyle=e,t.fillRect(0,0,256,256),l)for(let f=0;f<256;f+=40){const h=t.createLinearGradient(0,f,0,f+40);h.addColorStop(0,K(a,n,o,18)),h.addColorStop(.5,Mt(a,n,o)),h.addColorStop(1,De(a,n,o,12)),t.fillStyle=h,t.fillRect(0,f,256,40),t.strokeStyle="rgba(0,0,0,0.55)",t.lineWidth=2,t.beginPath(),t.moveTo(0,f+40-1),t.lineTo(256,f+40-1),t.stroke(),t.strokeStyle=ce(a,n,o,70,.45),t.lineWidth=1,t.beginPath(),t.moveTo(0,f+1),t.lineTo(256,f+1),t.stroke();for(let m=24;m<256;m+=48){const y=f+40-7;t.fillStyle=K(a,n,o,55),t.beginPath(),t.arc(m,y,4,0,Math.PI*2),t.fill(),t.fillStyle=ce(a,n,o,130,.6),t.beginPath(),t.arc(m-1,y-1,1.5,0,Math.PI*2),t.fill(),t.fillStyle="rgba(0,0,0,0.5)",t.beginPath(),t.arc(m+1,y+1,2.5,.4,Math.PI*2),t.fill()}}else{for(let m=0;m<256;m+=64){const y=t.createLinearGradient(m,0,m+64,0);y.addColorStop(0,"rgba(0,0,0,0.22)"),y.addColorStop(.12,"rgba(0,0,0,0)"),y.addColorStop(.88,"rgba(0,0,0,0)"),y.addColorStop(1,"rgba(0,0,0,0.22)"),t.fillStyle=y,t.fillRect(m,0,64,256),t.strokeStyle="rgba(0,0,0,0.55)",t.lineWidth=2,t.beginPath(),t.moveTo(m,0),t.lineTo(m,256),t.stroke(),t.strokeStyle=ce(a,n,o,72,.28),t.lineWidth=.9,t.beginPath(),t.moveTo(m+2.5,0),t.lineTo(m+2.5,256),t.stroke()}const f=56;for(let m=0;m<256;m+=f){t.strokeStyle="rgba(0,0,0,0.50)",t.lineWidth=2,t.beginPath(),t.moveTo(0,m),t.lineTo(256,m),t.stroke(),t.strokeStyle=ce(a,n,o,62,.22),t.lineWidth=.9,t.beginPath(),t.moveTo(0,m+2.5),t.lineTo(256,m+2.5),t.stroke(),t.save(),t.globalAlpha=.6;for(let y=0;y<256;y+=64)t.fillStyle=K(a,n,o,85),t.beginPath(),t.arc(y,m,2.2,0,Math.PI*2),t.fill(),t.fillStyle="rgba(0,0,0,0.45)",t.beginPath(),t.arc(y+.6,m+.6,1.1,0,Math.PI*2),t.fill();t.restore()}t.save(),t.globalAlpha=.04,t.strokeStyle=K(a,n,o,55),t.lineWidth=.6;for(let m=-256;m<256*2;m+=10)t.beginPath(),t.moveTo(m,0),t.lineTo(m+256*.5,256),t.stroke();t.restore();const h=t.createRadialGradient(256/2,256/2,256*.2,256/2,256/2,256*.72);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,0.32)"),t.fillStyle=h,t.fillRect(0,0,256,256)}const d=t.getImageData(0,0,256,256),p=d.data;for(let u=0;u<p.length;u+=4){const f=(Math.random()-.5)*(l?8:10);p[u]=Math.max(0,Math.min(255,p[u]+f)),p[u+1]=Math.max(0,Math.min(255,p[u+1]+f)),p[u+2]=Math.max(0,Math.min(255,p[u+2]+f))}return t.putImageData(d,0,0),i})}static getScreenTexture(e,s){return this.get(`screen_${e.toString(16)}_${s.toString(16)}`,()=>{const a=document.createElement("canvas");a.width=512,a.height=256;const n=a.getContext("2d"),[o,l,d]=Fe(s),p=n.createRadialGradient(512/2,256*.7,0,512/2,256*.7,512*.65);p.addColorStop(0,`rgb(${Math.min(o+28,60)},${Math.min(l+20,52)},${Math.min(d+28,68)})`),p.addColorStop(1,`rgb(${Math.max(o-4,0)},${Math.max(l-4,0)},${Math.max(d-4,0)})`),n.fillStyle=p,n.fillRect(0,0,512,256);const[u,f,h]=Fe(e),m=`rgb(${u},${f},${h})`,y=`rgba(${u},${f},${h},0.60)`,x=`rgba(${u},${f},${h},0.25)`;n.strokeStyle=y,n.lineWidth=1.5,n.strokeRect(10,10,492,236),n.strokeStyle=x,n.lineWidth=.8,n.strokeRect(16,16,480,224);const v=["♠","♥","♦","♣"],E=[[32,38],[480,38],[32,234],[480,234]];n.textAlign="center",n.textBaseline="middle",n.font="bold 20px serif";for(let D=0;D<4;D++)n.fillStyle=x,n.fillText(v[D],E[D][0],E[D][1]);n.strokeStyle=x,n.lineWidth=1.5;for(const[D,P]of[[22,22],[490,22],[22,234],[490,234]])n.beginPath(),n.moveTo(D-7,P),n.lineTo(D+7,P),n.moveTo(D,P-7),n.lineTo(D,P+7),n.stroke();n.textAlign="center",n.textBaseline="top",n.font="bold 12px monospace",n.fillStyle=x,n.fillText("✦  INSERT COIN  ✦",512/2,22),n.strokeStyle=x,n.lineWidth=1,n.beginPath(),n.moveTo(20,52),n.lineTo(492,52),n.stroke(),n.textAlign="left",n.textBaseline="top",n.font="bold 11px monospace",n.fillStyle=x,n.fillText("JACKPOT",32,64),n.fillText("HIGH SCORE",512/2+20,64),n.font="bold 22px monospace",n.fillStyle=y,n.fillText("000000",32,80),n.fillText("999999",512/2+20,80),n.strokeStyle=y,n.lineWidth=1,n.beginPath(),n.moveTo(20,116),n.lineTo(492,116),n.stroke(),n.textAlign="center",n.textBaseline="alphabetic",n.font="bold 52px monospace",n.shadowColor=m,n.shadowBlur=26,n.fillStyle=m,n.fillText("YUKIMEDAL",512/2,206),n.shadowBlur=0,n.font="14px monospace",n.fillStyle=y,n.fillText("ROGUELIKE  MEDAL  PUSHER",512/2,234);const[C,w,T]=Fe(s),b=`rgb(${Math.max(C-4,0)},${Math.max(w-4,0)},${Math.max(T-4,0)})`,H=n;return Promise.resolve().then(()=>{const D=`screen_${e.toString(16)}_${s.toString(16)}`,P=Ce.cache.get(D);P&&(Ce._screen={ctx:H,tex:P,nr:u,ng:f,nb:h,clearRgb:b,W:512,H:256})}),a})}static refreshJackpot(e){const s=this._screen;if(!s)return;const{ctx:i,tex:t,nr:a,ng:n,nb:o,clearRgb:l,W:d}=s,p=`rgba(${a},${n},${o},0.60)`,u=`rgba(${a},${n},${o},0.25)`;i.fillStyle=l,i.fillRect(28,62,220,40),i.textAlign="left",i.textBaseline="top",i.font="bold 11px monospace",i.fillStyle=u,i.fillText("JACKPOT",32,64),i.font="bold 22px monospace",i.fillStyle=p,i.fillText(Math.min(e,999999).toString().padStart(6,"0"),32,80),t.needsUpdate=!0}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}};r(Ce,"cache",new Map),r(Ce,"_screen",null);let oe=Ce;const ti=new ie(g.MEDAL_RADIUS,g.MEDAL_RADIUS,g.MEDAL_THICKNESS,48),si=new ie(g.MEDAL_RADIUS_LARGE,g.MEDAL_RADIUS_LARGE,g.MEDAL_THICKNESS,48),ii=new ie(g.MEDAL_RADIUS_TRIPLE,g.MEDAL_RADIUS_TRIPLE,g.MEDAL_THICKNESS*1.3,48),ai={normal:16766720,double:13691135,large:15245312,triple:16719968},ni={normal:1,double:2,large:1,triple:3};function oi(c){const e=c*100;return e<g.MEDAL_PROB_NORMAL?"normal":e<g.MEDAL_PROB_DOUBLE?"double":e<g.MEDAL_PROB_TRIPLE?"triple":"large"}function ri(c){return c==="large"?si:c==="triple"?ii:ti}function Ct(c){c.traverse(e=>{if(e instanceof k){e.geometry.dispose();const s=e.material;Array.isArray(s)?s.forEach(i=>i.dispose()):s.dispose()}})}function li(c){return[c>>16&255,c>>8&255,c&255]}function it(c){return Math.max(0,Math.min(255,c))}function mt(c,e){const[s,i,t]=li(c);return it(s+e)<<16|it(i+e)<<8|it(t+e)}function ci(c,e,s){const i=c*.27,t=c*.118,a=5,n=Math.max(e*.55,.012),o=i*.1,l=new Es;for(let f=0;f<a*2;f++){const h=f%2===0?i:t,m=f*Math.PI/a-Math.PI/2;f===0?l.moveTo(h*Math.cos(m),h*Math.sin(m)):l.lineTo(h*Math.cos(m),h*Math.sin(m))}l.closePath();const d=new Ms(l,{depth:n,bevelEnabled:!0,bevelSize:o,bevelThickness:n*.5,bevelSegments:3});d.rotateX(-Math.PI/2);const p=new ye({color:mt(s,48),metalness:.98,roughness:.06,clearcoat:.9,clearcoatRoughness:.02,envMapIntensity:1.8}),u=new k(d,p);return u.position.y=e/2,u.castShadow=!0,u}function It(c,e,s,i){const t=c*(i?.4:.32),a=c*.032,n=new Ie(t,a,8,36),o=new ye({color:mt(s,65),emissive:new Y(s),emissiveIntensity:i?.55:.25,metalness:.95,roughness:.06,clearcoat:.85,clearcoatRoughness:.03,envMapIntensity:1.8}),l=new k(n,o);return l.rotation.x=Math.PI/2,l.position.y=e/2+a,l.castShadow=!0,l}class di{constructor(){r(this,"medals",new Map);r(this,"pendingRemoval",new Set);r(this,"spawnCounter",0)}spawn(e,s,i,t,a,n,o,l,d){if(this.medals.size>=g.MAX_MEDALS_ON_FIELD)return;const p=t.rapier,u=d??oi(Math.random()),f=u==="large"?g.MEDAL_RADIUS_LARGE:u==="triple"?g.MEDAL_RADIUS_TRIPLE:g.MEDAL_RADIUS,h=ni[u],m=p.RigidBodyDesc.dynamic().setTranslation(e,s,i).setLinearDamping(.5).setAngularDamping(4).setCcdEnabled(!0),y=t.createRigidBody(m);y.setEnabledRotations(!0,!1,!0,!0),l&&y.setLinvel(l,!0);const x=p.ColliderDesc.cylinder(g.MEDAL_THICKNESS/2,f).setRestitution(.05).setFriction(.65).setDensity(g.MEDAL_MASS).setActiveEvents(p.ActiveEvents.COLLISION_EVENTS),v=t.createCollider(x,y);n.registerHandle(v.handle,"medal");const E=ai[u],C=oe.getMedalTexture(E);C.wrapS=C.wrapT=Ss;const w=u==="triple",T=u==="double",b=.12+Math.random()*.12,H=(Math.random()-.5)*.14,D=new Y(Math.min(1,1+H),Math.min(1,1+H*.85),Math.min(1,1-H*.25)),P=new ye({color:w||T?16777215:D,map:C,metalness:.9,roughness:b,clearcoat:.4,clearcoatRoughness:.05+Math.random()*.06,reflectivity:.95,envMapIntensity:.85,emissive:w||T?new Y(E):new Y(0),emissiveIntensity:w?.18:T?.07:0}),I=new k(ri(u),P);I.castShadow=!0,I.receiveShadow=!1;const _=g.MEDAL_THICKNESS*.58,z=new Ie(f-_*.45,_,10,48),F=new ye({color:mt(E,18),metalness:.95,roughness:.1,clearcoat:.6,clearcoatRoughness:.04,envMapIntensity:.9,emissive:w||T?new Y(E):new Y(0),emissiveIntensity:w?.18:T?.06:0}),$=new k(z,F);$.rotation.x=Math.PI/2,I.add($);const U=Math.random()*Math.PI*2;if(!w&&!T){const j=ci(f,g.MEDAL_THICKNESS,E);j.rotation.y=U,I.add(j)}else{const j=It(f,g.MEDAL_THICKNESS,E,w);if(I.add(j),w){const te=It(f,g.MEDAL_THICKNESS,E,!1);te.scale.setScalar(1.35),te.position.y=g.MEDAL_THICKNESS/2+.005,I.add(te)}}I.userData.physicsYOffset=.03,I.position.set(e,s,i),o.add(I),a.register(y,I),this.medals.set(v.handle,{body:y,collider:v,mesh:I,type:u,quotaValue:h}),this.spawnCounter++}getQuotaValue(e){var s;return((s=this.medals.get(e))==null?void 0:s.quotaValue)??1}getMedalPosition(e){const s=this.medals.get(e);if(!s)return{x:0,y:0,z:0};const i=s.body.translation();return{x:i.x,y:i.y,z:i.z}}markForRemoval(e){this.pendingRemoval.add(e)}nudgeDeadZone(e,s){for(const[,i]of this.medals){if(this.pendingRemoval.has(i.collider.handle))continue;const t=i.body.translation(),a=i.body.linvel();t.z>s-.8&&t.z<s&&t.y>-.2&&Math.sqrt(a.x*a.x+a.z*a.z)<.15&&i.body.applyImpulse({x:(Math.random()-.5)*.4,y:.05,z:.6+Math.random()*.3},!0)}}shakeAll(e=3){for(const[,s]of this.medals){if(this.pendingRemoval.has(s.collider.handle))continue;const i=(Math.random()-.5)*e,t=Math.random()*e*.4+.5,a=(Math.random()-.5)*e*.5-e*.3;s.body.applyImpulse({x:i,y:t,z:a},!0)}}flushRemovals(e,s,i,t){let a=0;for(const n of this.pendingRemoval){const o=this.medals.get(n);o&&(s.unregister(o.body),i.unregisterHandle(n),t.remove(o.mesh),e.removeRigidBody(o.body),Ct(o.mesh),this.medals.delete(n),a++)}return this.pendingRemoval.clear(),a}cleanupFallen(e,s,i,t,a,n){let o=0;for(const[l,d]of this.medals)d.body.translation().y<e&&!this.pendingRemoval.has(l)&&(this.pendingRemoval.add(l),n==null||n(l),o++);return o}get count(){return this.medals.size}clear(e,s,i,t){for(const[a,n]of this.medals)s.unregister(n.body),i.unregisterHandle(a),t.remove(n.mesh),e.removeRigidBody(n.body),Ct(n.mesh);this.medals.clear(),this.pendingRemoval.clear()}}class hi{constructor(){r(this,"body");r(this,"collider")}async initPhysics(e,s){const i=e.rapier,t=g.OPEN_ZONE_START,a=g.FIELD_DEPTH/2+15,n=(t+a)/2,o=(a-t)/2,l=i.RigidBodyDesc.fixed().setTranslation(0,-2,n);this.body=e.createRigidBody(l);const d=i.ColliderDesc.cuboid(g.FIELD_WIDTH/2+1,1.5,o).setActiveEvents(i.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(d,this.body),s.registerHandle(this.collider.handle,"drop_zone")}}class pi{constructor(){r(this,"time",0)}setupStage(e,s,i,t){this.clear(t)}getBonusMultiplierAt(e,s){return 1}update(e){this.time+=e}clear(e){this.time=0}}var O=(c=>(c.Common="Common",c.Rare="Rare",c.Epic="Epic",c.Legendary="Legendary",c))(O||{});const Qt={[O.Common]:11184810,[O.Rare]:3381759,[O.Epic]:13387007,[O.Legendary]:16763904},mi={[O.Common]:3355443,[O.Rare]:1127304,[O.Epic]:6689160,[O.Legendary]:8939008},ui={[O.Common]:.45,[O.Rare]:.75,[O.Epic]:.85,[O.Legendary]:.95};function fi(c){const e=Qt[c],s=mi[c],i=ui[c],t=new Yt,a=c===O.Legendary?.4:c===O.Epic?.3:c===O.Rare?.2:.1,n=new ye({color:e,emissive:s,emissiveIntensity:i,metalness:c===O.Legendary?.1:.25,roughness:.1,clearcoat:1,clearcoatRoughness:.04,transmission:a,ior:1.55,transparent:!0,opacity:.92,envMapIntensity:2});let o;switch(c){case O.Legendary:o=new _s(.24,.07,80,12,2,3);break;case O.Epic:o=new Is(.32,0);break;case O.Rare:{const d=new Tt(.22,.3,8,1),p=new Tt(.22,.26,8,1),u=new k(p,n.clone());u.rotation.x=Math.PI,u.position.y=-.03;const f=new k(d,n);return f.castShadow=!0,u.castShadow=!0,t.add(f,u),o=d,_t(t,c),t}default:o=new Cs(.3,0);break}const l=new k(o,n);if(l.castShadow=!0,t.add(l),c!==O.Common){const d=new ye({color:e,emissive:e,emissiveIntensity:c===O.Legendary?2:1.4,metalness:0,roughness:.4,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.45}),p=o.clone(),u=new k(p,d);u.scale.setScalar(.65),t.add(u)}return _t(t,c),t}function _t(c,e){const s=Qt[e];if(e===O.Common)return;const i=e===O.Legendary?.4:e===O.Epic?.36:.3,t=new Ie(i,.018,8,48),a=new ye({color:s,emissive:s,emissiveIntensity:e===O.Legendary?2.5:1.8,metalness:0,roughness:.05,clearcoat:.8,clearcoatRoughness:.02,transparent:!0,opacity:.9}),n=new k(t,a);if(n.rotation.x=Math.PI/3,c.add(n),e===O.Legendary){const o=new k(new Ie(i*.88,.012,6,40),a.clone());o.rotation.x=Math.PI/3,o.rotation.y=Math.PI/2,c.add(o)}}class gi{constructor(e){r(this,"mesh");this.mesh=fi(e),this.mesh.castShadow=!0}update(e){this.mesh.rotation.y+=.025;for(const s of this.mesh.children)s instanceof k&&s.geometry instanceof Ie&&(s.rotation.z+=.018)}setPosition(e,s,i){this.mesh.position.set(e,s,i)}dispose(){this.mesh.traverse(e=>{if(e instanceof k){e.geometry.dispose();const s=e.material;Array.isArray(s)?s.forEach(i=>i.dispose()):s.dispose()}})}}class ut{constructor(e=Date.now()){r(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,s){return Math.floor(this.next()*(s-e+1))+e}nextFloat(e,s){return this.next()*(s-e)+e}shuffle(e){const s=[...e];for(let i=s.length-1;i>0;i--){const t=Math.floor(this.next()*(i+1));[s[i],s[t]]=[s[t],s[i]]}return s}weightedPick(e,s){const i=s.reduce((a,n)=>a+n,0);let t=this.next()*i;for(let a=0;a<e.length;a++)if(t-=s[a],t<=0)return e[a];return e[e.length-1]}}class yi{constructor(){r(this,"items",new Map);r(this,"pendingRemoval",new Set)}spawnItems(e,s,i,t,a,n){const o=new ut(n);for(const l of e){const d=o.nextFloat(-3,g.FIELD_WIDTH/2-1),p=o.nextFloat(-2,3),f=.4+.05;this.spawnSingle(l,d,f,p,s,i,t,a)}}spawnSingle(e,s,i,t,a,n,o,l){const d=a.rapier,p=d.RigidBodyDesc.dynamic().setTranslation(s,i,t).setLinearDamping(.7).setAngularDamping(.8),u=a.createRigidBody(p),f=d.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(d.ActiveEvents.COLLISION_EVENTS),h=a.createCollider(f,u);o.registerHandle(h.handle,"item");const m=new gi(e.rarity);m.setPosition(s,i,t),l.add(m.mesh),n.register(u,m.mesh),this.items.set(h.handle,{body:u,collider:h,mesh:m,definitionId:e.id})}getDefinitionId(e){var s;return(s=this.items.get(e))==null?void 0:s.definitionId}getItemPosition(e){const s=this.items.get(e);if(!s)return{x:0,y:0,z:0};const i=s.body.translation();return{x:i.x,y:i.y,z:i.z}}cleanupFallen(e,s){for(const[i,t]of this.items)t.body.translation().y<e&&!this.pendingRemoval.has(i)&&(this.pendingRemoval.add(i),s==null||s(i))}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,s,i,t){for(const a of this.pendingRemoval){const n=this.items.get(a);n&&(s.unregister(n.body),i.unregisterHandle(a),t.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose(),this.items.delete(a))}this.pendingRemoval.clear()}update(e){for(const s of this.items.values())s.mesh.update(e)}clear(e,s,i,t){for(const[a,n]of this.items)s.unregister(n.body),i.unregisterHandle(a),t.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const rt=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:O.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:O.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:O.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:O.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:O.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:O.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:O.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:O.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:O.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:O.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function Ae(c){return rt.find(e=>e.id===c)}const At={[O.Common]:60,[O.Rare]:30,[O.Epic]:8,[O.Legendary]:2};class xi{constructor(e){r(this,"rng");this.rng=new ut(e)}pickRandom(e){const s=[];for(let i=0;i<e;i++){const t=this.pickRarity(),a=rt.filter(o=>o.rarity===t);if(a.length===0){s.push(rt[0]);continue}const n=Math.floor(this.rng.next()*a.length);s.push(a[n])}return s}pickRarity(){const e=Object.keys(At),s=e.map(i=>At[i]);return this.rng.weightedPick(e,s)}}function R(c,e,s=!1){const i=new k(c,e);return s&&(i.castShadow=!0,i.receiveShadow=!0),i}function Rt(c,e=1){return new N({color:c,emissive:c,emissiveIntensity:e,roughness:.5,metalness:.3})}class G{constructor(e){r(this,"group");r(this,"pusherMesh",null);r(this,"wallMeshes",[]);r(this,"sideGuardMeshes",[]);r(this,"collectionGlowMat",null);r(this,"gaugeMats",[]);r(this,"ledStripMats",[]);r(this,"collectionFlashRemaining",0);r(this,"pusherZBase",-12/2+g.PUSHER_DEPTH/2-g.PUSHER_RANGE);this.group=new Yt,this.rebuild(e)}rebuild(e){this.group.traverse(s=>{if(s!==this.group&&s instanceof k){s.geometry.dispose();const i=s.material;Array.isArray(i)?i.forEach(t=>t.dispose()):i.dispose()}}),this.group.clear(),this.wallMeshes=[],this.sideGuardMeshes=[],this.collectionGlowMat=null,this.gaugeMats=[],this.ledStripMats=[],this.buildFieldSurface(e),this.buildPusher(e),this.addPusherDetails(e),this.createWalls(e),this.buildCabinet(e),this.buildCabinetDetails(e)}static cabinetMat(e){return new N({color:e.cabinetColor,roughness:.72,metalness:.42})}static brassMat(e){return new N({color:e.brassColor,roughness:e.brassRoughness,metalness:e.brassMetalness})}buildFieldSurface(e){const s=g.FIELD_DEPTH/2+g.OPEN_ZONE_START,i=-12/2+s/2,t=oe.getFieldTexture(e.fieldTexBase);t.wrapS=t.wrapT=Le,t.repeat.set(g.FIELD_WIDTH/2,s/2);const a=new N({map:t,color:16777215,roughness:.92,metalness:0}),n=new A(g.FIELD_WIDTH,g.FIELD_HEIGHT,s),o=new k(n,a);o.receiveShadow=!0,o.position.set(0,-.1/2,i),this.group.add(o);const l=-12/2,d=g.OPEN_ZONE_START,p=g.FIELD_WIDTH,u=[{z:l+(d-l)*.35,color:e.secondaryNeon,intensity:.45},{z:l+(d-l)*.65,color:e.tertiaryNeon,intensity:.4}];for(const{z:f,color:h,intensity:m}of u){const y=new N({color:h,emissive:h,emissiveIntensity:m,roughness:.2,metalness:.05}),x=new k(new A(p-.3,.015,.04),y);x.position.set(0,.01,f),this.group.add(x)}}buildPusher(e){const s=oe.getPusherTexture(e.pusherTexBase);s.wrapS=s.wrapT=Le,s.repeat.set(g.PUSHER_WIDTH/2,g.PUSHER_HEIGHT/1);const i=new N({map:s,color:16777215,roughness:.35,metalness:.65}),t=new A(g.PUSHER_WIDTH,g.PUSHER_HEIGHT,g.PUSHER_DEPTH);this.pusherMesh=new k(t,i),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,g.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh)}addPusherDetails(e){const s=g.PUSHER_WIDTH,i=g.PUSHER_HEIGHT,t=g.PUSHER_DEPTH,a=R(new A(s+.06,.14,.14),G.brassMat(e));a.position.set(0,-i/2+.07,t/2),this.pusherMesh.add(a);const n=R(new A(s+.06,.06,.06),G.brassMat(e));n.position.set(0,i/2,t/2),this.pusherMesh.add(n);for(const d of[-1,1]){const p=R(new A(.1,i,.1),G.brassMat(e));p.position.set(d*(s/2-.05),0,t/2),this.pusherMesh.add(p)}const o=new N({color:e.primaryNeon,emissive:new Y(e.primaryNeon),emissiveIntensity:.85,roughness:.2,metalness:.05}),l=R(new A(s-.12,.045,.055),o);l.position.set(0,i*.1,t/2+.03),this.pusherMesh.add(l),this.ledStripMats.push({mat:o,baseIntensity:.85,phase:Math.PI*.5,speed:1.4})}createWalls(e){const t=oe.getWallTexture(e.wallTexBase);t.wrapS=t.wrapT=Le;const a=()=>{const w=t.clone();return w.wrapS=w.wrapT=Le,w.needsUpdate=!0,new N({map:w,color:16777215,roughness:.8,metalness:.15})},n=g.OPEN_ZONE_START- -12/2,o=-12/2+n/2,l=a();l.map.repeat.set(n/2,3.5/2);const d=new A(.3,3.5,n),p=new k(d,l);p.position.set(-8/2-.3/2,3.5/2,o),this.group.add(p),this.wallMeshes.push(p);const u=a();u.map.repeat.set(n/2,3.5/2);const f=new A(.3,3.5,n),h=new k(f,u);h.position.set(g.FIELD_WIDTH/2+.3/2,3.5/2,o),this.group.add(h),this.wallMeshes.push(h);const m=a(),y=g.FIELD_WIDTH+.3*2;m.map.repeat.set(y/2,3.5/2);const x=new A(y,3.5,.3),v=new k(x,m);v.position.set(0,3.5/2,-12/2-.3/2),this.group.add(v),this.wallMeshes.push(v);const E=-12/2+n/2,C=[{y:.8,color:e.secondaryNeon,baseIntensity:.8,phase:0,speed:2.4},{y:2.1,color:e.tertiaryNeon,baseIntensity:.65,phase:1.57,speed:1.8}];for(const{y:w,color:T,baseIntensity:b,phase:H,speed:D}of C){const P=new N({color:T,emissive:T,emissiveIntensity:b,roughness:.2,metalness:.05});this.ledStripMats.push({mat:P,baseIntensity:b,phase:H,speed:D});for(const _ of[-1,1]){const z=_*(g.FIELD_WIDTH/2+.3+.02),F=new k(new A(.3*.4,.038,n),P);F.position.set(z,w,E),this.group.add(F)}const I=new k(new A(y,.038,.3*.4),P);I.position.set(0,w,-12/2-.3+.02),this.group.add(I)}}buildCabinet(e){const s=g.FIELD_WIDTH,i=g.FIELD_DEPTH,t=-i/2,a=i/2,n=R(new A(12,1,17),G.cabinetMat(e),!0);n.position.set(0,-.52,-.5),this.group.add(n);const o=R(new A(12,.1,.1),G.brassMat(e));o.position.set(0,0,a+2.55),this.group.add(o);const l=1.1,d=7.2,p=13.5,u=s/2+.75,f=-.25;for(const Q of[-1,1]){const ee=R(new A(l,d,p),G.cabinetMat(e),!0);ee.position.set(Q*u,d/2-.5,f),this.group.add(ee);const ue=R(new A(l+.08,.14,p+.08),G.brassMat(e));ue.position.set(Q*u,d-.5+.07,f),this.group.add(ue);const he=R(new A(l+.08,.1,p+.08),G.brassMat(e));he.position.set(Q*u,-.02,f),this.group.add(he);const ke=R(new A(.06,d*.75,p*.7),new N({color:e.insetColor,roughness:.9,metalness:.1}));ke.position.set(Q*(u-(l/2+.01)),d/2-.5,f),this.group.add(ke);const Ne=R(new A(.06,d*.8,.06),G.brassMat(e));Ne.position.set(Q*(u-l/2-.04),d/2-.5,f),this.group.add(Ne)}for(const Q of[-1,1]){for(const he of[-.22,.22]){const ke=new N({color:e.secondaryNeon,emissive:e.secondaryNeon,emissiveIntensity:.72,roughness:.2,metalness:.05}),Ne=he>0?Math.PI*.6:0;this.ledStripMats.push({mat:ke,baseIntensity:.72,phase:Ne,speed:1.6});const xt=R(new A(.032,d*.82,.032),ke);xt.position.set(Q*(u+he),d*.41+.04,f+p/2+.09),this.group.add(xt)}const ee=new N({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:1.5,roughness:.1,metalness:.2});this.ledStripMats.push({mat:ee,baseIntensity:1.5,phase:Q>0?.8:2,speed:2.2});const ue=R(new ht(.14,8,6),ee);ue.position.set(Q*u,d-.5+.34,f+p/2+.09),this.group.add(ue)}const h=10.5,m=1.3,y=t-1.15,x=oe.getWallTexture(e.wallTexBase).clone();x.wrapS=x.wrapT=Le,x.repeat.set(6,5),x.needsUpdate=!0;const v=new N({map:x,color:16777215,roughness:.75,metalness:.18}),E=R(new A(12,h,m),v,!0);E.position.set(0,h/2-.5,y),this.group.add(E);const C=R(new A(12.1,.15,m+.1),G.brassMat(e));C.position.set(0,h-.5+.07,y),this.group.add(C);const w=2,T=8.5,b=5.2,H=y+m/2+.06,D=oe.getScreenTexture(e.primaryNeon,e.screenBase),P=new N({color:328965,emissive:16777215,emissiveMap:D,emissiveIntensity:1.4,roughness:.45,metalness:.4}),I=R(new A(T,w,.08),P);I.position.set(0,b,y+m/2+.04),this.group.add(I);const _=R(new A(T+.24,w+.24,.06),G.brassMat(e));_.position.set(0,b,y+m/2),this.group.add(_);const z=R(new A(12.1,.08,.08),G.brassMat(e));z.position.set(0,h-.5+.18,y+m/2),this.group.add(z);const F=R(new A(12.1,.08,.08),G.brassMat(e));F.position.set(0,3.7,y+m/2),this.group.add(F);const $=new N({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:1.2,roughness:.2,metalness:.1}),U=R(new A(.06,w*.9,.06),$);U.position.set(-T/2-.18,b,H),this.group.add(U);const j=R(new A(.06,w*.9,.06),$.clone());j.position.set(T/2+.18,b,H),this.group.add(j);const te=R(new A(T+.6,.04,.04),$.clone());te.position.set(0,b-w/2-.22,H),this.group.add(te);for(let Q=0;Q<3;Q++){const ee=b+w*.28-Q*(w*.3),ue=new N({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:.45-Q*.05,roughness:.3,metalness:0,transparent:!0,opacity:.55}),he=R(new A(T-.5,.025,.01),ue);he.position.set(0,ee,H),this.group.add(he)}const xe=R(new A(12,1.1,4.5),G.cabinetMat(e),!0);xe.position.set(0,-.56,a+2.25),this.group.add(xe);const Be=R(new A(12,.12,.12),G.brassMat(e));Be.position.set(0,0,a+4.45),this.group.add(Be);const be=R(new A(12,.1,.08),G.brassMat(e));be.position.set(0,.06,a+4.5),this.group.add(be);const je=new N({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:.04,roughness:.12,metalness:.85,transparent:!0,opacity:.45}),Ge=R(new A(11.6,.02,4),je);Ge.position.set(0,.01,a+2.25),this.group.add(Ge);const Pe=new N({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:.28,roughness:.2,metalness:.1}),me=R(new A(.04,.03,4.1),Pe);me.position.set(-5.8,.02,a+2.25),this.group.add(me);const ve=R(new A(.04,.03,4.1),Pe.clone());ve.position.set(5.8,.02,a+2.25),this.group.add(ve);const S=R(new A(11.6,.03,.04),Pe.clone());S.position.set(0,.02,a+.27),this.group.add(S);const B=R(new A(12,.5,p),G.cabinetMat(e),!0);B.position.set(0,6.7,f),this.group.add(B);const V=R(new A(12,.1,.1),G.brassMat(e));V.position.set(0,6.96,a+.1),this.group.add(V);for(const Q of[-1,1]){const ee=R(new A(.09,.09,i+.5),G.brassMat(e));ee.position.set(Q*(s/2+.04),.05,f),this.group.add(ee)}const Z=R(new A(s+.2,3.6,.18),new N({color:e.pusherHousingColor,roughness:.65,metalness:.5}));Z.position.set(0,1.8,t-.08),this.group.add(Z);const J=R(new A(s-.2,.08,.08),G.brassMat(e));J.position.set(0,3.65,t+.01),this.group.add(J);const re=R(new A(s+.1,.07,.07),G.brassMat(e));re.position.set(0,.06,g.OPEN_ZONE_START),this.group.add(re);const we=new N({color:e.primaryNeon,emissive:e.primaryNeon,emissiveIntensity:1,roughness:.2,metalness:.1,transparent:!0,opacity:.88});this.collectionGlowMat=we;const ae=R(new A(s+.2,.03,.22),we);ae.position.set(0,.015,g.OPEN_ZONE_START),this.group.add(ae);const le=R(new A(s+.1,.07,.07),G.brassMat(e));le.position.set(0,.06,t+.04),this.group.add(le);const Te=i/2+g.OPEN_ZONE_START,Jt=t+Te/2;for(const Q of[-1,1]){const ee=R(new A(.07,.07,Te),G.brassMat(e));ee.position.set(Q*s/2,.06,Jt),this.group.add(ee)}const gt=g.OPEN_ZONE_START-t,es=t+gt/2;for(const Q of[-1,1]){const ee=R(new A(.08,.08,gt),G.brassMat(e));ee.position.set(Q*(s/2),3.55,es),this.group.add(ee)}const yt=new k(new A(100,.2,100),new N({color:e.groundColor,emissive:e.groundColor,emissiveIntensity:.1,roughness:.95,metalness:0}));yt.position.set(0,-.65,0),this.group.add(yt)}buildCabinetDetails(e){const s=g.FIELD_DEPTH/2,i=-12/2,t=1.1,a=7.2,n=13.5,o=g.FIELD_WIDTH/2+.75,l=-.25,d=1.3,p=i-1.15;for(const w of[-1,1]){for(let b=0;b<2;b++){const H=b===0?-.26:.16,D=a*.6,P=w*(o+H),I=l+n/2+.07,_=R(new ie(.05,.05,D,8),G.brassMat(e));_.position.set(P,D/2+.3,I),this.group.add(_);const z=4;for(let F=0;F<=z;F++){const $=.3+F*(D/z),U=R(new ie(.09,.09,.07,10),G.brassMat(e));U.position.set(P,$,I),this.group.add(U)}}const T=R(new A(.48,.1,.1),G.brassMat(e));T.position.set(w*o,a*.6+.3+.05,l+n/2+.07),this.group.add(T)}for(const w of[-1,1]){const T=w*(o-t/2-.025),b=R(new ie(.24,.24,.06,18),G.brassMat(e));b.rotation.z=Math.PI/2,b.position.set(T,a*.52,l+.8),this.group.add(b);const H=Rt(e.secondaryNeon,.55),D=R(new ie(.18,.18,.03,18),H);D.rotation.z=Math.PI/2,D.position.set(T-w*.035,a*.52,l+.8),this.group.add(D),this.gaugeMats.push(H);const P=R(new ie(.16,.16,.05,14),G.brassMat(e));P.rotation.z=Math.PI/2,P.position.set(T,a*.28,l-1.2),this.group.add(P);const I=Rt(e.primaryNeon,.45),_=R(new ie(.11,.11,.025,14),I);_.rotation.z=Math.PI/2,_.position.set(T-w*.03,a*.28,l-1.2),this.group.add(_),this.gaugeMats.push(I)}const u=3.2,f=p+d/2+.05,h=R(new Ie(.82,.1,10,28),G.brassMat(e));h.position.set(0,u,f),this.group.add(h);const m=R(new ie(.74,.74,.04,28),new N({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.55,transparent:!0,opacity:.82,roughness:.05,metalness:0}));m.rotation.x=Math.PI/2,m.position.set(0,u,f),this.group.add(m);for(let w=0;w<4;w++){const T=w/4*Math.PI*2+Math.PI/4,b=R(new ie(.045,.045,.06,8),G.brassMat(e));b.rotation.x=Math.PI/2,b.position.set(Math.cos(T)*.88,u+Math.sin(T)*.88,f+.03),this.group.add(b)}const y=R(new A(5.5,.05,.05),new N({color:e.secondaryNeon,emissive:e.secondaryNeon,emissiveIntensity:.9,roughness:.2,metalness:.1}));y.position.set(0,u+1.12,f),this.group.add(y);{const w=t+.12,T=.12,b=n+.12;for(const H of[-1,1])for(const D of[.33,.66]){const P=R(new A(w,T,b),G.brassMat(e));P.position.set(H*o,D*a-.5,l),this.group.add(P)}}const x=s+4.45,v=R(new A(1.3,.16,.05),new N({color:e.insetColor,roughness:.9,metalness:.1}));v.position.set(0,-.08,x),this.group.add(v);const E=R(new A(1.5,.3,.04),G.brassMat(e));E.position.set(0,-.08,x-.01),this.group.add(E);const C=R(new A(.9,.045,.06),new N({color:0,roughness:1,metalness:0}));C.position.set(0,-.06,x+.01),this.group.add(C)}addSideGuardMeshes(e){const t=g.FIELD_DEPTH/2-g.OPEN_ZONE_START,a=g.OPEN_ZONE_START+t/2;for(const n of[-1,1]){const o=n*(g.FIELD_WIDTH/2+.1),l=new A(.2,2,t),d=new N({color:4500223,emissive:4500223,emissiveIntensity:.55,transparent:!0,opacity:.55,roughness:.2,metalness:.1}),p=new k(l,d);p.position.set(o,2/2,a),e.add(p),this.sideGuardMeshes.push(p)}}removeSideGuardMeshes(e){for(const s of this.sideGuardMeshes)e.remove(s),s.geometry.dispose(),s.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}triggerCollectionFlash(){this.collectionFlashRemaining=.3}update(e,s=.016){if(this.collectionGlowMat)if(this.collectionFlashRemaining>0){const i=this.collectionFlashRemaining/.3;this.collectionGlowMat.emissiveIntensity=.55+i*1.45,this.collectionFlashRemaining-=s}else this.collectionGlowMat.emissiveIntensity=.35+Math.sin(e*3.8)*.2;for(let i=0;i<this.gaugeMats.length;i++){const t=i%2===0?.55:.45,a=.3,n=i%2===0?2.1:1.5,o=i*1.1;this.gaugeMats[i].emissiveIntensity=t+Math.sin(e*n+o)*a}for(const{mat:i,baseIntensity:t,phase:a,speed:n}of this.ledStripMats)i.emissiveIntensity=t+Math.sin(e*n+a)*(t*.28)}}class bi{constructor(e,s,i,t){r(this,"physicsWorld");r(this,"physicsSync");r(this,"collisionHandler");r(this,"pusher");r(this,"medalSpawner");r(this,"itemSpawner");r(this,"dropZone");r(this,"gimmickManager");r(this,"fieldMesh");r(this,"time",0);r(this,"antiJamTimer",0);r(this,"getMedalQuotaMultiplier",()=>1);r(this,"sideGuardActive",!1);r(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=s,this.inventory=i,this.physicsWorld=new Xs,this.physicsSync=new Ks,this.collisionHandler=new Js,this.pusher=new ei,this.medalSpawner=new di,this.itemSpawner=new yi,this.dropZone=new hi,this.gimmickManager=new pi,this.fieldMesh=new G(t)}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}rebuildFieldMesh(e){oe.disposeAll(),this.fieldMesh.rebuild(e)}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const s=this.medalSpawner.getQuotaValue(e),i=this.medalSpawner.getMedalPosition(e);this.medalSpawner.markForRemoval(e);const t=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(s,t),L.emit("medal:collected",{count:s,x:i.x,y:i.y,z:i.z})}),this.collisionHandler.onItemCollected(e=>{const s=this.itemSpawner.getDefinitionId(e);if(!s)return;const i=this.itemSpawner.getItemPosition(e);this.itemSpawner.markForRemoval(e);const t=this.inventory.addItem(s),a=Ae(s);a&&(this.quotaManager.addItem(a.quotaValue),L.emit("item:collected",{itemId:s,instanceId:t.instanceId,quotaValue:a.quotaValue,x:i.x,y:i.y,z:i.z}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,s=(g.FIELD_DEPTH/2+g.OPEN_ZONE_START)/2,i=-12/2+s,t=e.RigidBodyDesc.fixed().setTranslation(0,-.05,i),a=this.physicsWorld.createRigidBody(t),n=e.ColliderDesc.cuboid(g.FIELD_WIDTH/2,.05,s).setFriction(.15).setRestitution(.05);this.physicsWorld.createCollider(n,a);const o=3.5,l=.2,d=g.OPEN_ZONE_START- -12/2,p=-12/2+d/2,u=e.RigidBodyDesc.fixed().setTranslation(-8/2-l/2,o/2,p),f=this.physicsWorld.createRigidBody(u);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(l/2,o/2,d/2),f);const h=e.RigidBodyDesc.fixed().setTranslation(g.FIELD_WIDTH/2+l/2,o/2,p),m=this.physicsWorld.createRigidBody(h);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(l/2,o/2,d/2),m);const y=8,x=.5,v=e.RigidBodyDesc.fixed().setTranslation(0,y/2,-12/2-x/2),E=this.physicsWorld.createRigidBody(v);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(g.FIELD_WIDTH/2+x,y/2,x/2),E)}startStage(e,s){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,s,this.physicsWorld,this.sceneManager);const t=new xi(e*1e3+s).pickRandom(g.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(t,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+s+7)}spawnInitialMedals(){const e=-6+g.PUSHER_DEPTH-g.PUSHER_RANGE,s=g.OPEN_ZONE_START-g.MEDAL_RADIUS,i=g.FIELD_WIDTH/2-g.MEDAL_RADIUS,t=s-e,a=e;for(let h=0;h<g.INITIAL_FIELD_MEDALS;h++){const m=(Math.random()*2-1)*i,y=a+Math.random()*t,x=g.MEDAL_THICKNESS/2+Math.random()*.5,v=Math.random()<.25?"large":"normal";this.medalSpawner.spawn(m,x,y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,v)}const n=-12/2+g.MEDAL_RADIUS,l=e-g.MEDAL_RADIUS-n,d=6,p=Math.ceil(g.INITIAL_PUSHER_MEDALS/d),u=i*2/(d-1),f=l/Math.max(p-1,1);for(let h=0;h<g.INITIAL_PUSHER_MEDALS;h++){const m=h%d,y=Math.floor(h/d),x=-i+m*u+(Math.random()-.5)*.15,v=n+y*f+(Math.random()-.5)*.15,E=g.PUSHER_HEIGHT+g.MEDAL_THICKNESS/2+.8+y*.25;this.medalSpawner.spawn(x,E,v,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,s){const i=g.FIELD_DEPTH/2-.5,t=2,n=-(12+(-s+1)/2*7);this.medalSpawner.spawn(e,t,i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:6,z:n})}update(e){this.time+=e,this.fieldMesh.update(this.time,e);const s=4,i=Math.min(e,1/15);if(this.physicsWorld.setTimestep(i/s),this.collisionHandler.processEvents(this.physicsWorld,s),this.medalSpawner.cleanupFallen(g.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,a=>{const n=this.medalSpawner.getQuotaValue(a),o=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(n,o);const l=this.medalSpawner.getMedalPosition(a);L.emit("medal:collected",{count:n,x:l.x,y:l.y,z:l.z})}),this.itemSpawner.cleanupFallen(g.MEDAL_CLEANUP_Y,a=>{const n=this.itemSpawner.getDefinitionId(a);if(!n)return;const o=this.itemSpawner.getItemPosition(a),l=this.inventory.addItem(n),d=Ae(n);d&&(this.quotaManager.addItem(d.quotaValue),L.emit("item:collected",{itemId:n,instanceId:l.instanceId,quotaValue:d.quotaValue,x:o.x,y:o.y,z:o.z}))}),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld),this.antiJamTimer+=e,this.antiJamTimer>=2.5){this.antiJamTimer=0;const a=-12/2+g.PUSHER_DEPTH;this.medalSpawner.nudgeDeadZone(a,g.OPEN_ZONE_START)}const t=this.pusher.update(e);this.fieldMesh.updatePusher(t),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}shakeAllMedals(e=3){this.medalSpawner.shakeAll(e)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,s=2,i=.2,t=g.FIELD_DEPTH/2-g.OPEN_ZONE_START,a=g.OPEN_ZONE_START+t/2;for(const n of[-1,1]){const o=n*(g.FIELD_WIDTH/2+i/2),l=e.RigidBodyDesc.fixed().setTranslation(o,s/2,a),d=this.physicsWorld.createRigidBody(l);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(i/2,s/2,t/2),d),this.sideGuardBodies.push(d)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class vi{constructor(){r(this,"current",0);r(this,"target",0);r(this,"phase",1);r(this,"stage",1);r(this,"reached",!1)}startStage(e,s){this.phase=e,this.stage=s,this.current=0,this.reached=!1,this.target=this.calcTarget(e,s),L.emit("stage:started",{phase:e,stage:s,quotaTarget:this.target}),L.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,s){const i=(e-1)*g.STAGES_PER_PHASE+s;return Math.ceil(g.BASE_QUOTA*Math.pow(g.QUOTA_MULTIPLIER,i-1))}addMedals(e,s=1){this.current+=e*s,L.emit("quota:updated",{current:this.current,target:this.target}),!this.reached&&this.current>=this.target&&(this.reached=!0,L.emit("quota:reached",{phase:this.phase,stage:this.stage}))}addItem(e,s=1){this.current+=e*s,L.emit("quota:updated",{current:this.current,target:this.target}),!this.reached&&this.current>=this.target&&(this.reached=!0,L.emit("quota:reached",{phase:this.phase,stage:this.stage}))}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class wi{constructor(e){r(this,"phase",1);r(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===g.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(M.PLAYING)}clearCurrentStage(){L.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(M.STAGE_CLEAR),this.stage===g.STAGES_PER_PHASE&&L.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<g.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(M.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function Ti(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class Si{constructor(){r(this,"items",[])}addItem(e){const s={instanceId:Ti(),definitionId:e,collectedAt:Date.now()};return this.items.push(s),s}removeItem(e){const s=this.items.findIndex(i=>i.instanceId===e);return s===-1?!1:(this.items.splice(s,1),!0)}getAll(){return[...this.items]}getDefinition(e){const s=this.items.find(i=>i.instanceId===e);if(s)return Ae(s.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,s)=>{const i=Ae(s.definitionId);return e+((i==null?void 0:i.sellPrice)??0)},0)}}class Ei{constructor(){r(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});L.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),L.on("item:collected",()=>{this.data.totalItemsCollected++}),L.on("stage:cleared",({phase:e,stage:s})=>{this.data.phase=e,this.data.stage=s})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class Mi{calculate(e,s){const i=s.bestPhase*3+s.bestStage,a=e.phase*3+e.stage>i;return s.updateBest(e.phase,e.stage),s.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:a,bestPhase:s.bestPhase,bestStage:s.bestStage}}}var q=(c=>(c.Gold="Gold",c.Alchemy="Alchemy",c.Throw="Throw",c.Guard="Guard",c))(q||{}),W=(c=>(c.Common="Common",c.Rare="Rare",c.Epic="Epic",c))(W||{});const jt=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:q.Gold,rarity:W.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:q.Gold,rarity:W.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:q.Gold,rarity:W.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:q.Gold,rarity:W.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:q.Gold,rarity:W.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:q.Alchemy,rarity:W.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:q.Alchemy,rarity:W.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:q.Alchemy,rarity:W.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:q.Alchemy,rarity:W.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:q.Alchemy,rarity:W.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:q.Throw,rarity:W.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:q.Throw,rarity:W.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:q.Throw,rarity:W.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:q.Throw,rarity:W.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:q.Throw,rarity:W.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:q.Guard,rarity:W.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:q.Guard,rarity:W.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:q.Guard,rarity:W.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:q.Guard,rarity:W.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:q.Guard,rarity:W.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function Pt(c){return jt.find(e=>e.id===c)}class Ci{constructor(){r(this,"owned",[])}addSkill(e,s){this.owned.push({definitionId:e,acquiredAt:s}),L.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let s=1;for(const i of this.owned){const t=Pt(i.definitionId);if(t)for(const a of t.effects)a.type===e&&(s*=a.value)}return s}getEffectSum(e){let s=0;for(const i of this.owned){const t=Pt(i.definitionId);if(t)for(const a of t.effects)a.type===e&&(s+=a.value)}return s}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const kt={[W.Common]:60,[W.Rare]:30,[W.Epic]:10};class Ii{pickChoices(e,s,i){const t=new ut(i),a=new Set(s.map(d=>d.definitionId)),n=jt.filter(d=>!a.has(d.id));if(n.length===0)return[];const o=[],l=new Set;for(let d=0;d<e&&o.length<n.length;d++){const p=Object.keys(kt),u=p.map(y=>kt[y]),f=t.weightedPick(p,u),h=n.filter(y=>y.rarity===f&&!l.has(y.id));if(h.length===0){const y=n.filter(v=>!l.has(v.id));if(y.length===0)break;const x=y[Math.floor(t.next()*y.length)];o.push(x),l.add(x.id);continue}const m=h[Math.floor(t.next()*h.length)];o.push(m),l.add(m.id)}return o}}const ft=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:160,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:100,durationMs:3e4,color:"#ffaa00"},{id:"medal_shower",name:"メダルシャワー",description:"即座に20枚のメダルが降ってくる",price:120,durationMs:0,color:"#ff60a0"},{id:"earthquake",name:"地震",description:"フィールドのメダルを激しく揺らして詰まりを解消",price:80,durationMs:0,color:"#ff8844"}];function Lt(c){return ft.find(e=>e.id===c)}class _i{constructor(){r(this,"shopMoney");r(this,"medals");r(this,"sellMultiplier",1);r(this,"ownedActiveItems",new Map);this.shopMoney=g.INITIAL_SHOP_MONEY,this.medals=g.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,s){const i=s.getDefinition(e);if(!i)return 0;const t=Math.floor(i.sellPrice*this.sellMultiplier);return s.removeItem(e),this.shopMoney+=t,t}buyMedals(e){const s=e*g.MEDAL_BUY_PRICE;return this.shopMoney<s?!1:(this.shopMoney-=s,this.medals+=e,!0)}buyActiveItem(e){const s=ft.find(i=>i.id===e);return!s||this.shopMoney<s.price?!1:(this.shopMoney-=s.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const s=this.ownedActiveItems.get(e)??0;return s<=0?!1:(s===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,s-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,s])=>({id:e,count:s}))}reset(){this.shopMoney=g.INITIAL_SHOP_MONEY,this.medals=g.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let Dt=!1;function Ai(){if(Dt)return;Dt=!0;const c=document.createElement("style");c.textContent=`
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
  `,document.head.appendChild(c)}class Ri{constructor(e){r(this,"el");r(this,"titleEl");r(this,"onStartCallbacks",[]);r(this,"onSettingsCallbacks",[]);r(this,"hideTimer",null);Ai(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `;const s=document.createElement("div");s.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;";for(let f=0;f<22;f++){const h=document.createElement("div"),m=14+Math.random()*32,y=Math.random()*100,x=Math.random()*100,v=Math.random()*10,E=10+Math.random()*10,C=.07+Math.random()*.13;h.style.cssText=`
        position: absolute;
        width: ${m}px; height: ${m}px;
        border-radius: 50%;
        border: 2px solid var(--t-primary);
        left: ${y}%;
        top: ${x}%;
        opacity: ${C};
        animation: titleCoinFloat ${E}s ease-in-out infinite;
        animation-delay: -${v}s;
      `,s.appendChild(h)}this.el.appendChild(s);const i=document.createElement("div");i.style.cssText=`
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
    `,i.appendChild(o);const l=document.createElement("button");l.style.cssText=`
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
    `,l.textContent="START",l.addEventListener("mouseenter",()=>{l.style.background="var(--t-primary)",l.style.color="#000",l.style.transform="scale(1.04)"}),l.addEventListener("mouseleave",()=>{l.style.background="linear-gradient(135deg, var(--t-primary-faint) 0%, var(--t-primary-faint) 40%, rgba(255,255,255,0.12) 50%, var(--t-primary-faint) 60%, var(--t-primary-faint) 100%)",l.style.backgroundSize="300% auto",l.style.color="var(--t-primary)",l.style.transform=""}),l.addEventListener("click",()=>{this.onStartCallbacks.forEach(f=>f())}),i.appendChild(l);const d=document.createElement("button");d.style.cssText=`
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
    `,d.textContent="⚙ SETTINGS",d.addEventListener("mouseenter",()=>{d.style.borderColor="var(--t-primary)",d.style.color="var(--t-primary)",d.style.background="var(--t-primary-faint)"}),d.addEventListener("mouseleave",()=>{d.style.borderColor="var(--t-border-faint)",d.style.color="var(--t-text-dim)",d.style.background="transparent"}),d.addEventListener("click",()=>{this.onSettingsCallbacks.forEach(f=>f())}),i.appendChild(d);const p=document.createElement("div");p.style.cssText=`
      width: clamp(100px, 20vw, 180px);
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--t-border-faint), transparent);
      margin-top: clamp(14px, 2.5vh, 20px);
    `,i.appendChild(p),this.el.appendChild(i);const u=document.createElement("div");u.style.cssText=`
      position: absolute;
      bottom: 12px;
      right: 16px;
      font-size: 0.6rem;
      color: var(--t-text-dim);
      opacity: 0.4;
      letter-spacing: 0.05em;
    `,u.textContent="v0.1.0",this.el.appendChild(u),e.appendChild(this.el)}applyTheme(e){}onStart(e){this.onStartCallbacks.push(e)}onSettings(e){this.onSettingsCallbacks.push(e)}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},320)}}class Pi{constructor(e){r(this,"el");r(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px;
      left: 16px;
      font-size: clamp(0.9rem, 2vw, 1.2rem);
      color: var(--t-primary);
      text-shadow: 0 0 8px var(--t-shadow-glow);
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      padding: clamp(5px, 1vh, 8px) clamp(10px, 1.5vw, 16px);
      border-radius: 12px;
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      transition: transform 0.25s ease, color 0.25s ease;
    `,e.appendChild(this.el)}update(e){const s=e!==this.prevMedals,i=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,s&&(i?this.el.style.color="#ff4444":this.el.style.color="var(--t-primary)",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let Ht=!1;function ki(){if(Ht)return;Ht=!0;const c=document.createElement("style");c.textContent=`
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
  `,document.head.appendChild(c)}class Li{constructor(e){r(this,"container");r(this,"bar");r(this,"label");r(this,"reached",!1);r(this,"urgent",!1);r(this,"danger",!1);ki(),this.container=document.createElement("div"),this.container.style.cssText=`
      position: absolute;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      width: min(calc(100vw - 220px), 280px);
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      padding: clamp(5px, 1vh, 8px) clamp(10px, 1.5vw, 16px);
      border-radius: 12px;
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: center;
    `,this.label=document.createElement("div"),this.label.style.cssText="font-size: clamp(0.65rem, 1.5vw, 0.8rem); color: var(--t-text-dim); margin-bottom: 4px;",this.label.textContent="QUOTA: 0 / 30";const s=document.createElement("div");s.style.cssText="position: relative; width: 100%;";const i=document.createElement("div");i.style.cssText=`
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
      `,s.appendChild(n)}s.appendChild(i),this.container.appendChild(this.label),this.container.appendChild(s),e.appendChild(this.container)}update(e,s){const i=e/s,t=Math.min(i,1)*100;this.bar.style.width=`${t}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${s}`,e>=s&&!this.reached?(this.reached=!0,this.urgent=!1,this.bar.style.background="linear-gradient(90deg, var(--t-success), var(--t-primary))",this.bar.style.boxShadow="0 0 14px var(--t-shadow-glow)",this.bar.style.animation="barPulse 0.6s ease infinite",this.container.style.animation=""):e<s&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, var(--t-bar-start), var(--t-bar-end))",this.bar.style.boxShadow="",this.bar.style.animation=""),!this.reached&&i>=.75&&!this.urgent?(this.urgent=!0,this.container.style.animation="quotaUrgent 0.9s ease-in-out infinite"):(this.reached||i<.75)&&this.urgent&&(this.urgent=!1,this.container.style.animation="")}setDanger(e){e!==this.danger&&(this.danger=e,e?(this.urgent=!1,this.container.style.animation="quotaDanger 0.45s ease-in-out infinite",this.label.style.color="#ff6666"):(this.container.style.animation="",this.label.style.color="var(--t-text-dim)"))}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class Di{constructor(e){r(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: clamp(0.7rem, 1.5vw, 0.9rem);
      color: var(--t-text-dim);
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      padding: clamp(5px, 1vh, 8px) clamp(10px, 1.5vw, 16px);
      border-radius: 12px;
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: right;
    `,e.appendChild(this.el)}update(e,s){const i=document.createElement("span");i.style.cssText="color: var(--t-primary); font-weight: bold;",i.textContent=String(e),this.el.innerHTML="";const t=document.createTextNode("Phase ");this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(document.createElement("br")),this.el.appendChild(document.createTextNode(`Stage ${s} / 3`))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let Ot=!1;function Hi(){if(Ot)return;Ot=!0;const c=document.createElement("style");c.textContent=`
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
  `,document.head.appendChild(c)}class Oi{constructor(e){r(this,"el");r(this,"medalCounter");r(this,"quotaBar");r(this,"phaseIndicator");r(this,"throwHint");r(this,"inventoryPanel");r(this,"activeItemPanel");r(this,"countdownEl");r(this,"feverBannerEl");r(this,"comboEl");r(this,"edgeGlowEl");r(this,"onUseActiveCallbacks",[]);r(this,"hideTimer",null);r(this,"jackpotHudEl");r(this,"jackpotBarEl");r(this,"comboHideTimer",null);r(this,"aimIndicatorEl");r(this,"stageCountEl");this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new Pi(this.el),this.quotaBar=new Li(this.el),this.phaseIndicator=new Di(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      font-size: clamp(0.7rem, 1.8vw, 0.85rem);
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
      top: 12px;
      left: max(80px, clamp(80px, 9vw, 110px));
      text-align: center;
      pointer-events: none;
      background: rgba(255,40,40,0.18);
      border: 1px solid rgba(255,80,80,0.5);
      border-radius: 8px;
      padding: clamp(2px, 0.5vh, 4px) clamp(6px, 1vw, 10px);
    `,this.countdownEl.innerHTML=`
      <div style="font-size:0.55rem;color:#ff8888;letter-spacing:0.15em;margin-bottom:1px;">MEDAL EMPTY</div>
      <div class="cd-number" style="font-size: 1.4rem; font-weight: bold; color: #ff4444;
        text-shadow: 0 0 8px #ff0000; line-height: 1.1;">10</div>
    `,this.el.appendChild(this.countdownEl),this.edgeGlowEl=document.createElement("div"),this.edgeGlowEl.style.cssText=`
      position: absolute; inset: 0;
      border: 4px solid var(--t-primary);
      border-radius: 4px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s ease;
      animation: edgeGlow 0.8s ease-in-out infinite;
      box-shadow: inset 0 0 40px rgba(255,215,0,0.12), 0 0 40px rgba(255,215,0,0.25);
    `,this.el.appendChild(this.edgeGlowEl),this.feverBannerEl=document.createElement("div"),this.feverBannerEl.style.cssText=`
      position: absolute; top: clamp(44px, 7vh, 56px); left: 50%; transform: translateX(-50%);
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
      top: clamp(54px, 9vh, 70px);
      right: 16px;
      width: clamp(100px, 15vw, 130px);
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--t-border-faint);
      border-radius: 10px;
      padding: clamp(4px, 0.8vh, 6px) clamp(6px, 1vw, 10px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.4);
      pointer-events: none;
      display: none;
    `,this.jackpotHudEl.innerHTML=`
      <div style="font-size:0.62rem;color:var(--t-primary);letter-spacing:0.15em;margin-bottom:5px;font-weight:700;">⚡ JACKPOT</div>
      <div style="width:100%;height:8px;background:var(--t-track-bg);border-radius:4px;overflow:hidden;">
        <div class="jp-bar" style="height:100%;width:0%;background:linear-gradient(90deg,var(--t-secondary),var(--t-primary));border-radius:4px;transition:width 0.3s ease;box-shadow:0 0 6px var(--t-primary);"></div>
      </div>
      <div class="jp-label" style="font-size:0.65rem;color:var(--t-text-dim);text-align:center;margin-top:4px;letter-spacing:0.06em;">あと 35</div>
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
      position: fixed;
      bottom: 0;
      width: 2px;
      height: 38vh;
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
    `,this.aimIndicatorEl.appendChild(s),this.el.appendChild(this.aimIndicatorEl),e.appendChild(this.el),Hi()}update(e,s,i,t,a){this.medalCounter.update(e),this.quotaBar.update(s,i),this.phaseIndicator.update(t,a),this.throwHint.style.display=e<=0?"none":""}showFloatingText(e,s="var(--t-primary)",i){let t="2rem";const a=parseInt(e.replace("+",""),10);isNaN(a)||(a>=5?t="2.6rem":a>=2?t="2.2rem":t="1.6rem");const n=i!==void 0?Math.max(15,Math.min(85,i)):50,o=document.createElement("div");o.style.cssText=`
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
    `,t.textContent="▸ ITEMS",this.inventoryPanel.appendChild(t);for(const a of e){const n=Ae(a.definitionId);if(!n)continue;const o=String(n.rarity),l=s[o]??"#9999aa",d=i[o]??"◇",p=document.createElement("div");p.style.cssText=`
        background: rgba(0,0,0,0.70);
        border: 1px solid ${l}33;
        border-left: 3px solid ${l};
        border-radius: 0 6px 6px 0;
        padding: 4px 8px 4px 6px;
        margin-bottom: 3px;
        font-size: 0.7rem;
        color: var(--t-text-bright);
        display: flex;
        align-items: center;
        gap: 5px;
        backdrop-filter: blur(4px);
      `,p.innerHTML=`
        <span style="color:${l};font-size:0.75rem;flex-shrink:0">${d}</span>
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${n.name}</span>
      `,this.inventoryPanel.appendChild(p)}}updateActiveItems(e){if(this.activeItemPanel.innerHTML="",e.length===0)return;const s=document.createElement("div");s.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",s.textContent="Active Items",this.activeItemPanel.appendChild(s);for(const i of e){const t=document.createElement("button"),a=i.remainingMs??0,n=a>0,o=n?` (${Math.ceil(a/1e3)}s)`:"";t.style.cssText=`
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
      `,t.innerHTML=`<strong>${i.name}</strong> x${i.count}${o}`,t.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(l=>l(i.id))}),this.activeItemPanel.appendChild(t)}}showFever(e,s=2){this.edgeGlowEl.style.opacity="1",this.feverBannerEl.style.display="flex";const i=this.feverBannerEl.querySelector(".fever-timer-bar");i&&(i.style.animation="none",i.style.width="100%",i.offsetWidth,i.style.animation=`feverBarShrink ${e}ms linear forwards`);const t=this.feverBannerEl.querySelector(".fever-mult");t&&(t.textContent=`×${s.toFixed(1)} QUOTA BONUS`),this.flashScreen("rgba(255,215,0,0.22)")}hideFever(){this.edgeGlowEl.style.opacity="0",this.feverBannerEl.style.display="none",this.flashScreen("rgba(100,100,200,0.18)")}showCombo(e){if(e<2){this.hideCombo();return}this.comboHideTimer!==null&&(clearTimeout(this.comboHideTimer),this.comboHideTimer=null),this.comboEl.style.display="block",this.comboEl.textContent=`COMBO ×${e}`;const s=e>=10?"3.0rem":e>=5?"2.4rem":"1.9rem";this.comboEl.style.fontSize=s,this.comboEl.style.animation="none",this.comboEl.offsetWidth,this.comboEl.style.animation="comboIn 0.25s ease forwards";const i=Math.min(e*20,200);this.comboEl.style.filter=`hue-rotate(${i}deg)`,this.comboHideTimer=setTimeout(()=>{this.hideCombo(),this.comboHideTimer=null},3e3)}hideCombo(){this.comboHideTimer!==null&&(clearTimeout(this.comboHideTimer),this.comboHideTimer=null),this.comboEl.style.display="none"}flashScreen(e){const s=document.createElement("div");s.style.cssText=`
      position: absolute; inset: 0; background: ${e};
      pointer-events: none; border-radius: 4px;
      animation: flashOverlay 0.5s ease-out forwards;
    `,this.el.appendChild(s),setTimeout(()=>s.remove(),500)}showStageCountdown(e,s,i){const t=["3","2","1","GO!"];let a=0;const n=()=>{if(a>=t.length){this.stageCountEl.style.display="none",i();return}const o=t[a]==="GO!";this.stageCountEl.textContent=t[a],this.stageCountEl.style.display="block",this.stageCountEl.style.color=o?"var(--t-success)":"var(--t-primary)",this.stageCountEl.style.textShadow=o?"0 0 30px var(--t-success), 0 0 60px var(--t-success)":"0 0 30px var(--t-primary), 0 0 60px var(--t-primary)",this.stageCountEl.style.animation="none",this.stageCountEl.offsetWidth,this.stageCountEl.style.animation=o?"stageGoText 0.7s ease-out forwards":"stageCountNum 0.85s ease-in-out forwards",a++,setTimeout(n,o?700:850)};this.showFloatingText(`PHASE ${e} — STAGE ${s}`,"var(--t-text-dim)"),setTimeout(n,400)}showAim(e){if(isNaN(e)){this.aimIndicatorEl.style.opacity="0";return}const s=(e+1)/2*100;this.aimIndicatorEl.style.left=`${s}vw`,this.aimIndicatorEl.style.opacity="0.85"}flashAim(){this.aimIndicatorEl.style.opacity="1",this.aimIndicatorEl.style.transform="translateX(-50%) scaleY(1.15)",setTimeout(()=>{this.aimIndicatorEl.style.transform="translateX(-50%) scaleY(1)",this.aimIndicatorEl.style.opacity="0.85"},120)}hideAim(){this.aimIndicatorEl.style.opacity="0"}onUseActive(e){this.onUseActiveCallbacks.push(e)}updateJackpot(e,s){this.jackpotHudEl.style.display="block";const i=Math.min(e/s,1)*100;this.jackpotBarEl.style.width=`${i}%`;const t=Math.max(0,Math.ceil(s-e)),a=this.jackpotHudEl.querySelector(".jp-label");a&&(t<=5?(a.textContent=`あと ${t}!! 🔥`,a.style.color="var(--t-primary)",a.style.fontWeight="700"):t<=12?(a.textContent=`あと ${t}!`,a.style.color="var(--t-secondary)",a.style.fontWeight="600"):(a.textContent=`あと ${t}`,a.style.color="var(--t-text-dim)",a.style.fontWeight="")),i>=80?(this.jackpotHudEl.style.boxShadow="0 0 16px var(--t-primary), 0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-primary)"):i>=60?(this.jackpotHudEl.style.boxShadow="0 0 8px var(--t-secondary), 0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-secondary)"):(this.jackpotHudEl.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-border-faint)")}resetJackpot(e){this.jackpotBarEl.style.width="0%";const s=this.jackpotHudEl.querySelector(".jp-label");s&&(s.textContent=`あと ${e}`,s.style.color="var(--t-text-dim)",s.style.fontWeight=""),this.jackpotHudEl.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-border-faint)"}showCountdown(e){const s=this.countdownEl.querySelector(".cd-number");s&&(s.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}let Bt=!1;function Bi(){if(Bt)return;Bt=!0;const c=document.createElement("style");c.textContent=`
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
  `,document.head.appendChild(c)}class Gi{constructor(e){r(this,"el");r(this,"onContinueCallbacks",[]);r(this,"onSkipCallbacks",[]);r(this,"continueBtn");r(this,"shopBtn");r(this,"hideTimer",null);r(this,"countUpTimer",null);Bi(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,this.continueBtn=document.createElement("button"),this.shopBtn=document.createElement("button"),e.appendChild(this.el)}show(e,s,i,t,a){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.countUpTimer!==null&&(clearInterval(this.countUpTimer),this.countUpTimer=null),this.el.innerHTML="";const n=document.createElement("div"),o=i?"PHASE CLEAR!":"STAGE CLEAR!",l=i?"var(--t-primary)":"var(--t-success)";n.style.cssText=`
      font-size: clamp(1.8rem, 5vw, 3rem);
      font-weight: 900;
      color: ${l};
      letter-spacing: 0.15em;
      text-shadow: 0 0 20px ${l}, 0 0 40px ${l};
      animation: stageResultBounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      margin-bottom: clamp(14px, 3vh, 24px);
      text-align: center;
    `,n.textContent=o,this.el.appendChild(n),this.spawnCoinBurst();const d=document.createElement("div");d.style.cssText=`
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
    `;const p=document.createElement("div");p.style.cssText="color: var(--t-text-dim); font-size: clamp(0.65rem, 1.3vw, 0.8rem); letter-spacing: 0.15em; margin-bottom: 10px;",p.textContent=`PHASE ${e}  —  STAGE ${s}`;const u=document.createElement("div");u.style.cssText="margin-bottom: 8px;";const f=document.createElement("div");f.style.cssText="color: var(--t-text-dim); font-size: clamp(0.65rem, 1.2vw, 0.75rem); letter-spacing: 0.1em; margin-bottom: 4px;",f.textContent="QUOTA";const h=document.createElement("div");h.style.cssText=`
      font-size: clamp(1.5rem, 3.5vw, 2rem); font-weight: bold;
      color: ${l};
      text-shadow: 0 0 12px ${l};
    `,h.textContent=`0 / ${a}`;const m=Math.floor(t/a*100),y=document.createElement("div");y.style.cssText="color: var(--t-text-dim); font-size: 0.85rem; margin-top: 4px;",y.textContent=`${m}%`,u.appendChild(f),u.appendChild(h),u.appendChild(y);const x=Math.floor(t);let v=0;const E=Math.max(1,Math.floor(x/30));this.countUpTimer=setInterval(()=>{v=Math.min(v+E,x),h.textContent=`${v} / ${a}`,v>=x&&this.countUpTimer!==null&&(clearInterval(this.countUpTimer),this.countUpTimer=null)},40);const C=m>=140?3:m>=110?2:1,w=document.createElement("div");w.style.cssText="display: flex; justify-content: center; gap: 8px; margin-top: 16px;";for(let P=1;P<=3;P++){const I=document.createElement("span");I.style.cssText=`
        font-size: 1.8rem;
        opacity: ${P<=C?"1":"0.2"};
        color: ${P<=C?"#ffd700":"#666"};
        animation: starPop 0.35s ${.5+P*.12}s cubic-bezier(0.34, 1.56, 0.64, 1) both;
      `,I.textContent="★",w.appendChild(I)}d.appendChild(p),d.appendChild(u),d.appendChild(w),this.el.appendChild(d);const T=document.createElement("div");T.style.cssText="display: flex; gap: 12px; animation: stageStatsFadeUp 0.4s 0.35s ease-out both; flex-wrap: wrap; justify-content: center;",i||(this.continueBtn=this.createButton("NEXT STAGE →","var(--t-tertiary)",!1,()=>{this.onContinueCallbacks.forEach(P=>P())}),T.appendChild(this.continueBtn));const b=i?"GO TO SHOP →":"SHOP (skip)",H=i?"var(--t-primary)":"#ff8800",D=i;this.shopBtn=this.createButton(b,H,D,()=>{this.onSkipCallbacks.forEach(P=>P())}),T.appendChild(this.shopBtn),this.el.appendChild(T),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}spawnCoinBurst(){const e=[{x:0,y:-130},{x:92,y:-92},{x:130,y:0},{x:92,y:92},{x:0,y:130},{x:-92,y:92},{x:-130,y:0},{x:-92,y:-92}];for(const s of e){const i=document.createElement("div");i.style.cssText=`
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
    `,a.textContent=e,a.addEventListener("mouseenter",()=>{a.style.background=i?s:`${s}22`,a.style.transform="translateY(-2px)",a.style.boxShadow=`0 4px 20px ${s}66`}),a.addEventListener("mouseleave",()=>{a.style.background=i?s:"transparent",a.style.transform="translateY(0)",a.style.boxShadow=`0 0 12px ${s}44`}),a.addEventListener("click",t),a}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.countUpTimer!==null&&(clearInterval(this.countUpTimer),this.countUpTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let Gt=!1;function Ni(){if(Gt)return;Gt=!0;const c=document.createElement("style");c.textContent=`
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
  `,document.head.appendChild(c)}class zi{constructor(e){r(this,"el");r(this,"onRetryCallbacks",[]);r(this,"onTitleCallbacks",[]);r(this,"hideTimer",null);Ni(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="";for(let f=0;f<8;f++){const h=document.createElement("div"),m=4+Math.random()*8;h.style.cssText=`
        position: absolute;
        width: ${m}px; height: ${m}px;
        border-radius: 50%;
        background: rgba(255,50,50,${.06+Math.random()*.1});
        left: ${Math.random()*100}%;
        top: ${Math.random()*100}%;
        pointer-events: none;
      `,this.el.appendChild(h)}const s=document.createElement("div");s.style.cssText=`
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
    `,t.textContent="GAME OVER",s.appendChild(t),e.isNewBest){const f=document.createElement("div");f.style.cssText=`
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
      `,f.textContent="★ NEW BEST! ★",s.appendChild(f)}const a=document.createElement("div");a.style.cssText=`
      width: 100%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,60,60,0.4), transparent);
      margin: clamp(8px, 1.5vh, 12px) 0;
    `,s.appendChild(a);const n=document.createElement("div");n.style.cssText=`
      width: 100%;
      margin: 0 0 clamp(16px, 3vh, 24px);
      display: flex;
      flex-direction: column;
      gap: 6px;
    `;const o=[{icon:"🏆",label:"Reached",value:`Phase ${e.phase} · Stage ${e.stage}`,highlight:!1},{icon:"🪙",label:"Medals Collected",value:String(e.totalMedalsCollected),highlight:!0},{icon:"✨",label:"Items Collected",value:String(e.totalItemsCollected),highlight:!1},{icon:"📈",label:"Best Run",value:`Phase ${e.bestPhase} · Stage ${e.bestStage}`,highlight:!1}];o.forEach((f,h)=>{const m=document.createElement("div");m.style.cssText=`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: clamp(5px, 0.8vh, 8px) clamp(10px, 1.5vw, 14px);
        background: rgba(255,255,255,0.03);
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.05);
        animation: statRowIn 0.35s ${.15+h*.08}s ease-out both;
      `,m.innerHTML=`
        <span style="display:flex;align-items:center;gap:8px;color:var(--t-text-dim);font-size:clamp(0.7rem,1.3vw,0.82rem);">
          <span>${f.icon}</span>
          <span>${f.label}</span>
        </span>
        <span style="font-size:clamp(0.75rem,1.5vw,0.9rem);font-weight:bold;color:${f.highlight?"var(--t-primary)":"var(--t-text-bright)"}">
          ${f.value}
        </span>
      `,n.appendChild(m)}),s.appendChild(n);const l=document.createElement("div"),d=.15+o.length*.08;l.style.cssText=`
      display: flex; gap: 12px; width: 100%;
      animation: fadeInUp 0.4s ${d}s ease forwards;
      opacity: 0;
    `;const p=document.createElement("button");p.style.cssText=`
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
    `,p.textContent="TRY AGAIN",p.addEventListener("mouseenter",()=>{p.style.background="#ff4444",p.style.color="#000",p.style.transform="scale(1.03)"}),p.addEventListener("mouseleave",()=>{p.style.background="rgba(255,68,68,0.15)",p.style.color="#ff6666",p.style.transform=""}),p.addEventListener("click",()=>this.onRetryCallbacks.forEach(f=>f()));const u=document.createElement("button");u.style.cssText=`
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
    `,u.textContent="← TITLE",u.addEventListener("mouseenter",()=>{u.style.background="rgba(255,255,255,0.07)",u.style.borderColor="var(--t-primary)",u.style.color="var(--t-primary)"}),u.addEventListener("mouseleave",()=>{u.style.background="transparent",u.style.borderColor="var(--t-border-faint)",u.style.color="var(--t-text-dim)"}),u.addEventListener("click",()=>this.onTitleCallbacks.forEach(f=>f())),l.appendChild(p),l.appendChild(u),s.appendChild(l),this.el.appendChild(s),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onRetry(e){this.onRetryCallbacks.push(e)}onTitle(e){this.onTitleCallbacks.push(e)}}let Nt=!1;function $i(){if(Nt)return;Nt=!0;const c=document.createElement("style");c.textContent=`
    @keyframes skillCardSlideUp {
      0%   { opacity: 0; transform: translateY(40px) scale(0.92); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes skillTitlePulse {
      0%,100% { text-shadow: 0 0 20px #aa44ff, 0 0 40px #aa44ff; }
      50%      { text-shadow: 0 0 30px #cc66ff, 0 0 60px #cc66ff, 0 0 80px #aa44ff; }
    }
  `,document.head.appendChild(c)}const Fi={Gold:"💰",Alchemy:"⚗️",Throw:"🎯",Guard:"🛡️"},Ui={Gold:"#ffd700",Alchemy:"#00ff88",Throw:"#ff8800",Guard:"#4488ff"},Wi={Common:"★",Uncommon:"★★",Rare:"★★★",Epic:"★★★★",Legendary:"★★★★★"},Vi={Common:"#aaaaaa",Uncommon:"#44cc77",Rare:"#4488ff",Epic:"#aa44ff",Legendary:"#ffaa00"};class Yi{constructor(e){r(this,"el");r(this,"onSelectCallbacks",[]);r(this,"hideTimer",null);$i(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,i.textContent="✦ CHOOSE A SKILL ✦";const t=document.createElement("p");t.style.cssText="color: var(--t-text-dim); font-size: 0.82rem; letter-spacing: 0.08em;",t.textContent="Select one permanent upgrade for your run",s.appendChild(i),s.appendChild(t),this.el.appendChild(s);const a=document.createElement("div");a.style.cssText="display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; max-width: 760px;",e.forEach((n,o)=>{a.appendChild(this.createCard(n,o))}),this.el.appendChild(a),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}createCard(e,s){const i=Ui[e.tag]??"#aaaacc",t=Fi[e.tag]??"⭐",a=Vi[e.rarity]??"#aaaaaa",n=Wi[e.rarity]??"★",o=document.createElement("div");o.style.cssText=`
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
    `;const l=document.createElement("div");l.style.cssText=`
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, ${i}22, ${i}08);
      border-bottom: 1px solid ${i}33;
      font-size: 3rem;
    `,l.textContent=t;const d=document.createElement("div");d.style.cssText="padding: 16px 18px;";const p=document.createElement("div");p.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;";const u=document.createElement("span");u.style.cssText=`
      font-size: 0.65rem;
      color: ${i};
      background: ${i}22;
      border: 1px solid ${i}44;
      border-radius: 4px;
      padding: 2px 7px;
      letter-spacing: 0.08em;
      font-weight: bold;
    `,u.textContent=e.tag.toUpperCase();const f=document.createElement("span");f.style.cssText=`font-size: 0.7rem; color: ${a};`,f.textContent=n,p.appendChild(u),p.appendChild(f);const h=document.createElement("div");h.style.cssText=`
      font-size: 1rem;
      color: var(--t-text-bright);
      font-weight: bold;
      margin-bottom: 8px;
      line-height: 1.2;
    `,h.textContent=e.name;const m=document.createElement("div");return m.style.cssText=`
      font-size: 0.75rem;
      color: var(--t-text-dim);
      line-height: 1.5;
    `,m.textContent=e.description,d.appendChild(p),d.appendChild(h),d.appendChild(m),o.appendChild(l),o.appendChild(d),o.addEventListener("mouseenter",()=>{o.style.borderColor=i,o.style.transform="translateY(-6px) scale(1.02)",o.style.boxShadow=`0 12px 40px rgba(0,0,0,0.6), 0 0 24px ${i}44`,l.style.background=`linear-gradient(135deg, ${i}44, ${i}18)`}),o.addEventListener("mouseleave",()=>{o.style.borderColor=`${i}55`,o.style.transform="translateY(0) scale(1)",o.style.boxShadow="0 4px 24px rgba(0,0,0,0.5)",l.style.background=`linear-gradient(135deg, ${i}22, ${i}08)`}),o.addEventListener("click",()=>{this.onSelectCallbacks.forEach(y=>y(e.id))}),o}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const at=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class qi{constructor(e){r(this,"el");r(this,"moneyEl");r(this,"inventoryEl");r(this,"onBuyMedalsCallbacks",[]);r(this,"onSellCallbacks",[]);r(this,"onContinueCallbacks",[]);r(this,"onBuyActiveCallbacks",[]);r(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      overflow-y: auto;
      overflow-x: hidden;
      font-size: clamp(0.75rem, 1.5vw, 0.9rem);
      opacity: 0;
      transition: opacity 280ms ease;
    `;const s=document.createElement("div");s.style.cssText=`
      max-width: 900px;
      margin: 0 auto;
      padding: clamp(12px, 2.5vh, 20px) clamp(16px, 3vw, 24px);
    `,this.el.appendChild(s);const i=document.createElement("div");i.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: clamp(10px, 2vh, 16px); flex-wrap: wrap; gap: 8px;";const t=document.createElement("h2");t.style.cssText="font-size: clamp(1.2rem, 3vw, 1.8rem); color: var(--t-primary); letter-spacing: 0.1em;",t.textContent="🏪 SHOP",this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText=`
      color: var(--t-primary);
      font-size: clamp(0.9rem, 2vw, 1.2rem);
      font-weight: bold;
      background: var(--t-panel-bg);
      border: 1px solid var(--t-border-faint);
      border-radius: 20px;
      padding: clamp(4px, 0.8vh, 6px) clamp(12px, 2vw, 16px);
      backdrop-filter: blur(8px);
    `;const a=document.createElement("button");a.style.cssText=`
      padding: clamp(7px, 1.2vh, 10px) clamp(16px, 3vw, 28px);
      background: var(--t-success);
      border: 2px solid var(--t-success);
      color: #000;
      cursor: pointer;
      font-size: clamp(0.7rem, 1.5vw, 0.9rem);
      font-family: inherit;
      border-radius: 8px;
      font-weight: bold;
      letter-spacing: 0.08em;
      transition: all 0.2s;
    `,a.textContent="NEXT PHASE →",a.addEventListener("mouseenter",()=>{a.style.transform="scale(1.04)",a.style.boxShadow="0 0 16px var(--t-success)"}),a.addEventListener("mouseleave",()=>{a.style.transform="",a.style.boxShadow=""}),a.addEventListener("click",()=>this.onContinueCallbacks.forEach(n=>n())),i.appendChild(t),i.appendChild(this.moneyEl),i.appendChild(a),this.inventoryEl=document.createElement("div"),this.inventoryEl.style.cssText="margin-top: 16px;",s.appendChild(i),s.appendChild(this.inventoryEl),e.appendChild(this.el)}show(e,s,i=[]){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.moneyEl.textContent=`💰 ${e} G`,this.renderContent(e,s,i),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}renderContent(e,s,i){this.inventoryEl.innerHTML="";const t=document.createElement("div");t.style.cssText="margin-bottom: 28px;";const a=document.createElement("h3");a.style.cssText="color: var(--t-primary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",a.textContent="🪙 BUY MEDALS",t.appendChild(a);const n=document.createElement("div");n.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const o=[{count:10,price:50,coins:"🪙🪙🪙"},{count:30,price:130,coins:"🪙🪙🪙🪙🪙",badge:"POPULAR"},{count:100,price:400,coins:"🪙🪙🪙🪙🪙🪙🪙",badge:"BEST VALUE"}];for(const x of o){const v=e>=x.price,E=document.createElement("div");if(E.style.cssText=`
        position: relative;
        padding: 16px 20px;
        ${at}
        background: ${v?"rgba(0,0,0,0.5)":"rgba(0,0,0,0.3)"};
        border: 2px solid ${v?"var(--t-primary)":"#444"};
        cursor: ${v?"pointer":"default"};
        min-width: 130px;
        text-align: center;
        transition: transform 0.15s, box-shadow 0.15s;
        opacity: ${v?"1":"0.5"};
      `,x.badge){const b=document.createElement("div");b.style.cssText=`
          position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
          background: var(--t-primary); color: #000;
          font-size: 0.6rem; font-weight: bold;
          padding: 2px 8px; border-radius: 10px;
          letter-spacing: 0.08em; white-space: nowrap;
        `,b.textContent=x.badge,E.appendChild(b)}const C=document.createElement("div");C.style.cssText="font-size: 1.1rem; margin-bottom: 6px;",C.textContent=x.coins;const w=document.createElement("div");w.style.cssText=`color: ${v?"var(--t-primary)":"#666"}; font-size: 1.1rem; font-weight: bold; margin-bottom: 4px;`,w.textContent=`${x.count} medals`;const T=document.createElement("div");T.style.cssText=`color: ${v?"var(--t-text-dim)":"#555"}; font-size: 0.8rem;`,T.textContent=`${x.price} G`,E.appendChild(C),E.appendChild(w),E.appendChild(T),v&&(E.addEventListener("mouseenter",()=>{E.style.transform="translateY(-3px)",E.style.boxShadow="0 8px 32px rgba(0,0,0,0.5), 0 0 16px rgba(200,131,26,0.3)"}),E.addEventListener("mouseleave",()=>{E.style.transform="translateY(0)",E.style.boxShadow=""}),E.addEventListener("click",()=>{this.onBuyMedalsCallbacks.forEach(b=>b(x.count))})),n.appendChild(E)}t.appendChild(n),this.inventoryEl.appendChild(t);const l=document.createElement("hr");l.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(l);const d=document.createElement("div");d.style.cssText="margin-bottom: 28px;";const p=document.createElement("h3");p.style.cssText="color: var(--t-tertiary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",p.textContent="✨ ACTIVE ITEMS  —  use during game",d.appendChild(p);const u=document.createElement("div");u.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const f=new Map(i.map(x=>[x.id,x.count]));for(const x of ft){const v=e>=x.price,E=f.get(x.id)??0,C=document.createElement("div");C.style.cssText=`
        padding: 14px;
        ${at}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${v?x.color:"#555"};
        min-width: 160px;
        transition: transform 0.15s, box-shadow 0.15s;
      `;const w=document.createElement("div");w.style.cssText=`color: ${x.color}; font-size: 0.95rem; font-weight: bold; margin-bottom: 4px;`,w.textContent=x.name;const T=document.createElement("div");T.style.cssText="color: var(--t-text-dim); font-size: 0.75rem; margin-bottom: 8px;",T.textContent=x.description;const b=document.createElement("div");b.style.cssText="color: #88cc88; font-size: 0.75rem; margin-bottom: 8px;",b.textContent=`Owned: ${E}`;const H=document.createElement("button");H.style.cssText=`
        padding: 6px 14px;
        background: transparent;
        border: 1px solid ${v?x.color:"#555"};
        color: ${v?x.color:"#555"};
        cursor: ${v?"pointer":"default"};
        font-size: 0.8rem;
        border-radius: 4px;
        transition: background 0.2s;
      `,H.textContent=`Buy ${x.price} G`,v&&(H.addEventListener("mouseenter",()=>H.style.background=`${x.color}22`),H.addEventListener("mouseleave",()=>H.style.background="transparent"),C.addEventListener("mouseenter",()=>{C.style.transform="translateY(-2px)",C.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),C.addEventListener("mouseleave",()=>{C.style.transform="translateY(0)",C.style.boxShadow=""}),H.addEventListener("click",()=>{this.onBuyActiveCallbacks.forEach(D=>D(x.id))})),C.appendChild(w),C.appendChild(T),C.appendChild(b),C.appendChild(H),u.appendChild(C)}d.appendChild(u),this.inventoryEl.appendChild(d);const h=document.createElement("hr");h.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(h);const m=document.createElement("div"),y=document.createElement("h3");if(y.style.cssText="color: var(--t-text-dim); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",y.textContent="🎁 YOUR ITEMS  —  click to sell",m.appendChild(y),s.length===0){const x=document.createElement("p");x.style.cssText="color: var(--t-text-dim); opacity: 0.5;",x.textContent="No items collected yet.",m.appendChild(x)}else{const x=document.createElement("div");x.style.cssText="display: flex; flex-wrap: wrap; gap: 12px;";for(const v of s){const E=Ae(v.definitionId);if(!E)continue;const C=document.createElement("div");C.style.cssText=`
          width: 160px;
          padding: 14px;
          ${at}
          background: rgba(0,0,0,0.5);
          border: 1px solid var(--t-track-bg);
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `;const T={Common:"#aaaaaa",Uncommon:"#44cc77",Rare:"#4488ff",Epic:"#aa44ff",Legendary:"#ffaa00"}[E.rarity]??"#aaaaaa";C.innerHTML=`
          <div style="color:var(--t-text-bright);font-size:0.9rem;margin-bottom:4px;font-weight:bold;">${E.name}</div>
          <div style="color:${T};font-size:0.7rem;margin-bottom:6px;">${E.rarity}</div>
          <div style="color:var(--t-primary);font-size:0.85rem;">Sell: ${E.sellPrice} G</div>
        `,C.style.borderColor=`${T}55`,C.addEventListener("mouseenter",()=>{C.style.borderColor="var(--t-primary)",C.style.transform="translateY(-2px)",C.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),C.addEventListener("mouseleave",()=>{C.style.borderColor="var(--t-track-bg)",C.style.transform="translateY(0)",C.style.boxShadow=""}),C.addEventListener("click",()=>{this.onSellCallbacks.forEach(b=>b(v.instanceId))}),x.appendChild(C)}m.appendChild(x)}this.inventoryEl.appendChild(m)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}const Qi={name:"cyber",displayName:"CYBER NEON",ui:{bgOverlay:"rgba(10,10,30,0.62)",bgOverlayDark:"rgba(10,5,20,0.88)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.3)",secondary:"#00ffcc",tertiary:"#00aaff",success:"#00ff88",textDim:"#aaaacc",textBright:"#ffffff",borderFaint:"rgba(255,255,255,0.13)",panelBg:"rgba(255,255,255,0.05)",trackBg:"#333355",barStart:"#4444ff",barEnd:"#00ffaa",shadowGlow:"rgba(255,215,0,0.67)"},scene:{background:1979506,fogColor:1979506,cabinetColor:2236734,brassColor:9474232,brassRoughness:.15,brassMetalness:.92,insetColor:657950,screenBase:2080,screenEmissive:4160,groundColor:2437216,primaryNeon:16766720,secondaryNeon:65484,tertiaryNeon:4482815,starColor:8952319,gridColorA:1714782,gridColorB:924218,pusherHousingColor:2631754,bloomStrength:.5,bloomThreshold:.88,bloomRadius:.4,fieldTexBase:"#2a2a4e",pusherTexBase:"#3a3a6e",wallTexBase:"#1a1a3e"},lights:{ambientColor:5793960,ambientIntensity:1.1,fillColor:4210943,fillIntensity:.5,warmPointColor:16765056,warmPointIntensity:1.2,coolPointColor:4482815,coolPointIntensity:.8}},Zt={name:"steampunk",displayName:"STEAMPUNK",ui:{bgOverlay:"rgba(24,14,4,0.62)",bgOverlayDark:"rgba(18,10,2,0.88)",primary:"#ff9820",primaryFaint:"rgba(255,152,32,0.35)",secondary:"#ffb830",tertiary:"#d46820",success:"#ffb020",textDim:"#c8a870",textBright:"#ffeec0",borderFaint:"rgba(255,152,32,0.30)",panelBg:"rgba(255,152,32,0.08)",trackBg:"#3a2010",barStart:"#a05010",barEnd:"#ff9820",shadowGlow:"rgba(255,152,32,0.75)"},scene:{background:4859924,fogColor:4859924,cabinetColor:3941906,brassColor:12619840,brassRoughness:.35,brassMetalness:.78,insetColor:1182724,screenBase:1575936,screenEmissive:5251072,groundColor:3940368,primaryNeon:16750624,secondaryNeon:16758832,tertiaryNeon:13920288,starColor:16760896,gridColorA:6962196,gridColorB:3809288,pusherHousingColor:3678228,bloomStrength:.55,bloomThreshold:.86,bloomRadius:.5,fieldTexBase:"#2e1e0c",pusherTexBase:"#3a2210",wallTexBase:"#261608"},lights:{ambientColor:10514480,ambientIntensity:1.3,fillColor:10510384,fillIntensity:.6,warmPointColor:16748592,warmPointIntensity:.95,coolPointColor:9455640,coolPointIntensity:.6}},ji={name:"royal",displayName:"ROYAL CASINO",ui:{bgOverlay:"rgba(8,4,24,0.65)",bgOverlayDark:"rgba(5,2,16,0.90)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.28)",secondary:"#00e8ff",tertiary:"#ff28a0",success:"#40ff90",textDim:"#b090d0",textBright:"#fff8e0",borderFaint:"rgba(255,215,0,0.22)",panelBg:"rgba(255,215,0,0.06)",trackBg:"#1a083a",barStart:"#8040ff",barEnd:"#ffd700",shadowGlow:"rgba(255,215,0,0.78)"},scene:{background:1181244,fogColor:1181244,cabinetColor:1969720,brassColor:13934608,brassRoughness:.08,brassMetalness:.98,insetColor:656416,screenBase:524320,screenEmissive:3805344,groundColor:2757712,primaryNeon:16766720,secondaryNeon:59647,tertiaryNeon:16722080,starColor:16769152,gridColorA:2624080,gridColorB:1312048,pusherHousingColor:1706032,bloomStrength:.7,bloomThreshold:.8,bloomRadius:.5,fieldTexBase:"#12082a",pusherTexBase:"#1a0c34",wallTexBase:"#0e0620"},lights:{ambientColor:7352480,ambientIntensity:1.2,fillColor:5251264,fillIntensity:.6,warmPointColor:16765056,warmPointIntensity:1.3,coolPointColor:6295807,coolPointIntensity:1.2}},Xt={cyber:Qi,steampunk:Zt,royal:ji};let zt=!1;function Zi(){if(zt)return;zt=!0;const c=document.createElement("style");c.textContent=`
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
  `,document.head.appendChild(c)}class Xi{constructor(e){r(this,"el");r(this,"onVolumeChangeCallbacks",[]);r(this,"onThemeChangeCallbacks",[]);r(this,"onCloseCallbacks",[]);r(this,"hideTimer",null);r(this,"themeBtns",new Map);Zi(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `;const i=document.createElement("h2");i.style.cssText="font-size: 1.6rem; color: var(--t-primary); margin-bottom: 32px; letter-spacing: 0.2em; text-align: center;",i.textContent="SETTINGS",s.appendChild(i);const t=document.createElement("div");t.style.cssText="margin-bottom: 32px;";const a=document.createElement("div");a.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",a.textContent="VOLUME",t.appendChild(a);const n=[{label:"Master",type:"master",value:e.masterVolume},{label:"BGM",type:"bgm",value:e.bgmVolume},{label:"SFX",type:"sfx",value:e.sfxVolume}];for(const m of n){const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;";const x=document.createElement("div");x.style.cssText="font-size: 0.85rem; color: var(--t-text-bright); width: 52px; flex-shrink: 0;",x.textContent=m.label;const v=document.createElement("input");v.type="range",v.min="0",v.max="1",v.step="0.05",v.value=String(m.value),v.className="settings-slider",v.style.cssText="flex: 1;";const E=document.createElement("div");E.style.cssText="font-size: 0.8rem; color: var(--t-primary); width: 36px; text-align: right; flex-shrink: 0;",E.textContent=`${Math.round(m.value*100)}%`,v.addEventListener("input",()=>{const C=parseFloat(v.value);E.textContent=`${Math.round(C*100)}%`,this.onVolumeChangeCallbacks.forEach(w=>w(m.type,C))}),y.appendChild(x),y.appendChild(v),y.appendChild(E),t.appendChild(y)}s.appendChild(t);const o=document.createElement("hr");o.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",s.appendChild(o);const l=document.createElement("div");l.style.cssText="margin-bottom: 32px;";const d=document.createElement("div");d.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",d.textContent="THEME",l.appendChild(d);const p=document.createElement("div");p.style.cssText="display: flex; gap: 10px; flex-wrap: wrap;";const u=["royal","cyber","steampunk"];for(const m of u){const y=m===e.theme,x=document.createElement("button");x.style.cssText=`
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
      `,x.textContent=Xt[m].displayName,x.addEventListener("click",()=>{this.selectTheme(m),this.onThemeChangeCallbacks.forEach(v=>v(m))}),this.themeBtns.set(m,x),p.appendChild(x)}l.appendChild(p),s.appendChild(l);const f=document.createElement("hr");f.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",s.appendChild(f);const h=document.createElement("button");h.style.cssText=`
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
    `,h.textContent="CLOSE",h.addEventListener("mouseenter",()=>{h.style.borderColor="var(--t-primary)",h.style.color="var(--t-primary)"}),h.addEventListener("mouseleave",()=>{h.style.borderColor="var(--t-border-faint)",h.style.color="var(--t-text-dim)"}),h.addEventListener("click",()=>{this.onCloseCallbacks.forEach(m=>m())}),s.appendChild(h),this.el.appendChild(s)}selectTheme(e){this.themeBtns.forEach((s,i)=>{const t=i===e;s.style.background=t?"var(--t-primary)":"transparent",s.style.color=t?"var(--t-bg-overlay-dark)":"var(--t-primary)",s.style.fontWeight=t?"bold":"normal"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onVolumeChange(e){this.onVolumeChangeCallbacks.push(e)}onThemeChange(e){this.onThemeChangeCallbacks.push(e)}onClose(e){this.onCloseCallbacks.push(e)}}const X=["🥇","⭐","💎","🎰"];let $t=!1;function Ki(){if($t)return;$t=!0;const c=document.createElement("style");c.textContent=`
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
  `,document.head.appendChild(c)}class Ji{constructor(e){r(this,"el");r(this,"reelEls",[]);r(this,"reelWrapperEls",[]);r(this,"resultEl");r(this,"hideTimer",null);Ki(),this.el=document.createElement("div"),this.el.style.cssText=`
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
      `,this.reelWrapperEls.push(n);const o=document.createElement("div");o.style.cssText="text-align: center; line-height: 1; user-select: none;",o.textContent=X[0],this.reelEls.push(o),n.appendChild(o),i.appendChild(n)}this.el.appendChild(i);const t=document.createElement("div");t.style.cssText=`
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
    `,this.el.appendChild(this.resultEl),e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.resultEl.textContent="",this.resultEl.style.animation="",this.reelWrapperEls.forEach(t=>{t.style.boxShadow="",t.style.animation=""}),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"});const s=Math.random()*100;let i;if(s<15){const t=X[Math.floor(Math.random()*X.length)];i={type:"triple",medals:40,symbols:[t,t,t]}}else if(s<50){const t=X[Math.floor(Math.random()*X.length)];let a=X[Math.floor(Math.random()*X.length)];for(;a===t;)a=X[Math.floor(Math.random()*X.length)];i={type:"double",medals:15,symbols:[t,t,a]}}else{let t,a,n;do t=X[Math.floor(Math.random()*X.length)],a=X[Math.floor(Math.random()*X.length)],n=X[Math.floor(Math.random()*X.length)];while(t===a||a===n||t===n);i={type:"miss",medals:0,symbols:[t,a,n]}}this._spinReels(i,e)}_spinReels(e,s){this.reelEls.forEach(t=>{t.textContent=X[Math.floor(Math.random()*X.length)]});const i=(t,a,n)=>new Promise(o=>{const l=this.reelEls[t],d=setInterval(()=>{l.textContent=X[Math.floor(Math.random()*X.length)]},75);setTimeout(()=>{clearInterval(d),l.textContent=a,this.reelWrapperEls[t].style.boxShadow="0 0 16px var(--t-primary)",this.reelWrapperEls[t].style.animation="reelFlash 0.4s ease",o()},n)});i(0,e.symbols[0],1e3).then(()=>i(1,e.symbols[1],500)).then(()=>i(2,e.symbols[2],500)).then(()=>{let t="",a="var(--t-text-dim)";e.type==="triple"?(t=`🎉 JACKPOT!  +${e.medals} MEDALS!`,a="var(--t-primary)",this.reelWrapperEls.forEach(n=>{n.style.boxShadow="0 0 28px var(--t-primary), inset 0 0 12px rgba(255,215,0,0.2)"})):e.type==="double"?(t=`✓ MATCH!  +${e.medals} MEDALS!`,a="var(--t-success)"):(t="MISS...  Try again next time!",a="var(--t-text-dim)"),this.resultEl.textContent=t,this.resultEl.style.color=a,this.resultEl.style.animation="none",this.resultEl.offsetWidth,this.resultEl.style.animation="chanceResultPop 0.4s ease forwards",setTimeout(()=>{this.hide(),s(e)},1800)})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class ea{constructor(e){r(this,"titleScreen");r(this,"gameScreen");r(this,"stageResultScreen");r(this,"resultScreen");r(this,"skillSelectScreen");r(this,"shopScreen");r(this,"settingsScreen");r(this,"chanceScreen");this.titleScreen=new Ri(e),this.gameScreen=new Oi(e),this.stageResultScreen=new Gi(e),this.resultScreen=new zi(e),this.skillSelectScreen=new Yi(e),this.shopScreen=new qi(e),this.settingsScreen=new Xi(e),this.chanceScreen=new Ji(e),L.on("state:changed",({to:s})=>{this.handleStateChange(s)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case M.TITLE:this.titleScreen.show();break;case M.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case M.STAGE_CLEAR:break;case M.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,s,i,t,a,n,o){this.gameScreen.update(e,s,i,t,a),n&&this.gameScreen.updateInventory(n),o&&this.gameScreen.updateActiveItems(o)}}const ta=300,sa=380;class ia{constructor(e){r(this,"throwCallbacks",[]);r(this,"aimCallbacks",[]);r(this,"enabled",!1);r(this,"holdTimer",null);r(this,"autoInterval",null);r(this,"autoActive",!1);r(this,"ignoreNextClick",!1);r(this,"lastNX",0);r(this,"lastNY",0);r(this,"onMouseMove",e=>{if(!this.enabled)return;const s=e.clientX/window.innerWidth*2-1;this._fireAim(s)});r(this,"onMouseLeave",()=>{this._fireAim(NaN)});r(this,"onClick",e=>{if(!this.enabled)return;if(this.ignoreNextClick){this.ignoreNextClick=!1;return}const s=e.clientX/window.innerWidth*2-1,i=e.clientY/window.innerHeight*2-1;this._fire(s,i)});r(this,"onTouch",e=>{if(!this.enabled)return;e.preventDefault();const s=e.changedTouches[0];if(!s)return;const i=s.clientX/window.innerWidth*2-1,t=s.clientY/window.innerHeight*2-1;this._fire(i,t)});r(this,"onPointerDown",e=>{!this.enabled||e.button!==0||(this.lastNX=e.clientX/window.innerWidth*2-1,this.lastNY=e.clientY/window.innerHeight*2-1,this.holdTimer=setTimeout(()=>{this.autoActive=!0,this.autoInterval=setInterval(()=>{if(!this.enabled){this._stopAutoThrow();return}this._fire(this.lastNX,this.lastNY)},sa)},ta))});r(this,"onPointerUp",e=>{this.autoActive&&(this.ignoreNextClick=!0),this._stopAutoThrow()});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1}),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointercancel",this.onPointerUp),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}enable(){this.enabled=!0}disable(){this.enabled=!1,this._stopAutoThrow(),this._fireAim(NaN)}onThrow(e){return this.throwCallbacks.push(e),()=>{const s=this.throwCallbacks.indexOf(e);s!==-1&&this.throwCallbacks.splice(s,1)}}onAim(e){return this.aimCallbacks.push(e),()=>{const s=this.aimCallbacks.indexOf(e);s!==-1&&this.aimCallbacks.splice(s,1)}}_fire(e,s){this.throwCallbacks.forEach(i=>i(e,s))}_fireAim(e){this.aimCallbacks.forEach(s=>s(e))}_stopAutoThrow(){this.holdTimer!==null&&(clearTimeout(this.holdTimer),this.holdTimer=null),this.autoInterval!==null&&(clearInterval(this.autoInterval),this.autoInterval=null),this.autoActive=!1}dispose(){this._stopAutoThrow(),this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("mouseleave",this.onMouseLeave)}}const pe=class pe{constructor(){r(this,"ctx",null);r(this,"masterGain",null);r(this,"sfxGain",null);r(this,"bgmGain",null);r(this,"bgmPlaying",!1);r(this,"bgmNextTime",0);r(this,"bgmSchedulerTimer",null);r(this,"bgmBeatIndex",0);r(this,"bgmBPM",110)}get bgmBeat(){return 60/this.bgmBPM}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.8,this.bgmGain.connect(this.masterGain)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getSfxGain(){return this.getCtx(),this.sfxGain}getBgmGain(){return this.getCtx(),this.bgmGain}setMasterVolume(e){this.getCtx(),this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}setBgmVolume(e){this.getCtx(),this.bgmGain&&(this.bgmGain.gain.value=Math.max(0,Math.min(1,e)))}setSfxVolume(e){this.getCtx(),this.sfxGain&&(this.sfxGain.gain.value=Math.max(0,Math.min(1,e)))}playThrow(){const e=this.getCtx(),s=this.getSfxGain(),i=e.sampleRate*.12,t=e.createBuffer(1,i,e.sampleRate),a=t.getChannelData(0);for(let d=0;d<i;d++)a[d]=Math.random()*2-1;const n=e.createBufferSource();n.buffer=t;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(800,e.currentTime),o.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),o.Q.value=1.5;const l=e.createGain();l.gain.setValueAtTime(.4,e.currentTime),l.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),n.connect(o),o.connect(l),l.connect(s),n.start(),n.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),s=this.getSfxGain(),i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const t=e.createGain();t.gain.setValueAtTime(.3,e.currentTime),t.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),i.connect(t),t.connect(s),i.start(),i.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),s=this.getSfxGain();[523.25,659.25,783.99,1046.5].forEach((t,a)=>{this._playNote(e,s,"sine",t,e.currentTime+a*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),s=this.getSfxGain();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([t,a,n])=>{this._playNote(e,s,"square",t,e.currentTime+a,n,.2)})}playGameOver(){const e=this.getCtx(),s=this.getSfxGain();[440,349.23,293.66,220].forEach((t,a)=>{this._playNote(e,s,"sawtooth",t,e.currentTime+a*.22,.3,.18)})}playFeverStart(){const e=this.getCtx(),s=this.getSfxGain();[523.25,659.25,783.99,1046.5,1318.5].forEach((t,a)=>{this._playNote(e,s,"square",t,e.currentTime+a*.055,.18,.28)}),this._playNote(e,s,"sawtooth",110,e.currentTime,.35,.25)}playFeverEnd(){const e=this.getCtx(),s=this.getSfxGain();[880,659.25,523.25,392].forEach((t,a)=>{this._playNote(e,s,"sine",t,e.currentTime+a*.09,.25,.18)})}playCombo(e){const s=this.getCtx(),i=this.getSfxGain(),t=440*Math.pow(1.12,Math.min(e-2,8));this._playNote(s,i,"triangle",t,s.currentTime,.12,.22),this._playNote(s,i,"triangle",t*1.5,s.currentTime+.06,.1,.15)}playSkillSelected(){const e=this.getCtx(),s=this.getSfxGain();this._playNote(e,s,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),s=this.getSfxGain(),i=Math.floor(e.sampleRate*.02),t=e.createBuffer(1,i,e.sampleRate),a=t.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=(Math.random()*2-1)*(1-l/a.length);const n=e.createBufferSource();n.buffer=t;const o=e.createGain();o.gain.value=.35,n.connect(o),o.connect(s),n.start()}playJackpotFanfare(){const e=this.getCtx(),s=this.getSfxGain(),i=[261.63,329.63,392,523.25,659.25,783.99,1046.5];i.forEach((a,n)=>{this._playNote(e,s,"square",a,e.currentTime+n*.04,.18,.25)});const t=e.currentTime+i.length*.04+.05;this._playNote(e,s,"sine",1046.5,t,.7,.3),this._playNote(e,s,"sine",1318.5,t,.7,.22),this._playNote(e,s,"sine",1567.98,t,.7,.16),this._playNote(e,s,"sawtooth",110,e.currentTime,.45,.28)}startBGM(e=!1){this.bgmPlaying&&this.stopBGM(),this.bgmBPM=e?145:110,this.bgmPlaying=!0;const s=this.getCtx();this.bgmNextTime=s.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,s=this.getBgmGain(),i=.3,t=100;for(;this.bgmNextTime<e.currentTime+i;)this._scheduleBGMBeat(e,s,this.bgmNextTime),this.bgmNextTime+=this.bgmBeat,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),t)}_scheduleBGMBeat(e,s,i){const t=this.bgmBeatIndex,a=this.bgmBPM>120?pe.MELODY_FEVER:pe.MELODY_NORMAL,n=pe.BASS_FREQS,o=Math.floor(t/2)%n.length;t%2===0&&this._scheduleNote(e,s,"sawtooth",n[o],i,this.bgmBeat*1.8,.12);let l=t%8,d=0;for(const[y,x]of a){if(l>=d&&l<d+x){y>0&&this._scheduleNote(e,s,"square",y,i,this.bgmBeat*x*.85,.1);break}d+=x}const p=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),u=p.getChannelData(0);for(let y=0;y<u.length;y++)u[y]=(Math.random()*2-1)*(1-y/u.length);const f=e.createBufferSource();f.buffer=p;const h=e.createBiquadFilter();h.type="highpass",h.frequency.value=8e3;const m=e.createGain();m.gain.value=.04,f.connect(h),h.connect(m),m.connect(s),f.start(i)}_playNote(e,s,i,t,a,n,o){const l=e.createOscillator();l.type=i,l.frequency.value=t;const d=e.createGain();d.gain.setValueAtTime(o,a),d.gain.exponentialRampToValueAtTime(.001,a+n),l.connect(d),d.connect(s),l.start(a),l.stop(a+n)}_scheduleNote(e,s,i,t,a,n,o){this._playNote(e,s,i,t,a,n,o)}};r(pe,"BASS_FREQS",[110,98,82.41,110]),r(pe,"MELODY_NORMAL",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]),r(pe,"MELODY_FEVER",[[392,.5],[523.25,.5],[659.25,.5],[783.99,.5],[659.25,.5],[523.25,.5],[392,.5],[523.25,.5]]);let lt=pe;const Ft="yukimedal_settings",He={masterVolume:.7,bgmVolume:.8,sfxVolume:1,theme:"royal"},fe=class fe{constructor(){r(this,"_data");this._data=this._load()}static getInstance(){return fe._instance||(fe._instance=new fe),fe._instance}get masterVolume(){return this._data.masterVolume}get bgmVolume(){return this._data.bgmVolume}get sfxVolume(){return this._data.sfxVolume}get theme(){return this._data.theme}get snapshot(){return{...this._data}}setMasterVolume(e){this._data.masterVolume=Math.max(0,Math.min(1,e)),this._save()}setBgmVolume(e){this._data.bgmVolume=Math.max(0,Math.min(1,e)),this._save()}setSfxVolume(e){this._data.sfxVolume=Math.max(0,Math.min(1,e)),this._save()}setTheme(e){this._data.theme=e,this._save()}_load(){try{const e=localStorage.getItem(Ft);if(e){const s=JSON.parse(e);return{masterVolume:typeof s.masterVolume=="number"?s.masterVolume:He.masterVolume,bgmVolume:typeof s.bgmVolume=="number"?s.bgmVolume:He.bgmVolume,sfxVolume:typeof s.sfxVolume=="number"?s.sfxVolume:He.sfxVolume,theme:["cyber","steampunk","royal"].includes(s.theme)?s.theme:He.theme}}}catch{}return{...He}}_save(){try{localStorage.setItem(Ft,JSON.stringify(this._data))}catch{}}};r(fe,"_instance",null);let ct=fe;const ge=class ge{constructor(){r(this,"_currentName","steampunk");r(this,"_currentTheme",Zt);r(this,"_callbacks",[]);r(this,"_styleEl",null)}static getInstance(){return ge._instance||(ge._instance=new ge),ge._instance}get currentName(){return this._currentName}get currentTheme(){return this._currentTheme}applyTheme(e){const s=Xt[e];if(!s)return;this._styleEl||(this._styleEl=document.getElementById("theme-vars"),this._styleEl||(this._styleEl=document.createElement("style"),this._styleEl.id="theme-vars",document.head.appendChild(this._styleEl)));const i=s.ui;this._styleEl.textContent=`:root {
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
}`,this._currentName=e,this._currentTheme=s,this._callbacks.forEach(t=>t(s))}onChange(e){this._callbacks.push(e)}};r(ge,"_instance",null);let dt=ge;const de=class de{constructor(){r(this,"comboCount",0);r(this,"lastCollectMs",0);r(this,"feverEndMs",0);r(this,"_wasInFever",!1)}onMedalCollected(e){const s=Date.now();s-this.lastCollectMs<de.COMBO_WINDOW_MS?this.comboCount+=e:this.comboCount=e,this.lastCollectMs=s,L.emit("combo:updated",{count:this.comboCount}),this.comboCount>=de.COMBO_TO_FEVER&&!this.isFever&&this._triggerFever()}update(){const e=this.isFever;this._wasInFever&&!e&&(this._wasInFever=!1,this.comboCount=0,L.emit("fever:ended",void 0)),this._wasInFever=e}get isFever(){return Date.now()<this.feverEndMs}get feverRemainingMs(){return Math.max(0,this.feverEndMs-Date.now())}get comboCountValue(){return this.comboCount}reset(){this.comboCount=0,this.lastCollectMs=0,this.feverEndMs=0,this._wasInFever=!1}_triggerFever(){this.feverEndMs=Date.now()+de.FEVER_DURATION_MS,this.comboCount=0,this._wasInFever=!0,L.emit("fever:started",void 0)}};r(de,"COMBO_WINDOW_MS",5e3),r(de,"COMBO_TO_FEVER",6),r(de,"FEVER_DURATION_MS",1e4),r(de,"FEVER_SPEED_MULT",1.6);let Qe=de;const Ue=new ht(.05,4,4),aa=new ie(.06,.06,.02,8),na=new As(.06,0),oa=new ht(.028,4,4);class ra{constructor(e){r(this,"particles",[]);r(this,"flashRings",[]);r(this,"scene");this.scene=e}spawnFlashRing(e,s,i,t){const a=new Je(.1,.38,20),n=new Oe({color:t,transparent:!0,opacity:.9,side:et}),o=new k(a,n);o.position.set(e,s,i),o.rotation.x=-Math.PI/2,this.scene.add(o),this.flashRings.push({mesh:o,life:0,maxLife:.25});const l=new Je(.05,.22,16),d=new Oe({color:t,transparent:!0,opacity:.65,side:et}),p=new k(l,d);p.position.set(e,s+.01,i),p.rotation.x=-Math.PI/2,this.scene.add(p),this.flashRings.push({mesh:p,life:-.06,maxLife:.35})}spawnMedalCollect(e,s,i){this.spawnFlashRing(e,s,i,16766720);const t=14;for(let a=0;a<t;a++){const n=a<5,o=n?aa:Ue,l=new N({color:n?16763904:16766720,emissive:new Y(n?14522624:16766720),emissiveIntensity:n?.6:1,metalness:n?.9:.3,roughness:n?.2:.5,transparent:!0}),d=new k(o,l);d.position.set(e,s,i);const p=a/t*Math.PI*2,u=1.5+Math.random()*3.5,f=new se(Math.cos(p)*u*.55,2.5+Math.random()*3.5,Math.sin(p)*u*.55);this.scene.add(d),this.particles.push({mesh:d,velocity:f,life:0,maxLife:.7+Math.random()*.5})}}spawnItemCollect(e,s,i,t){this.spawnFlashRing(e,s,i,t),this.spawnFlashRing(e,s+.1,i,t);const a=new Y(t),n=24;for(let o=0;o<n;o++){const d=o%3===0?na:Ue,p=new N({color:t,emissive:a,emissiveIntensity:1,metalness:.1,roughness:.4,transparent:!0}),u=new k(d,p);u.position.set(e,s,i);const f=o/n*Math.PI*2+Math.random()*.4,h=2.5+Math.random()*3,m=new se(Math.cos(f)*h,3.5+Math.random()*2.5,Math.sin(f)*h);this.scene.add(u),this.particles.push({mesh:u,velocity:m,life:0,maxLife:1.2+Math.random()*.5})}}spawnThrow(e,s,i){for(let a=0;a<9;a++){const n=new N({color:16766720,emissive:new Y(16766720),emissiveIntensity:1,metalness:.5,roughness:.3,transparent:!0}),o=new k(Ue,n);o.position.set(e,s,i);const l=a/9*Math.PI*2,d=1.2+Math.random()*1.6,p=new se(Math.cos(l)*d*.4,2.5+Math.random()*2,Math.sin(l)*d*.2);this.scene.add(o),this.particles.push({mesh:o,velocity:p,life:0,maxLife:.35+Math.random()*.2})}}spawnCoinGlints(e,s,i,t=3){const a=[16774314,16769152,16766720,16777215,16771248];for(let n=0;n<t;n++){const o=a[Math.floor(Math.random()*a.length)],l=new N({color:o,emissive:new Y(o),emissiveIntensity:2.5,transparent:!0,opacity:.9}),d=new k(oa,l),p=(Math.random()-.5)*1.2,u=(Math.random()-.5)*1.2;d.position.set(e+p,s+Math.random()*.1,i+u);const f=Math.random()*Math.PI*2,h=.4+Math.random()*.6,m=new se(Math.cos(f)*h*.3,.8+Math.random()*1.2,Math.sin(f)*h*.3);this.scene.add(d),this.particles.push({mesh:d,velocity:m,life:0,maxLife:.35+Math.random()*.25})}}spawnJackpot(e,s,i){this.spawnFlashRing(e,s,i,16766720);const t=new Je(.3,.8,32),a=new Oe({color:16777215,transparent:!0,opacity:.85,side:et}),n=new k(t,a);n.position.set(e,s,i),n.rotation.x=-Math.PI/2,this.scene.add(n),this.flashRings.push({mesh:n,life:0,maxLife:.4});const o=30;for(let l=0;l<o;l++){const d=l/o*360,p=new Y(`hsl(${d}, 100%, 60%)`),u=l%4===0,f=new N({color:p,emissive:p,emissiveIntensity:1,metalness:u?.8:.2,roughness:.3,transparent:!0}),h=new k(Ue,f);h.position.set(e,s,i);const m=l/o*Math.PI*2+Math.random()*.3,y=3.5+Math.random()*4.5,x=new se(Math.cos(m)*y,4+Math.random()*5,Math.sin(m)*y);this.scene.add(h),this.particles.push({mesh:h,velocity:x,life:0,maxLife:1.6+Math.random()*.6})}}update(e){const i=[];for(const a of this.particles){a.life+=e;const n=a.life/a.maxLife;a.velocity.y+=-9.8*e,a.mesh.position.addScaledVector(a.velocity,e),a.mesh.rotation.x+=e*5,a.mesh.rotation.y+=e*4,a.mesh.rotation.z+=e*3;const o=Math.max(0,1-n*.65);a.mesh.scale.setScalar(o),a.mesh.material.opacity=Math.pow(1-n,1.6),n>=1&&i.push(a)}for(const a of i)this.scene.remove(a.mesh),a.mesh.material.dispose(),this.particles.splice(this.particles.indexOf(a),1);const t=[];for(const a of this.flashRings){if(a.life+=e,a.life<0)continue;const n=a.life/a.maxLife,l=1+(1-Math.pow(1-n,2.2))*3.2;a.mesh.scale.set(l,l,l);const d=a.mesh.material.opacity>.7?.9:.65;a.mesh.material.opacity=d*Math.pow(1-n,.7),n>=1&&t.push(a)}for(const a of t)this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose(),this.flashRings.splice(this.flashRings.indexOf(a),1)}clear(){for(const e of this.particles)this.scene.remove(e.mesh),e.mesh.material.dispose();this.particles=[];for(const e of this.flashRings)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.flashRings=[]}}class la{constructor(){r(this,"counter",0);r(this,"jackpotCount",0)}onQuotaAdded(e){this.counter+=e,L.emit("jackpot:progress",{current:this.counter,target:g.JACKPOT_THRESHOLD}),this.counter>=g.JACKPOT_THRESHOLD&&(this.counter-=g.JACKPOT_THRESHOLD,this.jackpotCount++,L.emit("jackpot:triggered",{count:this.jackpotCount}))}reset(){this.counter=0,this.jackpotCount=0}get progress(){return Math.min(1,this.counter/g.JACKPOT_THRESHOLD)}get current(){return this.counter}get target(){return g.JACKPOT_THRESHOLD}}const nt=1280,ot=720;function Kt(){const c=document.getElementById("ui-root");if(!c)return;const e=window.innerWidth/nt,s=window.innerHeight/ot,i=Math.min(e,s),t=Math.round((window.innerWidth-nt*i)/2),a=Math.round((window.innerHeight-ot*i)/2);c.style.width=`${nt}px`,c.style.height=`${ot}px`,c.style.transform=`translate(${t}px, ${a}px) scale(${i})`,c.style.transformOrigin="top left",c.style.inset="unset",c.style.top="0",c.style.left="0"}Kt();window.addEventListener("resize",Kt);async function ca(){const c=ct.getInstance(),e=dt.getInstance();e.applyTheme(c.theme);const s=new ks,i=new Ls,t=new Hs,a=new Ei,n=new Mi;let o=0;const l=document.getElementById("app"),d=document.getElementById("ui-root"),p=new qs(l),u=new Qs,f=new js(p),h=new Zs(p.scene);p.setCamera(u.camera);const m=e.currentTheme;p.applySceneTheme(m.scene),f.applyTheme(m.lights),h.applyTheme(m.scene);const y=new vi,x=new wi(s),v=new Si,E=new Ci,C=new Ii,w=new _i,T=new bi(p,y,v,m.scene);T.setMedalQuotaMultiplierFn(()=>E.quotaPerMedalMultiplier);const b=new ea(d),H=new ia(p.renderer.domElement);b.titleScreen.applyTheme(c.theme);const D=new Qe,P=new ra(p.scene),I=new la,_=new lt;_.setMasterVolume(c.masterVolume),_.setBgmVolume(c.bgmVolume),_.setSfxVolume(c.sfxVolume),e.onChange(S=>{p.applySceneTheme(S.scene),f.applyTheme(S.lights),h.applyTheme(S.scene),b.titleScreen.applyTheme(S.name),T.physicsWorld.initialized&&T.rebuildFieldMesh(S.scene)}),b.titleScreen.onSettings(()=>{b.settingsScreen.show(c.snapshot)}),b.settingsScreen.onClose(()=>{b.settingsScreen.hide()}),b.settingsScreen.onVolumeChange((S,B)=>{S==="master"?(c.setMasterVolume(B),_.setMasterVolume(B)):S==="bgm"?(c.setBgmVolume(B),_.setBgmVolume(B)):(c.setSfxVolume(B),_.setSfxVolume(B))}),b.settingsScreen.onThemeChange(S=>{c.setTheme(S),e.applyTheme(S)});let z=0,F=!1,$=0,U=0,j=0;b.titleScreen.onStart(()=>{s.is(M.TITLE)&&Be()}),b.stageResultScreen.onContinue(()=>{b.stageResultScreen.hide(),x.advanceStage(),be()}),b.stageResultScreen.onSkip(()=>{b.stageResultScreen.hide(),x.advancePhase(),je()}),b.shopScreen.onBuyMedals(S=>{const B=S*g.MEDAL_BUY_PRICE;w.buyMedals(S)?b.shopScreen.show(w.money,v.getAll(),w.getOwnedActiveItems()):console.log(`Not enough shop money (need ${B} G, have ${w.money} G)`)}),b.shopScreen.onSell(S=>{const B=w.sellItem(S,v);a.addShopMoney(B),b.shopScreen.show(w.money,v.getAll(),w.getOwnedActiveItems())}),b.shopScreen.onBuyActive(S=>{w.buyActiveItem(S)&&b.shopScreen.show(w.money,v.getAll(),w.getOwnedActiveItems())}),b.shopScreen.onContinue(()=>{b.shopScreen.hide(),Ge()}),b.skillSelectScreen.onSelect(S=>{E.addSkill(S,x.currentPhase),w.setSellMultiplier(E.itemSellMultiplier),b.skillSelectScreen.hide(),s.transition(M.STAGE_START),be()}),b.resultScreen.onRetry(()=>{b.resultScreen.hide(),s.transition(M.TITLE),b.titleScreen.show()}),b.resultScreen.onTitle(()=>{b.resultScreen.hide(),s.transition(M.TITLE),b.titleScreen.show()}),b.gameScreen.onUseActive(S=>{if(!s.is(M.PLAYING)||!w.useActiveItem(S))return;const B=Lt(S);if(!B)return;const V=Date.now()+B.durationMs;if(S==="side_guard")j=V,T.addSideGuardWalls(),T.fieldMesh.addSideGuardMeshes(T.fieldMesh.group);else if(S==="medal_fever")U=V;else if(S==="medal_shower"){for(let Z=0;Z<20;Z++)setTimeout(()=>{if(!s.is(M.PLAYING))return;const J=(Math.random()*2-1)*(g.FIELD_WIDTH/2-.5),re=(Math.random()-.5)*(g.FIELD_DEPTH/2);T.medalSpawner.spawn(J,5,re,T.physicsWorld,T.physicsSync,T.collisionHandler,p)},Z*150);u.shake(.12,.3)}else S==="earthquake"&&(T.shakeAllMedals(4),u.shake(.4,.5),b.gameScreen.showFloatingText("🌋 地震！","var(--t-secondary)"))}),H.onAim(S=>{s.is(M.PLAYING)?b.gameScreen.showAim(S):b.gameScreen.hideAim()}),H.onThrow((S,B)=>{if(!s.is(M.PLAYING))return;const V=S*(g.FIELD_WIDTH/2+.5),Z=E.medalThrowCount;let J=0;for(let re=0;re<Z&&w.spendMedal();re++){const we=(re-Math.floor(Z/2))*.6;T.throwMedal(V+we,B),J++}J>0&&(L.emit("medal:thrown",{count:J}),P.spawnThrow(V,2,g.FIELD_DEPTH/2-.5))}),L.on("quota:reached",()=>{s.is(M.PLAYING)&&(H.disable(),setTimeout(()=>{if(!s.is(M.PLAYING))return;const S=E.onClearBonusMedals;S>0&&w.addMedals(S);const B=Math.max(0,Math.floor((y.currentValue/y.targetValue-1)*100)),V=15+Math.min(30,B);w.addMoney(V),x.clearCurrentStage(),b.chanceScreen.show(Z=>{Z.medals>0&&(w.addMedals(Z.medals),b.gameScreen.showFloatingText(`+${Z.medals}`,"var(--t-primary)"));const J=x.isLastStageOfPhase;b.stageResultScreen.show(x.currentPhase,x.currentStage,J,y.currentValue,y.targetValue)})},500))}),L.on("medal:collected",({count:S,x:B,y:V,z:Z})=>{if(s.is(M.PLAYING)){const J=(B/g.FIELD_WIDTH*2+1)/2*72+14;b.gameScreen.showFloatingText(`+${S}`,S>=2?"var(--t-secondary)":"var(--t-primary)",J),w.addMedals(S),D.onMedalCollected(S),I.onQuotaAdded(S),P.spawnMedalCollect(B,Math.max(V,0),Z),o+=S*150+Math.floor(Math.random()*50),oe.refreshJackpot(o),T.fieldMesh.triggerCollectionFlash()}}),L.on("item:collected",({x:S,y:B,z:V})=>{s.is(M.PLAYING)&&P.spawnItemCollect(S,Math.max(B,0),V,59647)}),L.on("jackpot:progress",({current:S,target:B})=>{s.is(M.PLAYING)&&b.gameScreen.updateJackpot(S,B)}),L.on("jackpot:triggered",()=>{if(!s.is(M.PLAYING))return;w.addMedals(g.JACKPOT_MEDAL_REWARD),b.gameScreen.showFloatingText(`JACKPOT! +${g.JACKPOT_MEDAL_REWARD}`,"var(--t-primary)"),_.playJackpotFanfare(),u.shake(.35,.6),P.spawnJackpot(0,2,-2),b.gameScreen.resetJackpot(g.JACKPOT_THRESHOLD)}),L.on("fever:started",()=>{T.pusher.speedMultiplier=Qe.FEVER_SPEED_MULT;const B=1.5*(U>Date.now()?2:1)*E.quotaPerMedalMultiplier;b.gameScreen.showFever(1e4,B),_.playFeverStart(),f.setFeverMode(!0),_.startBGM(!0),u.shake(.2,.4);for(let V=0;V<12;V++)setTimeout(()=>{if(!s.is(M.PLAYING))return;const Z=(Math.random()*2-1)*(g.FIELD_WIDTH/2-.5),J=(Math.random()*2-1)*(g.FIELD_DEPTH/4);T.medalSpawner.spawn(Z,4.5,J,T.physicsWorld,T.physicsSync,T.collisionHandler,p)},V*250)}),L.on("fever:ended",()=>{T.pusher.speedMultiplier=1,b.gameScreen.hideFever(),b.gameScreen.hideCombo(),_.playFeverEnd(),f.setFeverMode(!1),_.startBGM(!1)}),L.on("combo:updated",({count:S})=>{s.is(M.PLAYING)&&S>=2&&(b.gameScreen.showCombo(S),_.playCombo(S))}),L.on("medal:thrown",()=>{_.playThrow(),b.gameScreen.flashAim()}),L.on("medal:collected",()=>_.playMedalCollected()),L.on("quota:reached",()=>_.playQuotaReached()),L.on("stage:cleared",()=>_.playStageCleared()),L.on("game:over",()=>_.playGameOver()),L.on("skill:selected",()=>_.playSkillSelected()),L.on("medal:collected",()=>u.shake(.04,.08)),L.on("quota:reached",()=>u.shake(.15,.3)),L.on("stage:cleared",()=>u.shake(.28,.5)),L.on("game:over",()=>u.shake(.5,.8)),L.on("state:changed",({to:S})=>{S===M.PLAYING?_.startBGM(!1):_.stopBGM(),u.setTitleMode(S===M.TITLE)});let te=0,xe=0;i.addUpdateFn(S=>{if(te+=S,s.is(M.PLAYING)){const B=Date.now();j>0&&B>j&&(j=0,T.removeSideGuardWalls(),T.fieldMesh.removeSideGuardMeshes(T.fieldMesh.group)),U>0&&B>U&&(U=0);const V=U>Date.now()?2:1,Z=D.isFever?1.5:1,J=V*Z;T.setMedalQuotaMultiplierFn(()=>E.quotaPerMedalMultiplier*J),T.update(S),xe+=S;const re=D.isFever?.25:.55;if(xe>=re&&T.medalSpawner.count>0){xe=0;const ae=(Math.random()-.5)*5,le=-2+(Math.random()-.5)*4,Te=D.isFever?5:2;P.spawnCoinGlints(ae,.5,le,Te)}const we=w.getOwnedActiveItems().map(ae=>{const le=Lt(ae.id),Te=ae.id==="side_guard"?Math.max(0,j-Date.now()):ae.id==="medal_fever"?Math.max(0,U-Date.now()):0;return{...ae,name:le.name,color:le.color,remainingMs:Te}});if(b.updateGameHUD(w.currentMedals,y.currentValue,y.targetValue,x.currentPhase,x.currentStage,v.getAll(),we),!F&&w.currentMedals<=0&&!y.isReached&&(F=!0,$=10,H.disable(),b.gameScreen.quotaBar.setDanger(!0)),F&&$>0){const ae=Math.ceil($);$-=S;const le=Math.ceil($);le!==ae&&le>0&&_.playCountdownTick(),$>0?b.gameScreen.showCountdown($):(b.gameScreen.hideCountdown(),Pe())}}D.update(),P.update(S),h.update(S),f.update(te),u.update(S),p.render(u.camera)});function Be(){t.incrementRuns(),w.reset(),v.clear(),E.reset(),a.reset(),x.reset(),z=0,F=!1,$=0,U=0,j=0,D.reset(),I.reset(),T.pusher.speedMultiplier=1,o=0,oe.refreshJackpot(0),s.transition(M.STAGE_START),be()}async function be(){const S=x.currentPhase,B=x.currentStage;F=!1,$=0,b.gameScreen.hideCountdown(),b.gameScreen.quotaBar.setDanger(!1),D.reset(),I.reset(),T.pusher.speedMultiplier=1,b.gameScreen.hideFever(),b.gameScreen.hideCombo(),b.gameScreen.resetJackpot(g.JACKPOT_THRESHOLD),y.startStage(S,B);try{T.physicsWorld.initialized?T.endStage():(ve(!0),await T.init(),ve(!1))}catch(V){console.error("Field init failed:",V),ve(!1);return}T.startStage(S,B),x.startCurrentStage(),b.gameScreen.showStageCountdown(S,B,()=>{s.is(M.PLAYING)&&H.enable()})}function je(){T.endStage(),s.transition(M.SHOP),b.shopScreen.show(w.money,v.getAll(),w.getOwnedActiveItems())}function Ge(){s.transition(M.SKILL_SELECT);const S=C.pickChoices(g.SKILL_CHOICES,E.getOwnedSkills(),Date.now());b.skillSelectScreen.show(S)}function Pe(){if(z>0){z--,$=0,b.gameScreen.hideCountdown(),H.enable(),F=!1;return}T.endStage();const S=n.calculate(a.snapshot,t);t.updateBest(S.phase,S.stage),s.transition(M.GAME_OVER),s.transition(M.RESULT),b.resultScreen.show(S)}const me=document.createElement("div");me.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: var(--t-bg-overlay-dark); color: var(--t-primary);
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,me.textContent="LOADING...",d.appendChild(me);function ve(S){me.style.display=S?"flex":"none"}L.on("skill:selected",()=>{z=Math.max(z,E.gameOverShields)}),i.start(),u.setTitleMode(!0),s.transition(M.TITLE),b.titleScreen.show(),console.log("YukiMedal initialized")}ca().catch(console.error);
