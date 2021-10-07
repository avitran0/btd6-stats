//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/Waterfall" {
Properties {
_FlowingSpeed ("FlowingSpeed", Range(1, 20)) = 5
_DisplacementTexture ("DisplacementTexture", 2D) = "white" { }
_DisplAmount ("DisplAmount", Range(0, 0.1)) = 1
_NoiseTexture ("NoiseTexture", 2D) = "white" { }
_TopLight ("TopLight", Color) = (0.514151,1,0.9089109,0)
_TopDark ("TopDark", Color) = (0,0.5019608,1,1)
_BotLight ("BotLight", Color) = (0.114142,0.8962264,0.4080679,0)
_BotDark ("BotDark", Color) = (0.126157,0.1298292,0.5943396,1)
_BotThreshold ("BotThreshold", Range(0, 1)) = 0.08
_BotThresholdAmount ("BotThresholdAmount", Range(0, 0.5)) = 1
_VertexIntensity ("VertexIntensity", Float) = 1
_BotThresholdColor ("BotThresholdColor", Color) = (1,1,1,0)
_MaxStep ("MaxStep", Range(0, 4)) = 0
_MinStep ("MinStep", Range(-1, 1)) = -1
_TInt ("TInt", Color) = (1,0,0,0)
[Toggle] _VertexAnimation ("VertexAnimation", Float) = 0
}
SubShader {
 LOD 100
 Tags { "RenderType" = "Opaque" }
 Pass {
  LOD 100
  Tags { "RenderType" = "Opaque" }
  GpuProgramID 5219
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
Fallback "Unlit/Color"
}