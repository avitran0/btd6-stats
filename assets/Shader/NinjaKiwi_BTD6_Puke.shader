//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/Puke" {
Properties {
_Noise01 ("Noise01", 2D) = "white" { }
_Noise01UVTile ("Noise01UVTile", Vector) = (1,0.7,0,0)
_Noise02 ("Noise02", 2D) = "white" { }
_Noise02UVTile ("Noise02UVTile", Vector) = (3,0.4,0,0)
_Color0 ("Color 0", Color) = (0.1098039,0.6313726,0.2421341,1)
_Color1 ("Color 1", Color) = (0.7549813,1,0.4481132,1)
_Color2 ("Color2", Color) = (0.7549813,1,0.4481132,1)
_2ndTexStep ("2ndTexStep", Range(0, 1)) = 0.57
_1stTexStep ("1stTexStep", Range(0, 1)) = 0.57
_Tex2SpeedXY ("Tex2SpeedXY", Vector) = (1,1,0,0)
_Tex1SpeedXY ("Tex1SpeedXY", Vector) = (1,1,0,0)
_VerticalMaskOffset ("VerticalMaskOffset", Float) = 0
_VertcialMaskDistribution ("VertcialMaskDistribution", Float) = 1
[Toggle(_USE2NDTEX_ON)] _Use2ndTex ("Use2ndTex", Float) = 0
[Toggle(_USEVERTEXCOLOR_ON)] _UseVertexColor ("UseVertexColor", Float) = 0
}
SubShader {
 LOD 100
 Tags { "RenderType" = "Opaque" }
 Pass {
  Name "Unlit"
  LOD 100
  Tags { "LIGHTMODE" = "FORWARDBASE" "QUEUE" = "Transparent" "RenderType" = "Transparent" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  ZWrite Off
  GpuProgramID 6133
Program "vp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Local Keywords { "_USEVERTEXCOLOR_ON" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Local Keywords { "_USE2NDTEX_ON" }
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Local Keywords { "_USEVERTEXCOLOR_ON" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Local Keywords { "_USE2NDTEX_ON" }
"// shader disassembly not supported on DXBC"
}
}
}
}
CustomEditor "ASEMaterialInspector"
}