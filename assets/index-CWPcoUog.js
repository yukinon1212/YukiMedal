var mt=Object.defineProperty;var ft=(l,e,t)=>e in l?mt(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var o=(l,e,t)=>ft(l,typeof e!="symbol"?e+"":e,t);import{M as $,O as gt,B as ot,F as Ue,S as le,U as Ce,V as j,W as Se,H as we,N as yt,C as bt,a as fe,b as ee,A as xt,c as rt,R as Et,d as vt,e as Tt,L as St,f as wt,g as Ct,h as lt,i as Mt,j as _t,k as It,l as At,m as Rt,P as Pt,n as Lt,o as ct,p as kt,D as ze,q as ve,r as Dt,s as Ht,t as Bt,G as We,u as Gt,v as J,w as Re,I as Ot,x as V,y as Nt,z as pe,E as M,T as Ft,J as Ut,K as zt,Q as Wt}from"./three-_RpRzb1S.js";import{O as Te}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var w=(l=>(l.INIT="INIT",l.TITLE="TITLE",l.STAGE_START="STAGE_START",l.PLAYING="PLAYING",l.STAGE_CLEAR="STAGE_CLEAR",l.SKIP_PROMPT="SKIP_PROMPT",l.GAME_OVER="GAME_OVER",l.SHOP="SHOP",l.SKILL_SELECT="SKILL_SELECT",l.RESULT="RESULT",l))(w||{});class Vt{constructor(){o(this,"listeners",new Map)}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(t),()=>i.delete(t)}once(e,t){const i=this.on(e,s=>{t(s),i()})}emit(e,t){const i=this.listeners.get(e);if(i)for(const s of i)s(t)}off(e,t){var i;(i=this.listeners.get(e))==null||i.delete(t)}clear(){this.listeners.clear()}}const I=new Vt,$t=[{from:w.INIT,to:w.TITLE},{from:w.TITLE,to:w.STAGE_START},{from:w.STAGE_START,to:w.PLAYING},{from:w.PLAYING,to:w.STAGE_CLEAR},{from:w.PLAYING,to:w.GAME_OVER},{from:w.STAGE_CLEAR,to:w.STAGE_START},{from:w.STAGE_CLEAR,to:w.SKIP_PROMPT},{from:w.STAGE_CLEAR,to:w.SHOP},{from:w.SKIP_PROMPT,to:w.SHOP},{from:w.SKIP_PROMPT,to:w.STAGE_START},{from:w.SHOP,to:w.SKILL_SELECT},{from:w.SKILL_SELECT,to:w.STAGE_START},{from:w.GAME_OVER,to:w.RESULT},{from:w.RESULT,to:w.TITLE}];class qt{constructor(){o(this,"current",w.INIT)}get state(){return this.current}canTransition(e){return $t.some(t=>(Array.isArray(t.from)?t.from:[t.from]).includes(this.current)&&t.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const t=this.current;this.current=e,I.emit("state:changed",{from:t,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class Yt{constructor(){o(this,"updateFns",[]);o(this,"rafId",null);o(this,"lastTime",0);o(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const t=this.updateFns.indexOf(e);t!==-1&&this.updateFns.splice(t,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=t=>{this.rafId=requestAnimationFrame(e);const i=(t-this.lastTime)/1e3;this.lastTime=t;const s=Math.min(i,this.maxDelta);for(const a of this.updateFns)a(s)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const Ve="yukimedal_save",Qt="yukimedal_best",_e={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class Zt{constructor(){o(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(Ve);return e?{..._e,...JSON.parse(e)}:{..._e}}catch{return{..._e}}}save(){try{localStorage.setItem(Ve,JSON.stringify(this.data))}catch{}}updateBest(e,t){const i=e*3+t,s=this.data.bestPhase*3+this.data.bestStage;i>s&&(this.data.bestPhase=e,this.data.bestStage=t,localStorage.setItem(Qt,JSON.stringify({phase:e,stage:t}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const ht={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class de{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xt=new gt(-1,1,1,-1,0,1);class Kt extends ot{constructor(){super(),this.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ue([0,2,0,0,2,0],2))}}const jt=new Kt;class He{constructor(e){this._mesh=new $(jt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jt extends de{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof le?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ce.clone(e.uniforms),this.material=new le({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new He(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $e extends de{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,r;this.inverse?(n=0,r=1):(n=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,n,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class es extends de{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ts{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new j);this._width=i.width,this._height=i.height,t=new Se(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:we}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jt(ht),this.copyPass.material.blending=yt,this.clock=new bt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const n=this.passes[s];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const r=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}$e!==void 0&&(n instanceof $e?i=!0:n instanceof es&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ss extends de{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=s}}const is={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class he extends de{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new j(e.x,e.y):new j(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new Se(a,n,{type:we}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new Se(a,n,{type:we});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const m=new Se(a,n,{type:we});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),n=Math.round(n/2)}const r=is;this.highPassUniforms=Ce.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new le({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new j(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new ee(1,1,1),new ee(1,1,1),new ee(1,1,1),new ee(1,1,1),new ee(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const g=ht;this.copyUniforms=Ce.clone(g.uniforms),this.blendMaterial=new le({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:xt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new rt,this.fsQuad=new He(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new j(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[c].uniforms.direction.value=he.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=he.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new le({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new le({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}he.BlurDirectionX=new j(1,0);he.BlurDirectionY=new j(0,1);const as={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ns extends de{constructor(){super();const e=as;this.uniforms=Ce.clone(e.uniforms),this.material=new Et({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new He(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===St?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ct?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_t&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class os{constructor(e){o(this,"scene");o(this,"renderer");o(this,"composer");o(this,"renderPass");o(this,"bloomPass");o(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});this.scene=new It,this.scene.background=new fe(1710638),this.scene.fog=new At(1710638,20,60),this.renderer=new Rt({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Pt,this.renderer.toneMapping=lt,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=Lt,e.appendChild(this.renderer.domElement);const t=window.innerWidth,i=window.innerHeight,s=new ct(60,t/i,.1,200);this.renderPass=new ss(this.scene,s),this.bloomPass=new he(new j(t,i),.75,.4,.82);const a=new ns;this.composer=new ts(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(a),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}applySceneTheme(e){this.scene.background.set(e.background),this.scene.fog&&this.scene.fog.color.set(e.fogColor),this.bloomPass.strength=e.bloomStrength,this.bloomPass.threshold=e.bloomThreshold,this.bloomPass.radius=e.bloomRadius}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const u={INITIAL_MEDALS:50,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:30,QUOTA_MULTIPLIER:1.6,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:6.5,PUSHER_HEIGHT:1.2,PUSHER_RANGE:2.5,PUSHER_PERIOD_MS:4e3,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:40,INITIAL_PUSHER_MEDALS:20,MEDAL_PROB_NORMAL:60,MEDAL_PROB_DOUBLE:85,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,OPEN_ZONE_START:.5,MEDAL_CLEANUP_Y:-6};class rs{constructor(){o(this,"camera");o(this,"target",new ee(0,0,-1));o(this,"basePosition",new ee(0,7,16));o(this,"shakeOffset",new ee);o(this,"shakeIntensity",0);o(this,"shakeDecay",0);o(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});this.camera=new ct(u.CAMERA_FOV,window.innerWidth/window.innerHeight,u.CAMERA_NEAR,u.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}setFrontView(){this.basePosition.set(0,7,16),this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target)}shake(e,t){this.shakeIntensity=e,this.shakeDecay=t>0?-Math.log(.01)/t:0}update(e){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity,(Math.random()*2-1)*this.shakeIntensity,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition)),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class ls{constructor(e){o(this,"ambient");o(this,"dirLight");o(this,"fillLight");o(this,"warmPoint");o(this,"coolPoint");o(this,"sideLeft");o(this,"sideRight");this.ambient=new kt(4210784,.6),this.dirLight=new ze(16777215,1.8),this.dirLight.position.set(5,10,5),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=40,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.fillLight=new ze(4210943,.3),this.fillLight.position.set(-5,5,-5),this.warmPoint=new ve(16765056,1.8,25),this.warmPoint.position.set(0,6,8),this.coolPoint=new ve(4482815,1.2,20),this.coolPoint.position.set(0,4,-8),this.sideLeft=new ve(16773344,1,22),this.sideLeft.position.set(-9,4,2),this.sideRight=new ve(16773344,1,22),this.sideRight.position.set(9,4,2),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint,this.sideLeft,this.sideRight)}applyTheme(e){this.ambient.color.set(e.ambientColor),this.ambient.intensity=e.ambientIntensity,this.fillLight.color.set(e.fillColor),this.fillLight.intensity=e.fillIntensity,this.warmPoint.color.set(e.warmPointColor),this.warmPoint.intensity=e.warmPointIntensity,this.coolPoint.color.set(e.coolPointColor),this.coolPoint.intensity=e.coolPointIntensity}}class cs{constructor(e){o(this,"stars");o(this,"starMat");o(this,"grid");o(this,"scene");this.scene=e;const t=2e3,i=new Float32Array(t*3),s=60;for(let n=0;n<t;n++){const r=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),h=Math.cbrt(Math.random())*s;i[n*3]=h*Math.sin(c)*Math.cos(r),i[n*3+1]=h*Math.sin(c)*Math.sin(r),i[n*3+2]=h*Math.cos(c)}const a=new ot;a.setAttribute("position",new Dt(i,3)),this.starMat=new Ht({size:.07,color:8952319,transparent:!0,opacity:.65,sizeAttenuation:!0}),this.stars=new Bt(a,this.starMat),e.add(this.stars),this.grid=new We(80,40,1714782,924218),this.grid.position.y=-4,e.add(this.grid)}applyTheme(e){this.starMat.color.set(e.starColor),this.scene.remove(this.grid),this.grid.geometry.dispose(),this.grid.material.dispose(),this.grid=new We(80,40,e.gridColorA,e.gridColorB),this.grid.position.y=-4,this.scene.add(this.grid)}update(e){this.stars.rotation.y+=.008*e}}class hs{constructor(){o(this,"world");o(this,"_initialized",!1)}async init(){await Te.init(),this.world=new Te.World({x:0,y:u.GRAVITY,z:0});const e=this.world.integrationParameters;e.numSolverIterations=16,e.numAdditionalFrictionIterations=8,e.numInternalPgsIterations=2,e.maxCcdSubsteps=8,this._initialized=!0}get rapier(){return Te}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,t){return this.world.createCollider(e,t)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new Te.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}setTimestep(e){this._initialized&&(this.world.integrationParameters.dt=e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class ds{constructor(){o(this,"bodyToMesh",new Map)}register(e,t){this.bodyToMesh.set(e.handle,t)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(t=>{const i=this.bodyToMesh.get(t.handle);if(!i)return;const s=t.translation(),a=t.rotation(),n=i.userData.physicsYOffset??0;i.position.set(s.x,s.y+n,s.z),i.quaternion.set(a.x,a.y,a.z,a.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class us{constructor(){o(this,"handles",new Map);o(this,"dropZoneHandles",new Set);o(this,"eventQueue");o(this,"medalCollectedCallback");o(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,t){this.handles.set(e,t),t==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e,t=1){for(let i=0;i<t;i++)e.stepWithEvents(this.eventQueue);this.eventQueue.drainCollisionEvents((i,s,a)=>{var h,g;if(!a)return;const n=this.handles.get(i),r=this.handles.get(s);if(n==="drop_zone"&&(r==="medal"||r==="item")||r==="drop_zone"&&(n==="medal"||n==="item")){const d=n==="drop_zone"?s:i,p=n==="drop_zone"?r:n;p==="medal"?(h=this.medalCollectedCallback)==null||h.call(this,d):p==="item"&&((g=this.itemCollectedCallback)==null||g.call(this,d))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class ps{constructor(){o(this,"body");o(this,"time",0);o(this,"zBase");o(this,"initialized",!1);o(this,"speedMultiplier",1);this.zBase=-12/2+u.PUSHER_DEPTH/2-u.PUSHER_RANGE}async initPhysics(e){const t=e.rapier,i=t.RigidBodyDesc.kinematicVelocityBased().setTranslation(0,u.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(i);const s=t.ColliderDesc.cuboid(u.PUSHER_WIDTH/2,u.PUSHER_HEIGHT/2,u.PUSHER_DEPTH/2);e.createCollider(s,this.body);const a=.4,n=a/Math.SQRT2,r=t.ColliderDesc.cuboid(u.PUSHER_WIDTH/2,n,n).setTranslation(0,u.PUSHER_HEIGHT/2-a/2,u.PUSHER_DEPTH/2-a/2).setRotation({x:Math.sin(Math.PI/8),y:0,z:0,w:Math.cos(Math.PI/8)});e.createCollider(r,this.body),this.initialized=!0}update(e){this.time+=e*this.speedMultiplier;const t=u.PUSHER_PERIOD_MS/1e3,i=this.time%t/t,s=(1-Math.cos(i*Math.PI*2))/2*u.PUSHER_RANGE;if(this.initialized){const a=Math.PI*u.PUSHER_RANGE/t*Math.sin(i*Math.PI*2);this.body.setLinvel({x:0,y:0,z:a},!0),i<e/t&&this.body.setTranslation({x:0,y:u.PUSHER_HEIGHT/2,z:this.zBase},!0)}return s}get currentZOffset(){const e=u.PUSHER_PERIOD_MS/1e3,t=this.time%e/e;return(1-Math.cos(t*Math.PI*2))/2*u.PUSHER_RANGE}get restZ(){return this.zBase}}function ms(l){return[l>>16&255,l>>8&255,l&255]}function Ie(l){const e=l.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function re(l,e,t,i){return`rgb(${Math.min(255,l+i)},${Math.min(255,e+i)},${Math.min(255,t+i)})`}function Ae(l,e,t,i){return`rgb(${Math.max(0,l-i)},${Math.max(0,e-i)},${Math.max(0,t-i)})`}function qe(l,e,t){return`rgb(${l},${e},${t})`}function X(l,e,t,i,s){return`rgba(${Math.min(255,l+i)},${Math.min(255,e+i)},${Math.min(255,t+i)},${s})`}class ce{static get(e,t){if(!this.cache.has(e)){const i=t(),s=new Gt(i);this.cache.set(e,s)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),a=128/2,n=128/2,r=128/2-1,[c,h,g]=ms(e),d=qe(c,h,g),p=re(c,h,g,65),m=re(c,h,g,30),b=Ae(c,h,g,55),f=Ae(c,h,g,80),y=s.createRadialGradient(a-18,n-18,4,a,n,r);y.addColorStop(0,p),y.addColorStop(.45,m),y.addColorStop(.8,d),y.addColorStop(1,b),s.fillStyle=y,s.beginPath(),s.arc(a,n,r,0,Math.PI*2),s.fill(),s.strokeStyle=f,s.lineWidth=5,s.beginPath(),s.arc(a,n,r-5,0,Math.PI*2),s.stroke();const T=s.createRadialGradient(a,n,0,a,n,38);T.addColorStop(0,m),T.addColorStop(.7,d),T.addColorStop(1,b),s.fillStyle=T,s.beginPath(),s.arc(a,n,38,0,Math.PI*2),s.fill(),s.strokeStyle=f,s.lineWidth=1.5,s.stroke(),s.strokeStyle=p,s.lineWidth=2.5,s.lineCap="round";for(let S=0;S<6;S++){const x=S*Math.PI/3-Math.PI/6;s.beginPath(),s.moveTo(a+Math.cos(x)*7,n+Math.sin(x)*7),s.lineTo(a+Math.cos(x)*28,n+Math.sin(x)*28),s.stroke()}const _=s.createRadialGradient(a-2,n-2,0,a,n,8);_.addColorStop(0,p),_.addColorStop(1,d),s.fillStyle=_,s.beginPath(),s.arc(a,n,8,0,Math.PI*2),s.fill();const E=s.createRadialGradient(a-26,n-26,0,a-26,n-26,50);return E.addColorStop(0,"rgba(255,255,255,0.5)"),E.addColorStop(.4,"rgba(255,255,255,0.12)"),E.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=E,s.beginPath(),s.arc(a,n,r-2,0,Math.PI*2),s.fill(),i})}static getFieldTexture(e="#2a2a4e"){return this.get(`field_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,r]=Ie(e),c=a>r+20;if(s.fillStyle=e,s.fillRect(0,0,256,256),c){for(let p=0;p<22;p++){const m=256*p/22,b=p%3===0,f=b?.55:.45;s.strokeStyle=b?`rgba(${Math.max(0,a-22)},${Math.max(0,n-16)},${Math.max(0,r-8)},${f})`:`rgba(${Math.min(255,a+22)},${Math.min(255,n+16)},${Math.min(255,r+8)},${f})`,s.lineWidth=2+Math.random()*4,s.beginPath();for(let y=0;y<=256;y+=4){const T=m+Math.sin(y*.035+p)*2.5+(Math.random()-.5)*.8;y===0?s.moveTo(y,T):s.lineTo(y,T)}s.stroke()}s.strokeStyle=X(a,n,r,40,.12),s.lineWidth=.5;for(let p=0;p<256;p+=6)s.beginPath(),s.moveTo(0,p+.5),s.lineTo(256,p+.5),s.stroke()}else{s.strokeStyle=X(a,n,r,80,.14),s.lineWidth=1;for(let d=0;d<=256;d+=32)s.beginPath(),s.moveTo(d,0),s.lineTo(d,256),s.stroke();for(let d=0;d<=256;d+=32)s.beginPath(),s.moveTo(0,d),s.lineTo(256,d),s.stroke()}const h=s.getImageData(0,0,256,256),g=h.data;for(let d=0;d<g.length;d+=4){const p=(Math.random()-.5)*(c?14:18);g[d]=Math.max(0,Math.min(255,g[d]+p)),g[d+1]=Math.max(0,Math.min(255,g[d+1]+p)),g[d+2]=Math.max(0,Math.min(255,g[d+2]+p))}return s.putImageData(h,0,0),i})}static getPusherTexture(e="#3a3a6e"){return this.get(`pusher_${e}`,()=>{const s=document.createElement("canvas");s.width=256,s.height=128;const a=s.getContext("2d"),[n,r,c]=Ie(e),h=n>c+20;if(a.fillStyle=e,a.fillRect(0,0,256,128),h){a.strokeStyle=X(n,r,c,90,.38),a.lineWidth=.8;const p=14;for(let m=-128;m<384;m+=p)a.beginPath(),a.moveTo(m,0),a.lineTo(m+128,128),a.stroke();for(let m=0;m<512;m+=p)a.beginPath(),a.moveTo(m,0),a.lineTo(m-128,128),a.stroke();a.fillStyle=re(n,r,c,90);for(let m=0;m<2;m++){const b=10+m*108;for(let f=20;f<256;f+=36)a.fillStyle=re(n,r,c,80),a.beginPath(),a.arc(f,b,4.5,0,Math.PI*2),a.fill(),a.fillStyle=X(n,r,c,150,.7),a.beginPath(),a.arc(f-1,b-1,2,0,Math.PI*2),a.fill(),a.fillStyle="rgba(0,0,0,0.45)",a.beginPath(),a.arc(f+1,b+1,3,.5,Math.PI*2),a.fill()}}else{for(let p=0;p<128;p++){const m=.015+Math.random()*.055;a.strokeStyle=X(n,r,c,100,m),a.lineWidth=1,a.beginPath(),a.moveTo(0,p+.5),a.lineTo(256,p+.5),a.stroke()}a.fillStyle=X(n,r,c,120,.35);for(let p=24;p<256;p+=48)a.beginPath(),a.arc(p,8,3,0,Math.PI*2),a.fill()}const g=a.createLinearGradient(0,0,0,18);g.addColorStop(0,X(n,r,c,150,.6)),g.addColorStop(1,X(n,r,c,150,0)),a.fillStyle=g,a.fillRect(0,0,256,18);const d=a.createLinearGradient(0,114,0,128);return d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,0.55)"),a.fillStyle=d,a.fillRect(0,114,256,14),s})}static getWallTexture(e="#1a1a3e"){return this.get(`wall_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,r]=Ie(e),c=a>r+20;if(s.fillStyle=e,s.fillRect(0,0,256,256),c)for(let p=0;p<256;p+=40){const m=s.createLinearGradient(0,p,0,p+40);m.addColorStop(0,re(a,n,r,18)),m.addColorStop(.5,qe(a,n,r)),m.addColorStop(1,Ae(a,n,r,12)),s.fillStyle=m,s.fillRect(0,p,256,40),s.strokeStyle="rgba(0,0,0,0.55)",s.lineWidth=2,s.beginPath(),s.moveTo(0,p+40-1),s.lineTo(256,p+40-1),s.stroke(),s.strokeStyle=X(a,n,r,70,.45),s.lineWidth=1,s.beginPath(),s.moveTo(0,p+1),s.lineTo(256,p+1),s.stroke();for(let b=24;b<256;b+=48){const f=p+40-7;s.fillStyle=re(a,n,r,55),s.beginPath(),s.arc(b,f,4,0,Math.PI*2),s.fill(),s.fillStyle=X(a,n,r,130,.6),s.beginPath(),s.arc(b-1,f-1,1.5,0,Math.PI*2),s.fill(),s.fillStyle="rgba(0,0,0,0.5)",s.beginPath(),s.arc(b+1,f+1,2.5,.4,Math.PI*2),s.fill()}}else for(let d=0;d<256;d+=48){const p=s.createLinearGradient(0,d,0,d+6);p.addColorStop(0,"rgba(0,0,0,0.4)"),p.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=p,s.fillRect(0,d,256,6);const m=s.createLinearGradient(0,d-4,0,d);m.addColorStop(0,X(a,n,r,80,0)),m.addColorStop(1,X(a,n,r,80,.2)),s.fillStyle=m,s.fillRect(0,d-4,256,4)}const h=s.getImageData(0,0,256,256),g=h.data;for(let d=0;d<g.length;d+=4){const p=(Math.random()-.5)*(c?8:10);g[d]=Math.max(0,Math.min(255,g[d]+p)),g[d+1]=Math.max(0,Math.min(255,g[d+1]+p)),g[d+2]=Math.max(0,Math.min(255,g[d+2]+p))}return s.putImageData(h,0,0),i})}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}}o(ce,"cache",new Map);const fs=new J(u.MEDAL_RADIUS,u.MEDAL_RADIUS,u.MEDAL_THICKNESS,24),gs=new J(u.MEDAL_RADIUS_LARGE,u.MEDAL_RADIUS_LARGE,u.MEDAL_THICKNESS,24),ys={normal:16766720,double:13691135,large:15245312},bs={normal:1,double:2,large:1};function xs(l){const e=l*100;return e<u.MEDAL_PROB_NORMAL?"normal":e<u.MEDAL_PROB_DOUBLE?"double":"large"}function Es(l){return l==="large"?gs:fs}class Be{static getMaterial(e){const t=e.toString(16);if(this.materialCache.has(t))return this.materialCache.get(t);const i=new Re({color:e,flatShading:!0});return this.materialCache.set(t,i),i}static createMesh(e,t,i=!0,s=!1){const a=this.getMaterial(t).clone(),n=new $(e,a);return n.castShadow=i,n.receiveShadow=s,n}static disposeAll(){this.materialCache.forEach(e=>e.dispose()),this.materialCache.clear()}}o(Be,"materialCache",new Map);class vs{constructor(){o(this,"medals",new Map);o(this,"pendingRemoval",new Set);o(this,"spawnCounter",0)}spawn(e,t,i,s,a,n,r,c,h){if(this.medals.size>=u.MAX_MEDALS_ON_FIELD)return;const g=s.rapier,d=h??xs(Math.random()),p=d==="large"?u.MEDAL_RADIUS_LARGE:u.MEDAL_RADIUS,m=bs[d],b=g.RigidBodyDesc.dynamic().setTranslation(e,t,i).setLinearDamping(1.5).setAngularDamping(5).setCcdEnabled(!0),f=s.createRigidBody(b);f.setEnabledRotations(!0,!1,!0,!0),c&&f.setLinvel(c,!0);const y=g.ColliderDesc.cylinder(u.MEDAL_THICKNESS/2,p).setRestitution(.05).setFriction(.7).setDensity(u.MEDAL_MASS).setActiveEvents(g.ActiveEvents.COLLISION_EVENTS),T=s.createCollider(y,f);n.registerHandle(T.handle,"medal");const _=Be.createMesh(Es(d),ys[d],!0,!1);_.userData.physicsYOffset=.03,_.position.set(e,t,i),r.add(_),a.register(f,_),this.medals.set(T.handle,{body:f,collider:T,mesh:_,type:d,quotaValue:m}),this.spawnCounter++}getQuotaValue(e){var t;return((t=this.medals.get(e))==null?void 0:t.quotaValue)??1}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){let a=0;for(const n of this.pendingRemoval){const r=this.medals.get(n);r&&(t.unregister(r.body),i.unregisterHandle(n),s.remove(r.mesh),e.removeRigidBody(r.body),r.mesh.material.dispose(),this.medals.delete(n),a++)}return this.pendingRemoval.clear(),a}cleanupFallen(e,t,i,s,a){let n=0;for(const[r,c]of this.medals)c.body.translation().y<e&&!this.pendingRemoval.has(r)&&(this.pendingRemoval.add(r),n++);return n}get count(){return this.medals.size}clear(e,t,i,s){for(const[a,n]of this.medals)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh),e.removeRigidBody(n.body),n.mesh.material.dispose();this.medals.clear(),this.pendingRemoval.clear()}}class Ts{constructor(){o(this,"body");o(this,"collider")}async initPhysics(e,t){const i=e.rapier,s=u.OPEN_ZONE_START,a=u.FIELD_DEPTH/2+15,n=(s+a)/2,r=(a-s)/2,c=i.RigidBodyDesc.fixed().setTranslation(0,-2,n);this.body=e.createRigidBody(c);const h=i.ColliderDesc.cuboid(u.FIELD_WIDTH/2+1,1.5,r).setActiveEvents(i.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(h,this.body),t.registerHandle(this.collider.handle,"drop_zone")}}class Ss{constructor(){o(this,"time",0)}setupStage(e,t,i,s){this.clear(s)}getBonusMultiplierAt(e,t){return 1}update(e){this.time+=e}clear(e){this.time=0}}var F=(l=>(l.Common="Common",l.Rare="Rare",l.Epic="Epic",l.Legendary="Legendary",l))(F||{});const ws={[F.Common]:8947848,[F.Rare]:4474111,[F.Epic]:11141375,[F.Legendary]:16746496},Cs=new Ot(.4,0);class Ms{constructor(e){o(this,"mesh");o(this,"animationOffset");const t=ws[e],i=new V({color:t,emissive:t,emissiveIntensity:.45,metalness:.2,roughness:.55,flatShading:!0});this.mesh=new $(Cs,i),this.mesh.castShadow=!0,this.animationOffset=Math.random()*Math.PI*2}update(e){this.mesh.position.y+=Math.sin(e*2+this.animationOffset)*.002,this.mesh.rotation.y+=.02}setPosition(e,t,i){this.mesh.position.set(e,t,i)}dispose(){this.mesh.material.dispose()}}class Ge{constructor(e=Date.now()){o(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,t){return Math.floor(this.next()*(t-e+1))+e}nextFloat(e,t){return this.next()*(t-e)+e}shuffle(e){const t=[...e];for(let i=t.length-1;i>0;i--){const s=Math.floor(this.next()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}weightedPick(e,t){const i=t.reduce((a,n)=>a+n,0);let s=this.next()*i;for(let a=0;a<e.length;a++)if(s-=t[a],s<=0)return e[a];return e[e.length-1]}}class _s{constructor(){o(this,"items",new Map);o(this,"pendingRemoval",new Set)}spawnItems(e,t,i,s,a,n){const r=new Ge(n);for(const c of e){const h=r.nextFloat(-3,u.FIELD_WIDTH/2-1),g=r.nextFloat(-12/4,u.FIELD_DEPTH/4);this.spawnSingle(c,h,2,g,t,i,s,a)}}spawnSingle(e,t,i,s,a,n,r,c){const h=a.rapier,g=h.RigidBodyDesc.dynamic().setTranslation(t,i,s).setLinearDamping(.7).setAngularDamping(.8),d=a.createRigidBody(g),p=h.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(h.ActiveEvents.COLLISION_EVENTS),m=a.createCollider(p,d);r.registerHandle(m.handle,"item");const b=new Ms(e.rarity);b.setPosition(t,i,s),c.add(b.mesh),n.register(d,b.mesh),this.items.set(m.handle,{body:d,collider:m,mesh:b,definitionId:e.id})}getDefinitionId(e){var t;return(t=this.items.get(e))==null?void 0:t.definitionId}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){for(const a of this.pendingRemoval){const n=this.items.get(a);n&&(t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose(),this.items.delete(a))}this.pendingRemoval.clear()}update(e){for(const t of this.items.values())t.mesh.update(e)}clear(e,t,i,s){for(const[a,n]of this.items)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const Pe=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:F.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:F.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:F.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:F.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:F.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:F.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:F.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:F.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:F.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:F.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function ge(l){return Pe.find(e=>e.id===l)}const Ye={[F.Common]:60,[F.Rare]:30,[F.Epic]:8,[F.Legendary]:2};class Is{constructor(e){o(this,"rng");this.rng=new Ge(e)}pickRandom(e){const t=[];for(let i=0;i<e;i++){const s=this.pickRarity(),a=Pe.filter(r=>r.rarity===s);if(a.length===0){t.push(Pe[0]);continue}const n=Math.floor(this.rng.next()*a.length);t.push(a[n])}return t}pickRarity(){const e=Object.keys(Ye),t=e.map(i=>Ye[i]);return this.rng.weightedPick(e,t)}}function C(l,e,t=!1){const i=new $(l,e);return t&&(i.castShadow=!0,i.receiveShadow=!0),i}function W(l,e=1){return new V({color:l,emissive:l,emissiveIntensity:e,roughness:.5,metalness:.3})}class P{constructor(e){o(this,"group");o(this,"pusherMesh",null);o(this,"wallMeshes",[]);o(this,"sideGuardMeshes",[]);o(this,"pusherZBase",-12/2+u.PUSHER_DEPTH/2-u.PUSHER_RANGE);this.group=new Nt,this.rebuild(e)}rebuild(e){this.group.traverse(t=>{if(t!==this.group&&t instanceof $){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),this.group.clear(),this.wallMeshes=[],this.sideGuardMeshes=[],this.buildFieldSurface(e),this.buildPusher(e),this.addPusherDetails(e),this.createWalls(e),this.buildCabinet(e),this.buildCabinetDetails(e)}static cabinetMat(e){return new V({color:e.cabinetColor,roughness:.72,metalness:.42})}static brassMat(e){return new V({color:e.brassColor,roughness:e.brassRoughness,metalness:e.brassMetalness})}buildFieldSurface(e){const t=ce.getFieldTexture(e.fieldTexBase);t.wrapS=t.wrapT=pe,t.repeat.set(u.FIELD_WIDTH/2,u.FIELD_DEPTH/2);const i=new V({map:t,color:16777215,roughness:.92,metalness:0}),s=new M(u.FIELD_WIDTH,u.FIELD_HEIGHT,u.FIELD_DEPTH),a=new $(s,i);a.receiveShadow=!0,a.position.y=-.1/2,this.group.add(a)}buildPusher(e){const t=ce.getPusherTexture(e.pusherTexBase);t.wrapS=t.wrapT=pe,t.repeat.set(u.PUSHER_WIDTH/2,u.PUSHER_HEIGHT/1);const i=new V({map:t,color:16777215,roughness:.35,metalness:.65}),s=new M(u.PUSHER_WIDTH,u.PUSHER_HEIGHT,u.PUSHER_DEPTH);this.pusherMesh=new $(s,i),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,u.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh)}addPusherDetails(e){const t=u.PUSHER_WIDTH,i=u.PUSHER_HEIGHT,s=u.PUSHER_DEPTH,a=C(new M(t+.06,.14,.14),P.brassMat(e));a.position.set(0,-i/2+.07,s/2),this.pusherMesh.add(a);const n=.4,r=C(new M(t+.06,n,n),P.brassMat(e));r.rotation.x=Math.PI/4,r.position.set(0,i/2-n/2,s/2),this.pusherMesh.add(r);for(const c of[-1,1]){const h=C(new M(.1,i,.1),P.brassMat(e));h.position.set(c*(t/2-.05),0,s/2),this.pusherMesh.add(h)}}createWalls(e){const s=ce.getWallTexture(e.wallTexBase);s.wrapS=s.wrapT=pe;const a=()=>{const _=s.clone();return _.wrapS=_.wrapT=pe,_.needsUpdate=!0,new V({map:_,color:16777215,roughness:.8,metalness:.15})},n=u.OPEN_ZONE_START- -12/2,r=-12/2+n/2,c=a();c.map.repeat.set(n/2,3.5/2);const h=new M(.3,3.5,n),g=new $(h,c);g.position.set(-8/2-.3/2,3.5/2,r),this.group.add(g),this.wallMeshes.push(g);const d=a();d.map.repeat.set(n/2,3.5/2);const p=new M(.3,3.5,n),m=new $(p,d);m.position.set(u.FIELD_WIDTH/2+.3/2,3.5/2,r),this.group.add(m),this.wallMeshes.push(m);const b=a(),f=u.FIELD_WIDTH+.3*2;b.map.repeat.set(f/2,3.5/2);const y=new M(f,3.5,.3),T=new $(y,b);T.position.set(0,3.5/2,-12/2-.3/2),this.group.add(T),this.wallMeshes.push(T)}buildCabinet(e){const t=u.FIELD_WIDTH,i=u.FIELD_DEPTH,s=-i/2,a=i/2,n=C(new M(12,1,17),P.cabinetMat(e),!0);n.position.set(0,-.52,-.5),this.group.add(n);const r=C(new M(12,.1,.1),P.brassMat(e));r.position.set(0,0,a+2.55),this.group.add(r);const c=1.1,h=7.2,g=13.5,d=t/2+.75,p=-.25;for(const L of[-1,1]){const N=C(new M(c,h,g),P.cabinetMat(e),!0);N.position.set(L*d,h/2-.5,p),this.group.add(N);const q=C(new M(c+.08,.14,g+.08),P.brassMat(e));q.position.set(L*d,h-.5+.07,p),this.group.add(q);const Z=C(new M(c+.08,.1,g+.08),P.brassMat(e));Z.position.set(L*d,-.02,p),this.group.add(Z);const oe=C(new M(.06,h*.75,g*.7),new V({color:e.insetColor,roughness:.9,metalness:.1}));oe.position.set(L*(d-(c/2+.01)),h/2-.5,p),this.group.add(oe);const Ne=C(new M(.055,h*.8,.055),W(e.primaryNeon,1.1));Ne.position.set(L*(d-c/2-.05),h/2-.5,p),this.group.add(Ne);const Fe=C(new M(.05,h*.6,.05),W(e.tertiaryNeon,.9));Fe.position.set(L*(d-c/2-.05),h/2-.5,a+.3),this.group.add(Fe)}const m=10.5,b=1.3,f=s-1.15,y=ce.getWallTexture(e.wallTexBase).clone();y.wrapS=y.wrapT=pe,y.repeat.set(6,5),y.needsUpdate=!0;const T=new V({map:y,color:16777215,roughness:.75,metalness:.18}),_=C(new M(12,m,b),T,!0);_.position.set(0,m/2-.5,f),this.group.add(_);const E=C(new M(12.1,.15,b+.1),P.brassMat(e));E.position.set(0,m-.5+.07,f),this.group.add(E);const S=3.8,x=9.8,H=new V({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.9,roughness:.3,metalness:.5}),A=C(new M(x,S,.08),H);A.position.set(0,m-.5-S/2-.3,f+b/2+.04),this.group.add(A);const O=C(new M(x+.24,S+.24,.06),P.brassMat(e));O.position.set(0,m-.5-S/2-.3,f+b/2),this.group.add(O);const k=m-.5-S/2-.3;for(let L=0;L<4;L++){const N=C(new M(x-.4,.05,.07),W(e.tertiaryNeon,.8));N.position.set(0,k-S/2+.5+L*.75,f+b/2+.06),this.group.add(N)}const U=C(new M(12,.07,.07),W(e.tertiaryNeon,1.2));U.position.set(0,m-.5+.18,f+b/2),this.group.add(U);const B=C(new M(12,.07,.07),W(e.primaryNeon,.9));B.position.set(0,3.7,f+b/2),this.group.add(B);const z=C(new M(12,1.1,4.5),P.cabinetMat(e),!0);z.position.set(0,-.56,a+2.25),this.group.add(z);const Y=C(new M(12,.12,.12),P.brassMat(e));Y.position.set(0,0,a+4.45),this.group.add(Y);const Q=C(new M(12,.06,.06),W(e.secondaryNeon,1));Q.position.set(0,.06,a+4.5),this.group.add(Q);const ye=C(new M(12,.5,g),P.cabinetMat(e),!0);ye.position.set(0,6.7,p),this.group.add(ye);const ne=C(new M(12,.07,.07),W(e.primaryNeon,1));ne.position.set(0,6.96,a+.1),this.group.add(ne);for(const L of[-1,1]){const N=C(new M(.09,.09,i+.5),P.brassMat(e));N.position.set(L*(t/2+.04),.05,p),this.group.add(N)}const be=C(new M(t+.2,3.6,.18),new V({color:e.pusherHousingColor,roughness:.65,metalness:.5}));be.position.set(0,1.8,s-.08),this.group.add(be);const xe=C(new M(t-.2,.06,.06),W(e.secondaryNeon,1));xe.position.set(0,3.65,s+.01),this.group.add(xe);const Ee=C(new M(t+.1,.07,.07),W(e.secondaryNeon,1.4));Ee.position.set(0,.07,a),this.group.add(Ee);const se=C(new M(t+.1,.07,.07),W(e.primaryNeon,1.4));se.position.set(0,.07,s+.04),this.group.add(se);for(const L of[-1,1]){const N=C(new M(.07,.07,i),W(e.primaryNeon,1.2));N.position.set(L*t/2,.07,(s+a)/2),this.group.add(N)}const ue=u.OPEN_ZONE_START-s,v=s+ue/2;for(const L of[-1,1]){const N=C(new M(.055,3.4,.055),W(e.tertiaryNeon,.9));N.position.set(L*(t/2),1.7,v),this.group.add(N)}const R=new $(new M(100,.2,100),new V({color:e.groundColor,emissive:e.groundColor,emissiveIntensity:.25,roughness:.95,metalness:0}));R.position.set(0,-.65,0),this.group.add(R)}buildCabinetDetails(e){const t=u.FIELD_DEPTH/2,i=-12/2,s=1.1,a=7.2,n=13.5,r=u.FIELD_WIDTH/2+.75,c=-.25,h=1.3,g=i-1.15;for(const E of[-1,1]){for(let x=0;x<2;x++){const H=x===0?-.26:.16,A=a*.6,O=E*(r+H),k=c+n/2+.07,U=C(new J(.05,.05,A,8),P.brassMat(e));U.position.set(O,A/2+.3,k),this.group.add(U);const B=4;for(let z=0;z<=B;z++){const Y=.3+z*(A/B),Q=C(new J(.09,.09,.07,10),P.brassMat(e));Q.position.set(O,Y,k),this.group.add(Q)}}const S=C(new M(.48,.1,.1),P.brassMat(e));S.position.set(E*r,a*.6+.3+.05,c+n/2+.07),this.group.add(S)}for(const E of[-1,1]){const S=E*(r-s/2-.025),x=C(new J(.24,.24,.06,18),P.brassMat(e));x.rotation.z=Math.PI/2,x.position.set(S,a*.52,c+.8),this.group.add(x);const H=C(new J(.18,.18,.03,18),W(e.secondaryNeon,.55));H.rotation.z=Math.PI/2,H.position.set(S-E*.035,a*.52,c+.8),this.group.add(H);const A=C(new J(.16,.16,.05,14),P.brassMat(e));A.rotation.z=Math.PI/2,A.position.set(S,a*.28,c-1.2),this.group.add(A);const O=C(new J(.11,.11,.025,14),W(e.primaryNeon,.45));O.rotation.z=Math.PI/2,O.position.set(S-E*.03,a*.28,c-1.2),this.group.add(O)}const d=3.2,p=g+h/2+.05,m=C(new Ft(.82,.1,10,28),P.brassMat(e));m.position.set(0,d,p),this.group.add(m);const b=C(new J(.74,.74,.04,28),new V({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.55,transparent:!0,opacity:.82,roughness:.05,metalness:0}));b.rotation.x=Math.PI/2,b.position.set(0,d,p),this.group.add(b);for(let E=0;E<4;E++){const S=E/4*Math.PI*2+Math.PI/4,x=C(new J(.045,.045,.06,8),P.brassMat(e));x.rotation.x=Math.PI/2,x.position.set(Math.cos(S)*.88,d+Math.sin(S)*.88,p+.03),this.group.add(x)}{const x=u.FIELD_WIDTH+.2,H=x+.34*2,A=t+.34/2,O=C(new M(H,.34,.34),P.brassMat(e));O.position.set(0,4.6+.34/2,A),this.group.add(O);for(const U of[-1,1]){const B=C(new M(.34,4.9399999999999995,.34),P.brassMat(e));B.position.set(U*(x/2+.34/2),(4.6+.34)/2,A),this.group.add(B)}const k=C(new M(x,.055,.055),W(e.primaryNeon,1.4));k.position.set(0,4.6-.04,A),this.group.add(k);for(const U of[-1,1]){const B=C(new M(.055,4.6,.055),W(e.secondaryNeon,1.1));B.position.set(U*(x/2-.04),4.6/2,A),this.group.add(B)}for(const U of[-1,1]){const B=C(new M(.44000000000000006,.44000000000000006,.44000000000000006),P.brassMat(e));B.position.set(U*(x/2+.34/2),4.6+.34/2,A),this.group.add(B)}}{const E=s+.12,S=.12,x=n+.12;for(const H of[-1,1])for(const A of[.33,.66]){const O=C(new M(E,S,x),P.brassMat(e));O.position.set(H*r,A*a-.5,c),this.group.add(O)}}const f=t+4.45,y=C(new M(1.3,.16,.05),new V({color:e.insetColor,roughness:.9,metalness:.1}));y.position.set(0,-.08,f),this.group.add(y);const T=C(new M(1.5,.3,.04),P.brassMat(e));T.position.set(0,-.08,f-.01),this.group.add(T);const _=C(new M(.9,.045,.06),new V({color:0,roughness:1,metalness:0}));_.position.set(0,-.06,f+.01),this.group.add(_)}addSideGuardMeshes(e){const s=u.FIELD_DEPTH/2-u.OPEN_ZONE_START,a=u.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const r=n*(u.FIELD_WIDTH/2+.1),c=new M(.2,2,s),h=Be.createMesh(c,4500223,!1,!1);h.position.set(r,2/2,a),e.add(h),this.sideGuardMeshes.push(h)}}removeSideGuardMeshes(e){for(const t of this.sideGuardMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}}class As{constructor(e,t,i,s){o(this,"physicsWorld");o(this,"physicsSync");o(this,"collisionHandler");o(this,"pusher");o(this,"medalSpawner");o(this,"itemSpawner");o(this,"dropZone");o(this,"gimmickManager");o(this,"fieldMesh");o(this,"time",0);o(this,"getMedalQuotaMultiplier",()=>1);o(this,"sideGuardActive",!1);o(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=t,this.inventory=i,this.physicsWorld=new hs,this.physicsSync=new ds,this.collisionHandler=new us,this.pusher=new ps,this.medalSpawner=new vs,this.itemSpawner=new _s,this.dropZone=new Ts,this.gimmickManager=new Ss,this.fieldMesh=new P(s)}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}rebuildFieldMesh(e){ce.disposeAll(),this.fieldMesh.rebuild(e)}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const t=this.medalSpawner.getQuotaValue(e);this.medalSpawner.markForRemoval(e);const i=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(t,i),I.emit("medal:collected",{count:t})}),this.collisionHandler.onItemCollected(e=>{const t=this.itemSpawner.getDefinitionId(e);if(!t)return;this.itemSpawner.markForRemoval(e);const i=this.inventory.addItem(t),s=ge(t);s&&(this.quotaManager.addItem(s.quotaValue),I.emit("item:collected",{itemId:t,instanceId:i.instanceId,quotaValue:s.quotaValue}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,t=e.RigidBodyDesc.fixed().setTranslation(0,-.05,0),i=this.physicsWorld.createRigidBody(t),s=e.ColliderDesc.cuboid(u.FIELD_WIDTH/2,.05,u.FIELD_DEPTH/2).setFriction(.6).setRestitution(.05);this.physicsWorld.createCollider(s,i);const a=3.5,n=.2,r=u.OPEN_ZONE_START- -12/2,c=-12/2+r/2,h=e.RigidBodyDesc.fixed().setTranslation(-8/2-n/2,a/2,c),g=this.physicsWorld.createRigidBody(h);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,r/2),g);const d=e.RigidBodyDesc.fixed().setTranslation(u.FIELD_WIDTH/2+n/2,a/2,c),p=this.physicsWorld.createRigidBody(d);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,r/2),p);const m=8,b=.5,f=e.RigidBodyDesc.fixed().setTranslation(0,m/2,-12/2-b/2),y=this.physicsWorld.createRigidBody(f);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(u.FIELD_WIDTH/2+b,m/2,b/2),y)}startStage(e,t){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,t,this.physicsWorld,this.sceneManager);const s=new Is(e*1e3+t).pickRandom(u.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(s,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+t+7)}spawnInitialMedals(){const e=-6+u.PUSHER_DEPTH-u.PUSHER_RANGE,t=u.FIELD_DEPTH/2-u.MEDAL_RADIUS,i=u.FIELD_WIDTH/2-u.MEDAL_RADIUS;for(let d=0;d<u.INITIAL_FIELD_MEDALS;d++){const p=(Math.random()*2-1)*i,m=e+Math.random()*(t-e),b=u.MEDAL_THICKNESS/2+Math.random()*.5;this.medalSpawner.spawn(p,b,m,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}const s=-12/2+u.MEDAL_RADIUS,n=e-u.MEDAL_RADIUS-s,r=6,c=Math.ceil(u.INITIAL_PUSHER_MEDALS/r),h=i*2/(r-1),g=n/Math.max(c-1,1);for(let d=0;d<u.INITIAL_PUSHER_MEDALS;d++){const p=d%r,m=Math.floor(d/r),b=-i+p*h+(Math.random()-.5)*.15,f=s+m*g+(Math.random()-.5)*.15,y=u.PUSHER_HEIGHT+u.MEDAL_THICKNESS/2+.8+m*.25;this.medalSpawner.spawn(b,y,f,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,t){const i=u.FIELD_DEPTH/2-.5,s=2,n=-(12+(-t+1)/2*7);this.medalSpawner.spawn(e,s,i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:6,z:n})}update(e){this.time+=e;const t=4,i=Math.min(e,1/15);this.physicsWorld.setTimestep(i/t),this.collisionHandler.processEvents(this.physicsWorld,t),this.medalSpawner.cleanupFallen(u.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld);const s=this.pusher.update(e);this.fieldMesh.updatePusher(s),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,t=2,i=.2,s=u.FIELD_DEPTH/2-u.OPEN_ZONE_START,a=u.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const r=n*(u.FIELD_WIDTH/2+i/2),c=e.RigidBodyDesc.fixed().setTranslation(r,t/2,a),h=this.physicsWorld.createRigidBody(c);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(i/2,t/2,s/2),h),this.sideGuardBodies.push(h)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class Rs{constructor(){o(this,"current",0);o(this,"target",0);o(this,"phase",1);o(this,"stage",1)}startStage(e,t){this.phase=e,this.stage=t,this.current=0,this.target=this.calcTarget(e,t),I.emit("stage:started",{phase:e,stage:t,quotaTarget:this.target}),I.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,t){const i=(e-1)*u.STAGES_PER_PHASE+t;return Math.ceil(u.BASE_QUOTA*Math.pow(u.QUOTA_MULTIPLIER,i-1))}addMedals(e,t=1){this.current+=e*t,I.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&I.emit("quota:reached",{phase:this.phase,stage:this.stage})}addItem(e,t=1){this.current+=e*t,I.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&I.emit("quota:reached",{phase:this.phase,stage:this.stage})}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class Ps{constructor(e){o(this,"phase",1);o(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===u.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(w.PLAYING)}clearCurrentStage(){I.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(w.STAGE_CLEAR),this.stage===u.STAGES_PER_PHASE&&I.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<u.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(w.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function Ls(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class ks{constructor(){o(this,"items",[])}addItem(e){const t={instanceId:Ls(),definitionId:e,collectedAt:Date.now()};return this.items.push(t),t}removeItem(e){const t=this.items.findIndex(i=>i.instanceId===e);return t===-1?!1:(this.items.splice(t,1),!0)}getAll(){return[...this.items]}getDefinition(e){const t=this.items.find(i=>i.instanceId===e);if(t)return ge(t.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,t)=>{const i=ge(t.definitionId);return e+((i==null?void 0:i.sellPrice)??0)},0)}}class Ds{constructor(){o(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});I.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),I.on("item:collected",()=>{this.data.totalItemsCollected++}),I.on("stage:cleared",({phase:e,stage:t})=>{this.data.phase=e,this.data.stage=t})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class Hs{calculate(e,t){const i=t.bestPhase*3+t.bestStage,a=e.phase*3+e.stage>i;return t.updateBest(e.phase,e.stage),t.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:a,bestPhase:t.bestPhase,bestStage:t.bestStage}}}var G=(l=>(l.Gold="Gold",l.Alchemy="Alchemy",l.Throw="Throw",l.Guard="Guard",l))(G||{}),D=(l=>(l.Common="Common",l.Rare="Rare",l.Epic="Epic",l))(D||{});const dt=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:G.Gold,rarity:D.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:G.Gold,rarity:D.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:G.Gold,rarity:D.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:G.Gold,rarity:D.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:G.Gold,rarity:D.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:G.Alchemy,rarity:D.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:G.Alchemy,rarity:D.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:G.Alchemy,rarity:D.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:G.Alchemy,rarity:D.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:G.Alchemy,rarity:D.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:G.Throw,rarity:D.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:G.Throw,rarity:D.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:G.Throw,rarity:D.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:G.Throw,rarity:D.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:G.Throw,rarity:D.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:G.Guard,rarity:D.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:G.Guard,rarity:D.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:G.Guard,rarity:D.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:G.Guard,rarity:D.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:G.Guard,rarity:D.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function Qe(l){return dt.find(e=>e.id===l)}class Bs{constructor(){o(this,"owned",[])}addSkill(e,t){this.owned.push({definitionId:e,acquiredAt:t}),I.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let t=1;for(const i of this.owned){const s=Qe(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t*=a.value)}return t}getEffectSum(e){let t=0;for(const i of this.owned){const s=Qe(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t+=a.value)}return t}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const Ze={[D.Common]:60,[D.Rare]:30,[D.Epic]:10};class Gs{pickChoices(e,t,i){const s=new Ge(i),a=new Set(t.map(h=>h.definitionId)),n=dt.filter(h=>!a.has(h.id));if(n.length===0)return[];const r=[],c=new Set;for(let h=0;h<e&&r.length<n.length;h++){const g=Object.keys(Ze),d=g.map(f=>Ze[f]),p=s.weightedPick(g,d),m=n.filter(f=>f.rarity===p&&!c.has(f.id));if(m.length===0){const f=n.filter(T=>!c.has(T.id));if(f.length===0)break;const y=f[Math.floor(s.next()*f.length)];r.push(y),c.add(y.id);continue}const b=m[Math.floor(s.next()*m.length)];r.push(b),c.add(b.id)}return r}}const Oe=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:300,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:200,durationMs:3e4,color:"#ffaa00"}];function Xe(l){return Oe.find(e=>e.id===l)}class Os{constructor(){o(this,"shopMoney");o(this,"medals");o(this,"sellMultiplier",1);o(this,"ownedActiveItems",new Map);this.shopMoney=u.INITIAL_SHOP_MONEY,this.medals=u.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,t){const i=t.getDefinition(e);if(!i)return 0;const s=Math.floor(i.sellPrice*this.sellMultiplier);return t.removeItem(e),this.shopMoney+=s,s}buyMedals(e){const t=e*u.MEDAL_BUY_PRICE;return this.shopMoney<t?!1:(this.shopMoney-=t,this.medals+=e,!0)}buyActiveItem(e){const t=Oe.find(i=>i.id===e);return!t||this.shopMoney<t.price?!1:(this.shopMoney-=t.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const t=this.ownedActiveItems.get(e)??0;return t<=0?!1:(t===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,t-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,t])=>({id:e,count:t}))}reset(){this.shopMoney=u.INITIAL_SHOP_MONEY,this.medals=u.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let Ke=!1;function Ns(){if(Ke)return;Ke=!0;const l=document.createElement("style");l.textContent=`
    @keyframes titlePulseCyber {
      0%, 100% { text-shadow: 0 0 20px #ffd700, 0 0 40px #ffd70066; }
      50% { text-shadow: 0 0 35px #ffd700, 0 0 70px #ffd70099, 0 0 100px #ffd70033; }
    }
    @keyframes titlePulseSteam {
      0%, 100% { text-shadow: 0 0 20px #c8831a, 0 0 40px #c8831a66; }
      50% { text-shadow: 0 0 35px #c8831a, 0 0 70px #c8831a99, 0 0 100px #c8831a33; }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
  `,document.head.appendChild(l)}class Fs{constructor(e){o(this,"el");o(this,"titleEl");o(this,"onStartCallbacks",[]);o(this,"onSettingsCallbacks",[]);o(this,"hideTimer",null);Ns(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay);
      pointer-events: all;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.titleEl=document.createElement("h1"),this.titleEl.style.cssText=`
      font-size: 4rem;
      color: var(--t-primary);
      letter-spacing: 0.3em;
      margin-bottom: 0.5rem;
      animation: titlePulseSteam 3s ease-in-out infinite;
    `,this.titleEl.textContent="YukiMedal";const t=document.createElement("p");t.style.cssText=`
      font-size: 1rem;
      color: var(--t-text-dim);
      margin-bottom: 3rem;
      letter-spacing: 0.1em;
    `,t.textContent="Roguelike Medal Pusher";const i=document.createElement("button");i.style.cssText=`
      font-size: 1.3rem;
      padding: 14px 48px;
      background: linear-gradient(90deg, transparent, var(--t-primary-faint), transparent);
      background-size: 200% auto;
      border: 2px solid var(--t-primary);
      color: var(--t-primary);
      cursor: pointer;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      transition: all 0.2s;
      border-radius: 4px;
      animation: shimmer 2.5s linear infinite;
    `,i.textContent="START",i.addEventListener("mouseenter",()=>{i.style.backgroundImage="none",i.style.backgroundColor="rgba(200,131,26,0.2)"}),i.addEventListener("mouseleave",()=>{i.style.backgroundImage="linear-gradient(90deg, transparent, var(--t-primary-faint), transparent)",i.style.backgroundColor=""}),i.addEventListener("click",()=>{this.onStartCallbacks.forEach(n=>n())});const s=document.createElement("button");s.style.cssText=`
      font-size: 0.9rem;
      padding: 10px 32px;
      background: transparent;
      border: 1px solid var(--t-text-dim);
      color: var(--t-text-dim);
      cursor: pointer;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transition: all 0.2s;
      border-radius: 4px;
      margin-top: 12px;
    `,s.textContent="SETTINGS",s.addEventListener("mouseenter",()=>{s.style.borderColor="var(--t-primary)",s.style.color="var(--t-primary)"}),s.addEventListener("mouseleave",()=>{s.style.borderColor="var(--t-text-dim)",s.style.color="var(--t-text-dim)"}),s.addEventListener("click",()=>{this.onSettingsCallbacks.forEach(n=>n())});const a=document.createElement("div");a.style.cssText=`
      position: absolute;
      bottom: 12px;
      right: 16px;
      font-size: 0.65rem;
      color: var(--t-text-dim);
      opacity: 0.5;
      letter-spacing: 0.05em;
    `,a.textContent="v0.1.0",this.el.appendChild(this.titleEl),this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.appendChild(a),e.appendChild(this.el)}applyTheme(e){const t=e==="steampunk"?"titlePulseSteam":"titlePulseCyber";this.titleEl.style.animation=`${t} 3s ease-in-out infinite`}onStart(e){this.onStartCallbacks.push(e)}onSettings(e){this.onSettingsCallbacks.push(e)}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class Us{constructor(e){o(this,"el");o(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px;
      left: 16px;
      font-size: 1.2rem;
      color: var(--t-primary);
      text-shadow: 0 0 8px var(--t-shadow-glow);
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      transition: transform 0.25s ease, color 0.25s ease;
    `,e.appendChild(this.el)}update(e){const t=e!==this.prevMedals,i=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,t&&(i?this.el.style.color="#ff4444":this.el.style.color="var(--t-primary)",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let je=!1;function zs(){if(je)return;je=!0;const l=document.createElement("style");l.textContent=`
    @keyframes barPulse {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.03); }
    }
  `,document.head.appendChild(l)}class Ws{constructor(e){o(this,"container");o(this,"bar");o(this,"label");o(this,"reached",!1);zs(),this.container=document.createElement("div"),this.container.style.cssText=`
      position: absolute;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: center;
    `,this.label=document.createElement("div"),this.label.style.cssText="font-size: 0.8rem; color: var(--t-text-dim); margin-bottom: 6px;",this.label.textContent="QUOTA: 0 / 30";const t=document.createElement("div");t.style.cssText=`
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
    `;const i=document.createElement("div");i.style.cssText=`
      position: absolute;
      top: 1px;
      right: 0;
      width: 30%;
      height: 4px;
      background: rgba(255,255,255,0.25);
      border-radius: 2px;
      pointer-events: none;
    `,this.bar.appendChild(i),t.appendChild(this.bar),this.container.appendChild(this.label),this.container.appendChild(t),e.appendChild(this.container)}update(e,t){const i=Math.min(e/t,1)*100;this.bar.style.width=`${i}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${t}`,e>=t&&!this.reached?(this.reached=!0,this.bar.style.background="linear-gradient(90deg, var(--t-success), var(--t-primary))",this.bar.style.boxShadow="0 0 14px var(--t-shadow-glow)",this.bar.style.animation="barPulse 0.6s ease infinite"):e<t&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, var(--t-bar-start), var(--t-bar-end))",this.bar.style.boxShadow="",this.bar.style.animation="")}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class Vs{constructor(e){o(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 0.9rem;
      color: var(--t-text-dim);
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: right;
    `,e.appendChild(this.el)}update(e,t){const i=document.createElement("span");i.style.cssText="color: var(--t-primary); font-weight: bold;",i.textContent=String(e),this.el.innerHTML="";const s=document.createTextNode("Phase ");this.el.appendChild(s),this.el.appendChild(i),this.el.appendChild(document.createElement("br")),this.el.appendChild(document.createTextNode(`Stage ${t} / 3`))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let Je=!1;function $s(){if(Je)return;Je=!0;const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l)}class qs{constructor(e){o(this,"el");o(this,"medalCounter");o(this,"quotaBar");o(this,"phaseIndicator");o(this,"throwHint");o(this,"inventoryPanel");o(this,"activeItemPanel");o(this,"countdownEl");o(this,"feverBannerEl");o(this,"comboEl");o(this,"edgeGlowEl");o(this,"onUseActiveCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new Us(this.el),this.quotaBar=new Ws(this.el),this.phaseIndicator=new Vs(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.85rem;
      color: var(--t-text-dim);
      text-align: center;
    `,this.throwHint.textContent="Tap / Click to throw medal",this.el.appendChild(this.throwHint),this.inventoryPanel=document.createElement("div"),this.inventoryPanel.style.cssText=`
      position: absolute; bottom: 60px; right: 16px;
      max-width: 200px; pointer-events: none;
    `,this.el.appendChild(this.inventoryPanel),this.activeItemPanel=document.createElement("div"),this.activeItemPanel.style.cssText=`
      position: absolute; bottom: 60px; left: 16px;
      max-width: 220px; pointer-events: all;
    `,this.el.appendChild(this.activeItemPanel),this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      pointer-events: none;
    `,this.countdownEl.innerHTML=`
      <div class="cd-number" style="font-size: 6rem; font-weight: bold; color: #ff4444;
        text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; line-height: 1;">10</div>
      <div style="font-size: 1rem; color: #ff8888; letter-spacing: 0.2em; margin-top: 8px;">MEDAL EMPTY</div>
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
      position: absolute; top: 56px; left: 50%; transform: translateX(-50%);
      display: none; flex-direction: column; align-items: center;
      pointer-events: none; z-index: 10;
    `,this.feverBannerEl.innerHTML=`
      <div style="
        font-size: 2.6rem; font-weight: 900; letter-spacing: 0.25em;
        color: var(--t-primary);
        animation: feverPulse 0.7s ease-in-out infinite;
        text-transform: uppercase;
      ">FEVER!</div>
      <div style="
        width: 200px; height: 5px; background: rgba(255,255,255,0.15);
        border-radius: 3px; margin-top: 6px; overflow: hidden;
      ">
        <div class="fever-timer-bar" style="
          height: 100%; background: var(--t-primary);
          border-radius: 3px;
        "></div>
      </div>
    `,this.el.appendChild(this.feverBannerEl),this.comboEl=document.createElement("div"),this.comboEl.style.cssText=`
      position: absolute; bottom: 28%; left: 50%;
      transform: translateX(-50%);
      display: none; pointer-events: none; z-index: 10;
      font-size: 2rem; font-weight: bold;
      color: var(--t-secondary);
      text-shadow: 0 0 12px var(--t-secondary);
      letter-spacing: 0.1em;
    `,this.el.appendChild(this.comboEl),e.appendChild(this.el),$s()}update(e,t,i,s,a){this.medalCounter.update(e),this.quotaBar.update(t,i),this.phaseIndicator.update(s,a)}showFloatingText(e,t="var(--t-primary)"){let i="2rem";const s=parseInt(e.replace("+",""),10);isNaN(s)||(s>=5?i="2.6rem":s>=2?i="2.2rem":i="1.6rem");const a=document.createElement("div");a.style.cssText=`
      position: absolute;
      bottom: 30%;
      left: 50%;
      transform: translateX(-50%) scale(1.5);
      font-size: ${i};
      font-weight: bold;
      color: ${t};
      text-shadow: 0 0 8px ${t};
      pointer-events: none;
      animation: squashIn 0.12s ease forwards;
    `,a.textContent=e,this.el.appendChild(a),setTimeout(()=>{a.style.animation="floatUp 1.2s ease-out forwards"},120),setTimeout(()=>a.remove(),1320)}updateInventory(e){if(this.inventoryPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Items",this.inventoryPanel.appendChild(t);for(const i of e){const s=ge(i.definitionId);if(!s)continue;const a=document.createElement("div");a.style.cssText=`
        background: rgba(0,0,0,0.6);
        border: 1px solid var(--t-track-bg);
        border-radius: 4px;
        padding: 4px 8px;
        margin-bottom: 4px;
        font-size: 0.75rem;
        color: var(--t-text-bright);
      `,a.textContent=s.name,this.inventoryPanel.appendChild(a)}}updateActiveItems(e){if(this.activeItemPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Active Items",this.activeItemPanel.appendChild(t);for(const i of e){const s=document.createElement("button"),a=i.remainingMs??0,n=a>0,r=n?` (${Math.ceil(a/1e3)}s)`:"";s.style.cssText=`
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
      `,s.innerHTML=`<strong>${i.name}</strong> x${i.count}${r}`,s.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(c=>c(i.id))}),this.activeItemPanel.appendChild(s)}}showFever(e){this.edgeGlowEl.style.opacity="1",this.feverBannerEl.style.display="flex";const t=this.feverBannerEl.querySelector(".fever-timer-bar");t&&(t.style.animation="none",t.style.width="100%",t.offsetWidth,t.style.animation=`feverBarShrink ${e}ms linear forwards`),this.flashScreen("rgba(255,215,0,0.22)")}hideFever(){this.edgeGlowEl.style.opacity="0",this.feverBannerEl.style.display="none",this.flashScreen("rgba(100,100,200,0.18)")}showCombo(e){if(e<2){this.comboEl.style.display="none";return}this.comboEl.style.display="block",this.comboEl.textContent=`COMBO ×${e}`,this.comboEl.style.animation="none",this.comboEl.offsetWidth,this.comboEl.style.animation="comboIn 0.25s ease forwards";const t=Math.min(e*20,200);this.comboEl.style.filter=`hue-rotate(${t}deg)`}hideCombo(){this.comboEl.style.display="none"}flashScreen(e){const t=document.createElement("div");t.style.cssText=`
      position: absolute; inset: 0; background: ${e};
      pointer-events: none; border-radius: 4px;
      animation: flashOverlay 0.5s ease-out forwards;
    `,this.el.appendChild(t),setTimeout(()=>t.remove(),500)}onUseActive(e){this.onUseActiveCallbacks.push(e)}showCountdown(e){const t=this.countdownEl.querySelector(".cd-number");t&&(t.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}let et=!1;function Ys(){if(et)return;et=!0;const l=document.createElement("style");l.textContent=`
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(l)}class Qs{constructor(e){o(this,"el");o(this,"onContinueCallbacks",[]);o(this,"onSkipCallbacks",[]);o(this,"titleEl");o(this,"infoEl");o(this,"continueBtn");o(this,"shopBtn");o(this,"hideTimer",null);Ys(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay);
      pointer-events: all;
      gap: 16px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.titleEl=document.createElement("h2"),this.titleEl.style.cssText="font-size: 2rem; color: var(--t-success); margin-bottom: 8px;",this.infoEl=document.createElement("p"),this.infoEl.style.cssText="color: var(--t-text-dim); font-size: 0.9rem;";const t=document.createElement("div");t.style.cssText="display: flex; gap: 16px; margin-top: 16px;",this.continueBtn=this.createButton("NEXT STAGE →","var(--t-tertiary)",()=>{this.onContinueCallbacks.forEach(i=>i())}),this.shopBtn=this.createButton("GO TO SHOP (next phase)","#ff8800",()=>{this.onSkipCallbacks.forEach(i=>i())}),t.appendChild(this.continueBtn),t.appendChild(this.shopBtn),this.el.appendChild(this.titleEl),this.el.appendChild(this.infoEl),this.el.appendChild(t),e.appendChild(this.el)}createButton(e,t,i){const s=document.createElement("button");return s.style.cssText=`
      font-size: 1rem;
      padding: 12px 32px;
      background: transparent;
      border: 2px solid ${t};
      color: ${t};
      cursor: pointer;
      letter-spacing: 0.1em;
      border-radius: 4px;
      transition: background 0.2s;
    `,s.textContent=e,s.addEventListener("mouseenter",()=>s.style.background=`${t}22`),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",i),s}show(e,t,i,s,a){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),i?(this.titleEl.textContent="PHASE CLEAR!",this.titleEl.style.color="var(--t-primary)",this.continueBtn.style.display="none",this.shopBtn.textContent="GO TO SHOP →"):(this.titleEl.textContent="STAGE CLEAR!",this.titleEl.style.color="var(--t-success)",this.continueBtn.style.display="",this.shopBtn.textContent="GO TO SHOP (skip to next phase)"),this.infoEl.textContent=`Phase ${e} - Stage ${t} | ${Math.floor(s)} / ${a}`,this.titleEl.style.animation="none",this.titleEl.offsetWidth,this.titleEl.style.animation="slideDown 0.4s ease forwards",this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let tt=!1;function Zs(){if(tt)return;tt=!0;const l=document.createElement("style");l.textContent=`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(l)}class Xs{constructor(e){o(this,"el");o(this,"onRetryCallbacks",[]);o(this,"hideTimer",null);Zs(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      gap: 12px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="";const t=document.createElement("h2");t.style.cssText=`
      font-size: 2.5rem;
      color: #ff4444;
      margin-bottom: 8px;
      animation: fadeInUp 0.4s ease forwards;
    `,t.textContent="GAME OVER";const i=e.isNewBest?document.createElement("div"):null;i&&(i.style.cssText=`
        font-size: 1.1rem;
        color: var(--t-primary);
        margin-bottom: 8px;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: 0.1s;
        opacity: 0;
      `,i.textContent="★ NEW BEST! ★");const s=[`Reached: Phase ${e.phase} - Stage ${e.stage}`,`Medals Collected: ${e.totalMedalsCollected}`,`Items Collected: ${e.totalItemsCollected}`,`Best: Phase ${e.bestPhase} - Stage ${e.bestStage}`],a=document.createElement("div");a.style.cssText="margin: 8px 0 24px; text-align: center;",s.forEach((r,c)=>{const h=document.createElement("div");h.style.cssText=`
        color: var(--t-text-dim);
        font-size: 0.95rem;
        line-height: 1.8;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: ${.15+c*.1}s;
        opacity: 0;
      `,h.textContent=r,a.appendChild(h)});const n=document.createElement("button");n.style.cssText=`
      font-size: 1.1rem;
      padding: 12px 40px;
      background: transparent;
      border: 2px solid #ff4444;
      color: #ff4444;
      cursor: pointer;
      letter-spacing: 0.15em;
      border-radius: 4px;
      transition: background 0.2s;
      animation: fadeInUp 0.4s ease forwards;
      animation-delay: ${.15+s.length*.1}s;
      opacity: 0;
    `,n.textContent="TRY AGAIN",n.addEventListener("mouseenter",()=>n.style.background="#ff444422"),n.addEventListener("mouseleave",()=>n.style.background="transparent"),n.addEventListener("click",()=>this.onRetryCallbacks.forEach(r=>r())),this.el.appendChild(t),i&&this.el.appendChild(i),this.el.appendChild(a),this.el.appendChild(n),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onRetry(e){this.onRetryCallbacks.push(e)}}const Ks=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class js{constructor(e){o(this,"el");o(this,"onSelectCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay);
      pointer-events: all;
      gap: 24px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="";const t=document.createElement("h2");t.style.cssText="font-size: 1.8rem; color: #aa44ff; margin-bottom: 8px;",t.textContent="CHOOSE A SKILL";const i=document.createElement("p");i.style.cssText="color: var(--t-text-dim); font-size: 0.85rem; margin-bottom: 16px;",i.textContent="Select one permanent skill";const s=document.createElement("div");s.style.cssText="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;";for(const a of e)s.appendChild(this.createCard(a));this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}createCard(e){const i={Gold:"#ffd700",Alchemy:"#00ff88",Throw:"#ff8800",Guard:"#4488ff"}[e.tag]??"#aaaacc",s=document.createElement("div");s.style.cssText=`
      width: 200px;
      padding: 20px;
      ${Ks}
      background: rgba(0,0,0,0.6);
      border: 2px solid ${i}44;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    `;const a=document.createElement("div");a.style.cssText=`font-size: 0.7rem; color: ${i}; margin-bottom: 8px; letter-spacing: 0.1em;`,a.textContent=`[${e.tag}] · ${e.rarity}`;const n=document.createElement("div");n.style.cssText="font-size: 1rem; color: var(--t-text-bright); font-weight: bold; margin-bottom: 8px;",n.textContent=e.name;const r=document.createElement("div");return r.style.cssText="font-size: 0.8rem; color: var(--t-text-dim); line-height: 1.4;",r.textContent=e.description,s.appendChild(a),s.appendChild(n),s.appendChild(r),s.addEventListener("mouseenter",()=>{s.style.borderColor=i,s.style.background=`${i}11`,s.style.transform="translateY(-2px)",s.style.boxShadow=`0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${i}22`}),s.addEventListener("mouseleave",()=>{s.style.borderColor=`${i}44`,s.style.background="rgba(0,0,0,0.6)",s.style.transform="translateY(0)",s.style.boxShadow=""}),s.addEventListener("click",()=>{this.onSelectCallbacks.forEach(c=>c(e.id))}),s}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const st=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class Js{constructor(e){o(this,"el");o(this,"moneyEl");o(this,"inventoryEl");o(this,"onBuyMedalsCallbacks",[]);o(this,"onSellCallbacks",[]);o(this,"onContinueCallbacks",[]);o(this,"onBuyActiveCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      padding: 32px;
      overflow-y: auto;
      font-size: 0.9rem;
      opacity: 0;
      transition: opacity 280ms ease;
    `;const t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;";const i=document.createElement("h2");i.style.cssText="font-size: 1.8rem; color: var(--t-primary);",i.textContent="SHOP",this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText="color: var(--t-primary); font-size: 1.1rem;";const s=document.createElement("button");s.style.cssText=`
      padding: 10px 28px;
      background: transparent;
      border: 2px solid var(--t-success);
      color: var(--t-success);
      cursor: pointer;
      font-size: 0.9rem;
      border-radius: 4px;
      transition: background 0.2s;
    `,s.textContent="START NEXT PHASE →",s.addEventListener("mouseenter",()=>s.style.background="rgba(0,255,136,0.13)"),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",()=>this.onContinueCallbacks.forEach(a=>a())),t.appendChild(i),t.appendChild(this.moneyEl),t.appendChild(s),this.inventoryEl=document.createElement("div"),this.inventoryEl.style.cssText="margin-top: 16px;",this.el.appendChild(t),this.el.appendChild(this.inventoryEl),e.appendChild(this.el)}show(e,t,i=[]){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.moneyEl.textContent=`Shop Money: ${e} G`,this.renderContent(e,t,i),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}renderContent(e,t,i){this.inventoryEl.innerHTML="";const s=document.createElement("div");s.style.cssText="margin-bottom: 28px;";const a=document.createElement("h3");a.style.cssText="color: var(--t-primary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",a.textContent="BUY MEDALS",s.appendChild(a);const n=document.createElement("div");n.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const r=[{count:10,price:50,label:"10 medals"},{count:30,price:130,label:"30 medals"},{count:100,price:400,label:"100 medals"}];for(const y of r){const T=e>=y.price,_=document.createElement("button");_.style.cssText=`
        padding: 12px 18px;
        background: transparent;
        border: 2px solid ${T?"var(--t-primary)":"#555"};
        color: ${T?"var(--t-primary)":"#555"};
        cursor: ${T?"pointer":"default"};
        font-size: 0.85rem;
        border-radius: 6px;
        transition: background 0.2s, transform 0.15s;
        min-width: 120px;
        text-align: center;
      `,_.innerHTML=`<strong>${y.label}</strong><br>${y.price} G`,T&&(_.addEventListener("mouseenter",()=>{_.style.background="rgba(200,131,26,0.13)",_.style.transform="translateY(-2px)"}),_.addEventListener("mouseleave",()=>{_.style.background="transparent",_.style.transform="translateY(0)"}),_.addEventListener("click",()=>{this.onBuyMedalsCallbacks.forEach(E=>E(y.count))})),n.appendChild(_)}s.appendChild(n),this.inventoryEl.appendChild(s);const c=document.createElement("hr");c.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(c);const h=document.createElement("div");h.style.cssText="margin-bottom: 28px;";const g=document.createElement("h3");g.style.cssText="color: var(--t-tertiary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",g.textContent="ACTIVE ITEMS (buy to use during game)",h.appendChild(g);const d=document.createElement("div");d.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const p=new Map(i.map(y=>[y.id,y.count]));for(const y of Oe){const T=e>=y.price,_=p.get(y.id)??0,E=document.createElement("div");E.style.cssText=`
        padding: 14px;
        ${st}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${T?y.color:"#555"};
        min-width: 160px;
        transition: transform 0.15s, box-shadow 0.15s;
      `;const S=document.createElement("div");S.style.cssText=`color: ${y.color}; font-size: 0.95rem; font-weight: bold; margin-bottom: 4px;`,S.textContent=y.name;const x=document.createElement("div");x.style.cssText="color: var(--t-text-dim); font-size: 0.75rem; margin-bottom: 8px;",x.textContent=y.description;const H=document.createElement("div");H.style.cssText="color: #88cc88; font-size: 0.75rem; margin-bottom: 8px;",H.textContent=`Owned: ${_}`;const A=document.createElement("button");A.style.cssText=`
        padding: 6px 14px;
        background: transparent;
        border: 1px solid ${T?y.color:"#555"};
        color: ${T?y.color:"#555"};
        cursor: ${T?"pointer":"default"};
        font-size: 0.8rem;
        border-radius: 4px;
        transition: background 0.2s;
      `,A.textContent=`Buy ${y.price} G`,T&&(A.addEventListener("mouseenter",()=>A.style.background=`${y.color}22`),A.addEventListener("mouseleave",()=>A.style.background="transparent"),E.addEventListener("mouseenter",()=>{E.style.transform="translateY(-2px)",E.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),E.addEventListener("mouseleave",()=>{E.style.transform="translateY(0)",E.style.boxShadow=""}),A.addEventListener("click",()=>{this.onBuyActiveCallbacks.forEach(O=>O(y.id))})),E.appendChild(S),E.appendChild(x),E.appendChild(H),E.appendChild(A),d.appendChild(E)}h.appendChild(d),this.inventoryEl.appendChild(h);const m=document.createElement("hr");m.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(m);const b=document.createElement("div"),f=document.createElement("h3");if(f.style.cssText="color: var(--t-text-dim); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",f.textContent="YOUR ITEMS (click to sell)",b.appendChild(f),t.length===0){const y=document.createElement("p");y.style.cssText="color: var(--t-text-dim); opacity: 0.5;",y.textContent="No items collected yet.",b.appendChild(y)}else{const y=document.createElement("div");y.style.cssText="display: flex; flex-wrap: wrap; gap: 12px;";for(const T of t){const _=ge(T.definitionId);if(!_)continue;const E=document.createElement("div");E.style.cssText=`
          width: 160px;
          padding: 14px;
          ${st}
          background: rgba(0,0,0,0.5);
          border: 1px solid var(--t-track-bg);
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `,E.innerHTML=`
          <div style="color:var(--t-text-bright);font-size:0.9rem;margin-bottom:4px;">${_.name}</div>
          <div style="color:var(--t-text-dim);font-size:0.75rem;">${_.rarity}</div>
          <div style="color:var(--t-primary);font-size:0.85rem;margin-top:8px;">Sell: ${_.sellPrice} G</div>
        `,E.addEventListener("mouseenter",()=>{E.style.borderColor="var(--t-primary)",E.style.transform="translateY(-2px)",E.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),E.addEventListener("mouseleave",()=>{E.style.borderColor="var(--t-track-bg)",E.style.transform="translateY(0)",E.style.boxShadow=""}),E.addEventListener("click",()=>{this.onSellCallbacks.forEach(S=>S(T.instanceId))}),y.appendChild(E)}b.appendChild(y)}this.inventoryEl.appendChild(b)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}const ei={name:"cyber",displayName:"CYBER NEON",ui:{bgOverlay:"rgba(10,10,30,0.85)",bgOverlayDark:"rgba(10,5,20,0.92)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.3)",secondary:"#00ffcc",tertiary:"#00aaff",success:"#00ff88",textDim:"#aaaacc",textBright:"#ffffff",borderFaint:"rgba(255,255,255,0.13)",panelBg:"rgba(255,255,255,0.05)",trackBg:"#333355",barStart:"#4444ff",barEnd:"#00ffaa",shadowGlow:"rgba(255,215,0,0.67)"},scene:{background:1979506,fogColor:1979506,cabinetColor:2236734,brassColor:9474232,brassRoughness:.15,brassMetalness:.92,insetColor:657950,screenBase:2080,screenEmissive:4160,groundColor:2437216,primaryNeon:16766720,secondaryNeon:65484,tertiaryNeon:4482815,starColor:8952319,gridColorA:1714782,gridColorB:924218,pusherHousingColor:2631754,bloomStrength:.55,bloomThreshold:.82,bloomRadius:.4,fieldTexBase:"#2a2a4e",pusherTexBase:"#3a3a6e",wallTexBase:"#1a1a3e"},lights:{ambientColor:5793960,ambientIntensity:1.8,fillColor:4210943,fillIntensity:.7,warmPointColor:16765056,warmPointIntensity:2,coolPointColor:4482815,coolPointIntensity:1.4}},ut={name:"steampunk",displayName:"STEAMPUNK",ui:{bgOverlay:"rgba(24,14,4,0.85)",bgOverlayDark:"rgba(18,10,2,0.92)",primary:"#ff9820",primaryFaint:"rgba(255,152,32,0.35)",secondary:"#ffb830",tertiary:"#d46820",success:"#ffb020",textDim:"#c8a870",textBright:"#ffeec0",borderFaint:"rgba(255,152,32,0.30)",panelBg:"rgba(255,152,32,0.08)",trackBg:"#3a2010",barStart:"#a05010",barEnd:"#ff9820",shadowGlow:"rgba(255,152,32,0.75)"},scene:{background:4859924,fogColor:4859924,cabinetColor:3941906,brassColor:12619840,brassRoughness:.35,brassMetalness:.78,insetColor:1182724,screenBase:1575936,screenEmissive:5251072,groundColor:3940368,primaryNeon:16750624,secondaryNeon:16758832,tertiaryNeon:13920288,starColor:16760896,gridColorA:6962196,gridColorB:3809288,pusherHousingColor:3678228,bloomStrength:.8,bloomThreshold:.76,bloomRadius:.55,fieldTexBase:"#2e1e0c",pusherTexBase:"#3a2210",wallTexBase:"#261608"},lights:{ambientColor:10514480,ambientIntensity:2.2,fillColor:10510384,fillIntensity:.9,warmPointColor:16748592,warmPointIntensity:2.8,coolPointColor:9455640,coolPointIntensity:1}},ti={name:"royal",displayName:"ROYAL CASINO",ui:{bgOverlay:"rgba(8,4,24,0.88)",bgOverlayDark:"rgba(5,2,16,0.95)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.28)",secondary:"#00e8ff",tertiary:"#ff28a0",success:"#40ff90",textDim:"#b090d0",textBright:"#fff8e0",borderFaint:"rgba(255,215,0,0.22)",panelBg:"rgba(255,215,0,0.06)",trackBg:"#1a083a",barStart:"#8040ff",barEnd:"#ffd700",shadowGlow:"rgba(255,215,0,0.78)"},scene:{background:1181244,fogColor:1181244,cabinetColor:1969720,brassColor:13934608,brassRoughness:.08,brassMetalness:.98,insetColor:656416,screenBase:524320,screenEmissive:3805344,groundColor:2757712,primaryNeon:16766720,secondaryNeon:59647,tertiaryNeon:16722080,starColor:16769152,gridColorA:2624080,gridColorB:1312048,pusherHousingColor:1706032,bloomStrength:1.1,bloomThreshold:.62,bloomRadius:.5,fieldTexBase:"#12082a",pusherTexBase:"#1a0c34",wallTexBase:"#0e0620"},lights:{ambientColor:7352480,ambientIntensity:2,fillColor:5251264,fillIntensity:.85,warmPointColor:16765056,warmPointIntensity:3.2,coolPointColor:6295807,coolPointIntensity:2}},pt={cyber:ei,steampunk:ut,royal:ti};let it=!1;function si(){if(it)return;it=!0;const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l)}class ii{constructor(e){o(this,"el");o(this,"onVolumeChangeCallbacks",[]);o(this,"onThemeChangeCallbacks",[]);o(this,"onCloseCallbacks",[]);o(this,"hideTimer",null);o(this,"themeBtns",new Map);si(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="",this.themeBtns.clear(),this.buildContent(e),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}buildContent(e){const t=document.createElement("div");t.style.cssText=`
      background: var(--t-panel-bg);
      backdrop-filter: blur(16px);
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 40px 48px;
      min-width: 420px;
      max-width: 520px;
      width: 90%;
    `;const i=document.createElement("h2");i.style.cssText="font-size: 1.6rem; color: var(--t-primary); margin-bottom: 32px; letter-spacing: 0.2em; text-align: center;",i.textContent="SETTINGS",t.appendChild(i);const s=document.createElement("div");s.style.cssText="margin-bottom: 32px;";const a=document.createElement("div");a.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",a.textContent="VOLUME",s.appendChild(a);const n=[{label:"Master",type:"master",value:e.masterVolume},{label:"BGM",type:"bgm",value:e.bgmVolume},{label:"SFX",type:"sfx",value:e.sfxVolume}];for(const b of n){const f=document.createElement("div");f.style.cssText="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;";const y=document.createElement("div");y.style.cssText="font-size: 0.85rem; color: var(--t-text-bright); width: 52px; flex-shrink: 0;",y.textContent=b.label;const T=document.createElement("input");T.type="range",T.min="0",T.max="1",T.step="0.05",T.value=String(b.value),T.className="settings-slider",T.style.cssText="flex: 1;";const _=document.createElement("div");_.style.cssText="font-size: 0.8rem; color: var(--t-primary); width: 36px; text-align: right; flex-shrink: 0;",_.textContent=`${Math.round(b.value*100)}%`,T.addEventListener("input",()=>{const E=parseFloat(T.value);_.textContent=`${Math.round(E*100)}%`,this.onVolumeChangeCallbacks.forEach(S=>S(b.type,E))}),f.appendChild(y),f.appendChild(T),f.appendChild(_),s.appendChild(f)}t.appendChild(s);const r=document.createElement("hr");r.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(r);const c=document.createElement("div");c.style.cssText="margin-bottom: 32px;";const h=document.createElement("div");h.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",h.textContent="THEME",c.appendChild(h);const g=document.createElement("div");g.style.cssText="display: flex; gap: 10px; flex-wrap: wrap;";const d=["royal","cyber","steampunk"];for(const b of d){const f=b===e.theme,y=document.createElement("button");y.style.cssText=`
        flex: 1;
        padding: 12px 16px;
        background: ${f?"var(--t-primary)":"transparent"};
        border: 2px solid var(--t-primary);
        color: ${f?"var(--t-bg-overlay-dark)":"var(--t-primary)"};
        cursor: pointer;
        font-size: 0.85rem;
        border-radius: 8px;
        letter-spacing: 0.1em;
        transition: all 0.2s;
        font-weight: ${f?"bold":"normal"};
      `,y.textContent=pt[b].displayName,y.addEventListener("click",()=>{this.selectTheme(b),this.onThemeChangeCallbacks.forEach(T=>T(b))}),this.themeBtns.set(b,y),g.appendChild(y)}c.appendChild(g),t.appendChild(c);const p=document.createElement("hr");p.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(p);const m=document.createElement("button");m.style.cssText=`
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
    `,m.textContent="CLOSE",m.addEventListener("mouseenter",()=>{m.style.borderColor="var(--t-primary)",m.style.color="var(--t-primary)"}),m.addEventListener("mouseleave",()=>{m.style.borderColor="var(--t-border-faint)",m.style.color="var(--t-text-dim)"}),m.addEventListener("click",()=>{this.onCloseCallbacks.forEach(b=>b())}),t.appendChild(m),this.el.appendChild(t)}selectTheme(e){this.themeBtns.forEach((t,i)=>{const s=i===e;t.style.background=s?"var(--t-primary)":"transparent",t.style.color=s?"var(--t-bg-overlay-dark)":"var(--t-primary)",t.style.fontWeight=s?"bold":"normal"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onVolumeChange(e){this.onVolumeChangeCallbacks.push(e)}onThemeChange(e){this.onThemeChangeCallbacks.push(e)}onClose(e){this.onCloseCallbacks.push(e)}}class ai{constructor(e){o(this,"titleScreen");o(this,"gameScreen");o(this,"stageResultScreen");o(this,"resultScreen");o(this,"skillSelectScreen");o(this,"shopScreen");o(this,"settingsScreen");this.titleScreen=new Fs(e),this.gameScreen=new qs(e),this.stageResultScreen=new Qs(e),this.resultScreen=new Xs(e),this.skillSelectScreen=new js(e),this.shopScreen=new Js(e),this.settingsScreen=new ii(e),I.on("state:changed",({to:t})=>{this.handleStateChange(t)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case w.TITLE:this.titleScreen.show();break;case w.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case w.STAGE_CLEAR:break;case w.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,t,i,s,a,n,r){this.gameScreen.update(e,t,i,s,a),n&&this.gameScreen.updateInventory(n),r&&this.gameScreen.updateActiveItems(r)}}class ni{constructor(e){o(this,"throwCallbacks",[]);o(this,"enabled",!1);o(this,"onClick",e=>{if(!this.enabled)return;const t=e.clientX/window.innerWidth*2-1,i=e.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(s=>s(t,i))});o(this,"onTouch",e=>{if(!this.enabled)return;e.preventDefault();const t=e.changedTouches[0];if(!t)return;const i=t.clientX/window.innerWidth*2-1,s=t.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(a=>a(i,s))});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1})}enable(){this.enabled=!0}disable(){this.enabled=!1}onThrow(e){return this.throwCallbacks.push(e),()=>{const t=this.throwCallbacks.indexOf(e);t!==-1&&this.throwCallbacks.splice(t,1)}}dispose(){this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch)}}const K=class K{constructor(){o(this,"ctx",null);o(this,"masterGain",null);o(this,"sfxGain",null);o(this,"bgmGain",null);o(this,"bgmPlaying",!1);o(this,"bgmNextTime",0);o(this,"bgmSchedulerTimer",null);o(this,"bgmBeatIndex",0)}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.8,this.bgmGain.connect(this.masterGain)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getSfxGain(){return this.getCtx(),this.sfxGain}getBgmGain(){return this.getCtx(),this.bgmGain}setMasterVolume(e){this.getCtx(),this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}setBgmVolume(e){this.getCtx(),this.bgmGain&&(this.bgmGain.gain.value=Math.max(0,Math.min(1,e)))}setSfxVolume(e){this.getCtx(),this.sfxGain&&(this.sfxGain.gain.value=Math.max(0,Math.min(1,e)))}playThrow(){const e=this.getCtx(),t=this.getSfxGain(),i=e.sampleRate*.12,s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let h=0;h<i;h++)a[h]=Math.random()*2-1;const n=e.createBufferSource();n.buffer=s;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(800,e.currentTime),r.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),r.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(.4,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),n.connect(r),r.connect(c),c.connect(t),n.start(),n.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),t=this.getSfxGain(),i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const s=e.createGain();s.gain.setValueAtTime(.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),i.connect(s),s.connect(t),i.start(),i.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),t=this.getSfxGain();[523.25,659.25,783.99,1046.5].forEach((s,a)=>{this._playNote(e,t,"sine",s,e.currentTime+a*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),t=this.getSfxGain();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([s,a,n])=>{this._playNote(e,t,"square",s,e.currentTime+a,n,.2)})}playGameOver(){const e=this.getCtx(),t=this.getSfxGain();[440,349.23,293.66,220].forEach((s,a)=>{this._playNote(e,t,"sawtooth",s,e.currentTime+a*.22,.3,.18)})}playFeverStart(){const e=this.getCtx(),t=this.getSfxGain();[523.25,659.25,783.99,1046.5,1318.5].forEach((s,a)=>{this._playNote(e,t,"square",s,e.currentTime+a*.055,.18,.28)}),this._playNote(e,t,"sawtooth",110,e.currentTime,.35,.25)}playFeverEnd(){const e=this.getCtx(),t=this.getSfxGain();[880,659.25,523.25,392].forEach((s,a)=>{this._playNote(e,t,"sine",s,e.currentTime+a*.09,.25,.18)})}playCombo(e){const t=this.getCtx(),i=this.getSfxGain(),s=440*Math.pow(1.12,Math.min(e-2,8));this._playNote(t,i,"triangle",s,t.currentTime,.12,.22),this._playNote(t,i,"triangle",s*1.5,t.currentTime+.06,.1,.15)}playSkillSelected(){const e=this.getCtx(),t=this.getSfxGain();this._playNote(e,t,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),t=this.getSfxGain(),i=Math.floor(e.sampleRate*.02),s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=(Math.random()*2-1)*(1-c/a.length);const n=e.createBufferSource();n.buffer=s;const r=e.createGain();r.gain.value=.35,n.connect(r),r.connect(t),n.start()}startBGM(){if(this.bgmPlaying)return;this.bgmPlaying=!0;const e=this.getCtx();this.bgmNextTime=e.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,t=this.getBgmGain(),i=.3,s=100;for(;this.bgmNextTime<e.currentTime+i;)this._scheduleBGMBeat(e,t,this.bgmNextTime),this.bgmNextTime+=K.BEAT,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),s)}_scheduleBGMBeat(e,t,i){const s=this.bgmBeatIndex,a=K.BASS_FREQS,n=Math.floor(s/2)%a.length;s%2===0&&this._scheduleNote(e,t,"sawtooth",a[n],i,K.BEAT*1.8,.12);const r=K.MELODY;let c=s%8,h=0;for(const[f,y]of r){if(c>=h&&c<h+y){f>0&&this._scheduleNote(e,t,"square",f,i,K.BEAT*y*.85,.1);break}h+=y}const g=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),d=g.getChannelData(0);for(let f=0;f<d.length;f++)d[f]=(Math.random()*2-1)*(1-f/d.length);const p=e.createBufferSource();p.buffer=g;const m=e.createBiquadFilter();m.type="highpass",m.frequency.value=8e3;const b=e.createGain();b.gain.value=.04,p.connect(m),m.connect(b),b.connect(t),p.start(i)}_playNote(e,t,i,s,a,n,r){const c=e.createOscillator();c.type=i,c.frequency.value=s;const h=e.createGain();h.gain.setValueAtTime(r,a),h.gain.exponentialRampToValueAtTime(.001,a+n),c.connect(h),h.connect(t),c.start(a),c.stop(a+n)}_scheduleNote(e,t,i,s,a,n,r){this._playNote(e,t,i,s,a,n,r)}};o(K,"BPM",110),o(K,"BEAT",60/K.BPM),o(K,"BASS_FREQS",[110,98,82.41,110]),o(K,"MELODY",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]);let Le=K;const at="yukimedal_settings",me={masterVolume:.7,bgmVolume:.8,sfxVolume:1,theme:"royal"},ie=class ie{constructor(){o(this,"_data");this._data=this._load()}static getInstance(){return ie._instance||(ie._instance=new ie),ie._instance}get masterVolume(){return this._data.masterVolume}get bgmVolume(){return this._data.bgmVolume}get sfxVolume(){return this._data.sfxVolume}get theme(){return this._data.theme}get snapshot(){return{...this._data}}setMasterVolume(e){this._data.masterVolume=Math.max(0,Math.min(1,e)),this._save()}setBgmVolume(e){this._data.bgmVolume=Math.max(0,Math.min(1,e)),this._save()}setSfxVolume(e){this._data.sfxVolume=Math.max(0,Math.min(1,e)),this._save()}setTheme(e){this._data.theme=e,this._save()}_load(){try{const e=localStorage.getItem(at);if(e){const t=JSON.parse(e);return{masterVolume:typeof t.masterVolume=="number"?t.masterVolume:me.masterVolume,bgmVolume:typeof t.bgmVolume=="number"?t.bgmVolume:me.bgmVolume,sfxVolume:typeof t.sfxVolume=="number"?t.sfxVolume:me.sfxVolume,theme:["cyber","steampunk","royal"].includes(t.theme)?t.theme:me.theme}}}catch{}return{...me}}_save(){try{localStorage.setItem(at,JSON.stringify(this._data))}catch{}}};o(ie,"_instance",null);let ke=ie;const ae=class ae{constructor(){o(this,"_currentName","steampunk");o(this,"_currentTheme",ut);o(this,"_callbacks",[]);o(this,"_styleEl",null)}static getInstance(){return ae._instance||(ae._instance=new ae),ae._instance}get currentName(){return this._currentName}get currentTheme(){return this._currentTheme}applyTheme(e){const t=pt[e];if(!t)return;this._styleEl||(this._styleEl=document.getElementById("theme-vars"),this._styleEl||(this._styleEl=document.createElement("style"),this._styleEl.id="theme-vars",document.head.appendChild(this._styleEl)));const i=t.ui;this._styleEl.textContent=`:root {
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
}`,this._currentName=e,this._currentTheme=t,this._callbacks.forEach(s=>s(t))}onChange(e){this._callbacks.push(e)}};o(ae,"_instance",null);let De=ae;const te=class te{constructor(){o(this,"comboCount",0);o(this,"lastCollectMs",0);o(this,"feverEndMs",0);o(this,"_wasInFever",!1)}onMedalCollected(e){const t=Date.now();t-this.lastCollectMs<te.COMBO_WINDOW_MS?this.comboCount+=e:this.comboCount=e,this.lastCollectMs=t,I.emit("combo:updated",{count:this.comboCount}),this.comboCount>=te.COMBO_TO_FEVER&&!this.isFever&&this._triggerFever()}update(){const e=this.isFever;this._wasInFever&&!e&&(this._wasInFever=!1,this.comboCount=0,I.emit("fever:ended",void 0)),this._wasInFever=e}get isFever(){return Date.now()<this.feverEndMs}get feverRemainingMs(){return Math.max(0,this.feverEndMs-Date.now())}get comboCountValue(){return this.comboCount}reset(){this.comboCount=0,this.lastCollectMs=0,this.feverEndMs=0,this._wasInFever=!1}_triggerFever(){this.feverEndMs=Date.now()+te.FEVER_DURATION_MS,this.comboCount=0,this._wasInFever=!0,I.emit("fever:started",void 0)}};o(te,"COMBO_WINDOW_MS",5e3),o(te,"COMBO_TO_FEVER",6),o(te,"FEVER_DURATION_MS",1e4),o(te,"FEVER_SPEED_MULT",1.6);let Me=te;const nt=new Ut(.04,4,4);class oi{constructor(e){o(this,"particles",[]);o(this,"flashRings",[]);o(this,"scene");this.scene=e}spawnFlashRing(e,t,i,s){const a=new zt(.1,.35,16),n=new rt({color:s,transparent:!0,opacity:.9,side:Wt}),r=new $(a,n);r.position.set(e,t,i),r.rotation.x=-Math.PI/2,this.scene.add(r),this.flashRings.push({mesh:r,life:0,maxLife:.25})}spawnMedalCollect(e,t,i){this.spawnFlashRing(e,t,i,16766720);const s=12;for(let a=0;a<s;a++){const n=new Re({color:16766720,flatShading:!0,transparent:!0}),r=new $(nt,n);r.position.set(e,t,i);const c=a/s*Math.PI*2,h=1.5+Math.random()*3,g=new ee(Math.cos(c)*h*.5,2+Math.random()*3,Math.sin(c)*h*.5);this.scene.add(r),this.particles.push({mesh:r,velocity:g,life:0,maxLife:.6+Math.random()*.4})}}spawnItemCollect(e,t,i,s){this.spawnFlashRing(e,t,i,s);const a=20;for(let n=0;n<a;n++){const r=new Re({color:s,flatShading:!0,transparent:!0,emissive:s,emissiveIntensity:.8}),c=new $(nt,r);c.position.set(e,t,i);const h=n/a*Math.PI*2,g=2+Math.random()*2.5,d=new ee(Math.cos(h)*g,3+Math.random()*2,Math.sin(h)*g);this.scene.add(c),this.particles.push({mesh:c,velocity:d,life:0,maxLife:1.2+Math.random()*.4})}}update(e){const i=[];for(const a of this.particles){a.life+=e;const n=a.life/a.maxLife;a.velocity.y+=-9.8*e,a.mesh.position.addScaledVector(a.velocity,e),a.mesh.rotation.x+=e*5,a.mesh.rotation.z+=e*3,a.mesh.material.opacity=1-n,n>=1&&i.push(a)}for(const a of i)this.scene.remove(a.mesh),a.mesh.material.dispose(),this.particles.splice(this.particles.indexOf(a),1);const s=[];for(const a of this.flashRings){a.life+=e;const n=a.life/a.maxLife,r=1+n*2;a.mesh.scale.set(r,r,r),a.mesh.material.opacity=.9*(1-n),n>=1&&s.push(a)}for(const a of s)this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose(),this.flashRings.splice(this.flashRings.indexOf(a),1)}clear(){for(const e of this.particles)this.scene.remove(e.mesh),e.mesh.material.dispose();this.particles=[];for(const e of this.flashRings)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.flashRings=[]}}async function ri(){const l=ke.getInstance(),e=De.getInstance();e.applyTheme(l.theme);const t=new qt,i=new Yt,s=new Zt,a=new Ds,n=new Hs,r=document.getElementById("app"),c=document.getElementById("ui-root"),h=new os(r),g=new rs,d=new ls(h),p=new cs(h.scene);h.setCamera(g.camera);const m=e.currentTheme;h.applySceneTheme(m.scene),d.applyTheme(m.lights),p.applyTheme(m.scene);const b=new Rs,f=new Ps(t),y=new ks,T=new Bs,_=new Gs,E=new Os,S=new As(h,b,y,m.scene);S.setMedalQuotaMultiplierFn(()=>T.quotaPerMedalMultiplier);const x=new ai(c),H=new ni(h.renderer.domElement);x.titleScreen.applyTheme(l.theme);const A=new Me,O=new oi(h.scene),k=new Le;k.setMasterVolume(l.masterVolume),k.setBgmVolume(l.bgmVolume),k.setSfxVolume(l.sfxVolume),e.onChange(v=>{h.applySceneTheme(v.scene),d.applyTheme(v.lights),p.applyTheme(v.scene),x.titleScreen.applyTheme(v.name),S.physicsWorld.initialized&&S.rebuildFieldMesh(v.scene)}),x.titleScreen.onSettings(()=>{x.settingsScreen.show(l.snapshot)}),x.settingsScreen.onClose(()=>{x.settingsScreen.hide()}),x.settingsScreen.onVolumeChange((v,R)=>{v==="master"?(l.setMasterVolume(R),k.setMasterVolume(R)):v==="bgm"?(l.setBgmVolume(R),k.setBgmVolume(R)):(l.setSfxVolume(R),k.setSfxVolume(R))}),x.settingsScreen.onThemeChange(v=>{l.setTheme(v),e.applyTheme(v)});let U=0,B=!1,z=0,Y=0,Q=0;x.titleScreen.onStart(()=>{ye()}),x.stageResultScreen.onContinue(()=>{x.stageResultScreen.hide(),f.advanceStage(),ne()}),x.stageResultScreen.onSkip(()=>{x.stageResultScreen.hide(),f.advancePhase(),be()}),x.shopScreen.onBuyMedals(v=>{const R=v*u.MEDAL_BUY_PRICE;E.buyMedals(v)?x.shopScreen.show(E.money,y.getAll(),E.getOwnedActiveItems()):console.log(`Not enough shop money (need ${R} G, have ${E.money} G)`)}),x.shopScreen.onSell(v=>{const R=E.sellItem(v,y);a.addShopMoney(R),x.shopScreen.show(E.money,y.getAll(),E.getOwnedActiveItems())}),x.shopScreen.onBuyActive(v=>{E.buyActiveItem(v)&&x.shopScreen.show(E.money,y.getAll(),E.getOwnedActiveItems())}),x.shopScreen.onContinue(()=>{x.shopScreen.hide(),xe()}),x.skillSelectScreen.onSelect(v=>{T.addSkill(v,f.currentPhase),E.setSellMultiplier(T.itemSellMultiplier),x.skillSelectScreen.hide(),t.transition(w.STAGE_START),ne()}),x.resultScreen.onRetry(()=>{x.resultScreen.hide(),t.transition(w.TITLE),x.titleScreen.show()}),x.gameScreen.onUseActive(v=>{if(!t.is(w.PLAYING)||!E.useActiveItem(v))return;const R=Xe(v);if(!R)return;const L=Date.now()+R.durationMs;v==="side_guard"?(Q=L,S.addSideGuardWalls(),S.fieldMesh.addSideGuardMeshes(S.fieldMesh.group)):v==="medal_fever"&&(Y=L)}),H.onThrow((v,R)=>{if(!t.is(w.PLAYING))return;const L=v*(u.FIELD_WIDTH/2+.5),N=T.medalThrowCount;let q=0;for(let Z=0;Z<N&&E.spendMedal();Z++){const oe=(Z-Math.floor(N/2))*.6;S.throwMedal(L+oe,R),q++}q>0&&I.emit("medal:thrown",{count:q})}),I.on("quota:reached",()=>{t.is(w.PLAYING)&&(H.disable(),setTimeout(()=>{const v=T.onClearBonusMedals;v>0&&E.addMedals(v),f.clearCurrentStage();const R=f.isLastStageOfPhase;x.stageResultScreen.show(f.currentPhase,f.currentStage,R,b.currentValue,b.targetValue)},500))}),I.on("medal:collected",({count:v})=>{t.is(w.PLAYING)&&(x.gameScreen.showFloatingText(`+${v}`,v>=2?"var(--t-secondary)":"var(--t-primary)"),E.addMedals(v),A.onMedalCollected(v))}),I.on("fever:started",()=>{S.pusher.speedMultiplier=Me.FEVER_SPEED_MULT,x.gameScreen.showFever(1e4),k.playFeverStart(),g.shake(.2,.4);for(let v=0;v<12;v++)setTimeout(()=>{if(!t.is(w.PLAYING))return;const R=(Math.random()*2-1)*(u.FIELD_WIDTH/2-.5),L=(Math.random()*2-1)*(u.FIELD_DEPTH/4);S.medalSpawner.spawn(R,4.5,L,S.physicsWorld,S.physicsSync,S.collisionHandler,h)},v*250)}),I.on("fever:ended",()=>{S.pusher.speedMultiplier=1,x.gameScreen.hideFever(),x.gameScreen.hideCombo(),k.playFeverEnd()}),I.on("combo:updated",({count:v})=>{t.is(w.PLAYING)&&v>=2&&(x.gameScreen.showCombo(v),k.playCombo(v))}),I.on("medal:thrown",()=>k.playThrow()),I.on("medal:collected",()=>k.playMedalCollected()),I.on("quota:reached",()=>k.playQuotaReached()),I.on("stage:cleared",()=>k.playStageCleared()),I.on("game:over",()=>k.playGameOver()),I.on("skill:selected",()=>k.playSkillSelected()),I.on("medal:collected",()=>g.shake(.04,.08)),I.on("quota:reached",()=>g.shake(.15,.3)),I.on("stage:cleared",()=>g.shake(.28,.5)),I.on("game:over",()=>g.shake(.5,.8)),I.on("state:changed",({to:v})=>{v===w.PLAYING?k.startBGM():k.stopBGM()}),i.addUpdateFn(v=>{if(t.is(w.PLAYING)){const R=Date.now();Q>0&&R>Q&&(Q=0,S.removeSideGuardWalls(),S.fieldMesh.removeSideGuardMeshes(S.fieldMesh.group)),Y>0&&R>Y&&(Y=0);const L=Y>Date.now()?2:1;S.setMedalQuotaMultiplierFn(()=>T.quotaPerMedalMultiplier*L),S.update(v);const N=E.getOwnedActiveItems().map(q=>{const Z=Xe(q.id),oe=q.id==="side_guard"?Math.max(0,Q-Date.now()):q.id==="medal_fever"?Math.max(0,Y-Date.now()):0;return{...q,name:Z.name,color:Z.color,remainingMs:oe}});if(x.updateGameHUD(E.currentMedals,b.currentValue,b.targetValue,f.currentPhase,f.currentStage,y.getAll(),N),!B&&E.currentMedals<=0&&!b.isReached&&(B=!0,z=10,H.disable()),B&&z>0){const q=Math.ceil(z);z-=v;const Z=Math.ceil(z);Z!==q&&Z>0&&k.playCountdownTick(),z>0?x.gameScreen.showCountdown(z):(x.gameScreen.hideCountdown(),Ee())}}A.update(),O.update(v),p.update(v),g.update(v),h.render(g.camera)});function ye(){s.incrementRuns(),E.reset(),y.clear(),T.reset(),a.reset(),f.reset(),U=0,B=!1,z=0,Y=0,Q=0,A.reset(),S.pusher.speedMultiplier=1,t.transition(w.STAGE_START),ne()}async function ne(){const v=f.currentPhase,R=f.currentStage;B=!1,z=0,x.gameScreen.hideCountdown(),A.reset(),S.pusher.speedMultiplier=1,x.gameScreen.hideFever(),x.gameScreen.hideCombo(),b.startStage(v,R);try{S.physicsWorld.initialized?S.endStage():(ue(!0),await S.init(),ue(!1))}catch(L){console.error("Field init failed:",L),ue(!1);return}S.startStage(v,R),f.startCurrentStage(),H.enable()}function be(){S.endStage(),t.transition(w.SHOP),x.shopScreen.show(E.money,y.getAll(),E.getOwnedActiveItems())}function xe(){t.transition(w.SKILL_SELECT);const v=_.pickChoices(u.SKILL_CHOICES,T.getOwnedSkills(),Date.now());x.skillSelectScreen.show(v)}function Ee(){if(U>0){U--,z=0,x.gameScreen.hideCountdown(),H.enable(),B=!1;return}S.endStage();const v=n.calculate(a.snapshot,s);s.updateBest(v.phase,v.stage),t.transition(w.GAME_OVER),t.transition(w.RESULT),x.resultScreen.show(v)}const se=document.createElement("div");se.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: var(--t-bg-overlay-dark); color: var(--t-primary);
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,se.textContent="LOADING...",c.appendChild(se);function ue(v){se.style.display=v?"flex":"none"}I.on("skill:selected",()=>{U=Math.max(U,T.gameOverShields)}),i.start(),t.transition(w.TITLE),x.titleScreen.show(),console.log("YukiMedal initialized")}ri().catch(console.error);
