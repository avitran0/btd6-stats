//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/Shadow" {
Properties {
_MainTex ("Diffuse", 2D) = "white" { }
}
SubShader {
 Tags { "QUEUE" = "Geometry-1" "RenderType" = "Transparent" }
 Pass {
  Tags { "QUEUE" = "Geometry-1" "RenderType" = "Transparent" }
  Blend One OneMinusSrcAlpha, One OneMinusSrcAlpha
  ZTest Always
  ZWrite Off
  GpuProgramID 7848
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