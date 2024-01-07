


export default function Gallery(prop){
	var name = prop.name != undefined ? prop.name : 'default';
	const galleryFiles = require.context(`./gallery/${name}`);

	
	return (
		<>
		<p>{galleryFiles}</p>
		<img src={''} />
		</>
		);
}