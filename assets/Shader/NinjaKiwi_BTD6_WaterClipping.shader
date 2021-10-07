//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/WaterClipping" {
Properties {
_FlowingSpeed ("FlowingSpeed", Range(1, 20)) = 5
_DisplacementTexture ("DisplacementTexture", 2D) = "white" { }
_DisplAmount ("DisplAmount", Range(0, 0.1)) = 1
_NoiseTexture ("NoiseTexture", 2D) = "white" { }
_TopLight ("TopLight", Color) = (0.514151,1,0.9089109,0)
_TopDark ("TopDark", Color) = (0,0.5019608,1,1)
_BotLight ("BotLight", Color) = (0.114142,0.8962264,0.4080679,0)
_BotDark ("BotDark", Color) = (0.126157,0.1298292,0.5943396,1)
_MaxStep ("MaxStep", Range(0, 4)) = 0
_MinStep ("MinStep", Range(-1, 1)) = -1
_Clipping ("Clipping", Range(0, 1)) = 0
}
SubShader {
 Tags { "QUEUE" = "Transparent" }
 Pass {
  Tags { "QUEUE" = "Transparent" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  ZWrite Off
  GpuProgramID 36997
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