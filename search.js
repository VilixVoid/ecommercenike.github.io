function search(){
	wave(title);
	wave(titleShadow);
	illio.rotate.y += isSpinning ? -0.03 : 0;
	t += tStep;
	illio.updateRenderGraph();
	requestAnimationFrame(search);
}
search();