//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/VertexMoveWPOXZ" {
Properties {
[Header(Color Settings)] [Space] _MainTex ("MainTex", 2D) = "white" { }
_Tint ("MainTex Tint", Color) = (0,0,0,0)
[Space(30)] [Header(Vertex Animation Settings)] [Space] _WorldRandomScale ("WorldRandomScale", Range(0, 1)) = 0.06
_Speed ("Speed", Range(0, 10)) = 0.09411767
_BendAmountX ("BendAmountX", Range(0, 20)) = 0.09411767
_BendAmountZ ("BendAmountZ", Range(0, 20)) = 0.09411767
_VertexNoise ("VertexNoise", 2D) = "white" { }
}
SubShader {
 LOD 100
 Tags { "RenderType" = "Opaque" }
 Pass {
  Name "Unlit"
  LOD 100
  Tags { "RenderType" = "Opaque" }
  GpuProgramID 55016
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