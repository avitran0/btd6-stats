//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "DiscoBall" {
Properties {
_Emission ("Emission", Float) = 1
_BaseColor ("BaseColor", 2D) = "white" { }
_Cubemap ("Cubemap", Cube) = "white" { }
_UVSpeed ("UVSpeed", Vector) = (0,0,0,0)
}
SubShader {
 LOD 100
 Tags { "RenderType" = "Opaque" }
 Pass {
  Name "Unlit"
  LOD 100
  Tags { "LIGHTMODE" = "FORWARDBASE" "RenderType" = "Opaque" }
  GpuProgramID 7166
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