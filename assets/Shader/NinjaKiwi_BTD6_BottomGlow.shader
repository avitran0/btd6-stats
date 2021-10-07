//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/BottomGlow" {
Properties {
[Header(Color Settings)] [Space] _MainTex ("MainTex", 2D) = "white" { }
_Tint ("Tint", Color) = (0,0,0,0)
_TintIntensity ("TintIntensity", Float) = 0
[Space(30)] [Header(Glow Settings)] [Space] _GlowColor ("GlowColor", Color) = (0,0,0,0)
_GlowIntensity ("GlowIntensity", Float) = 0
_StartingPoint ("StartingPoint", Range(-10, 20)) = 0
_GlowDistribution ("GlowDistribution", Float) = 0
_NoiseTex ("GlowNoise", 2D) = "white" { }
}
SubShader {
 Tags { "RenderType" = "Opaque" }
 Pass {
  Name "Unlit"
  Tags { "RenderType" = "Opaque" }
  GpuProgramID 1192
Program "vp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
}
}
}
Fallback "Mobile/Unlit"
}