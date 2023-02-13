export const getAssetUrl = (applicationId?: string, asset?: string) => {
	if (!asset && applicationId) return `https://dcdn.dstn.to/app-icons/${applicationId}`;
	if (asset?.startsWith("mp:external")) return `https://media.discordapp.net/${asset.replace("mp:", "")}`;
	if (asset) return `https://cdn.discordapp.com/app-assets/${applicationId}/${asset}.webp`;

	return undefined;
};
