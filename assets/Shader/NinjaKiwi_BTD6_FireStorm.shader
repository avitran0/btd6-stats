//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/FireStorm" {
Properties {
_TintColor ("Tint Color", Color) = (0.5,0.5,0.5,0.5)
_MainTex ("Particle Texture", 2D) = "white" { }
_InvFade ("Soft Particles Factor", Range(0.01, 3)) = 1
_Color0 ("Color 0", Color) = (0.8301887,0.1839813,0.07440368,0)
_Color1 ("Color 1", Color) = (0.8679245,0.5967166,0.08597365,0)
_Min ("Min", Range(0, 1)) = 0.4368961
_Max ("Max", Range(0, 1)) = 0.4368961
_AlphaMin ("AlphaMin", Range(0, 1)) = 0
_AlphaMax ("AlphaMax", Range(0, 1)) = 0
[Toggle] _HighlightVFX ("HighlightVFX", Float) = 1
[Toggle] _CentreVFX ("CentreVFX", Float) = 1
_BrightnessColor ("BrightnessColor", Color) = (1,1,1,0)
_HighlightPow ("HighlightPow", Float) = 0
_HighlightIntensity ("HighlightIntensity", Range(0, 3)) = 0
}
SubShader {
 Tags { "IGNOREPROJECTOR" = "true" "PreviewType" = "Plane" "QUEUE" = "Transparent" "RenderType" = "Transparent" }
 Pass {
  Tags { "IGNOREPROJECTOR" = "true" "PreviewType" = "Plane" "QUEUE" = "Transparent" "RenderType" = "Transparent" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  ZWrite Off
  Cull Off
  GpuProgramID 62916
Program "vp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "SOFTPARTICLES_ON" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "INSTANCING_ON" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "INSTANCING_ON" "SOFTPARTICLES_ON" }
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "SOFTPARTICLES_ON" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "INSTANCING_ON" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "INSTANCING_ON" "SOFTPARTICLES_ON" }
"// shader disassembly not supported on DXBC"
}
}
}
}
}