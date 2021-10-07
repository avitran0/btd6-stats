//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "BenjaminMatrix" {
Properties {
_OutlineColor ("Outline Color", Color) = (0,0,0,1)
_CellSize ("CellSize", Float) = 1
_OffsetY ("OffsetY", Float) = 0
_DisplaceDirection ("DisplaceDirection", Vector) = (0,1,0,0)
_BenjaminBaseDiffuse ("BenjaminBaseDiffuse", 2D) = "white" { }
_Transform ("Transform", Range(0, 1)) = 0
_texcoord ("", 2D) = "white" { }
}
SubShader {
 LOD 100
 Tags { "QUEUE" = "Transparent" "RenderType" = "Transparent" }
 Pass {
  LOD 100
  Tags { "QUEUE" = "Transparent" "RenderType" = "Transparent" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  GpuProgramID 34609
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