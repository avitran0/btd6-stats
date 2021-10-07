//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/FireBallCore" {
Properties {
_FresInner ("FresInner", Color) = (0,0,0,0)
_InnerIntensity ("InnerIntensity", Float) = 0.6
_FresOuter ("FresOuter", Color) = (0,0,0,0)
_OuterIntensity ("OuterIntensity", Float) = 0.6
_FlameColor ("FlameColor", Color) = (1,0,0,0)
_flameIntensity ("flameIntensity", Float) = 0
_PulseColor ("PulseColor", Color) = (1,1,1,0)
_PulaseIntensity ("PulaseIntensity", Float) = 1
_Pulse ("Pulse", 2D) = "white" { }
_FresPow ("FresPow", Range(0, 3)) = 2
_Scale ("Scale", Range(-1, 0)) = -0.7
_Bias ("Bias", Range(0, 1)) = 0.6
}
SubShader {
 Tags { "QUEUE" = "Transparent+1" "RenderType" = "Transparent" }
 Pass {
  Tags { "QUEUE" = "Transparent+1" "RenderType" = "Transparent" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  ZWrite Off
  GpuProgramID 42108
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
}