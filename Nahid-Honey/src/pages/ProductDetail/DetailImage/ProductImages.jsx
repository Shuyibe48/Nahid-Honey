import DetailImage from "./DetailImage";

function ProductImages() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvy_e9iWGFeryLF0mifBXjM5FZpyRU_JgJjA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvKTCWHHmsA1L9-d6v2zCV6p1TygDdxDFg-9J8EWS5ZXxgGUt4_HlFXDJQ8ennbjkWRQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Pf5eIH80Be-itibzwJuME1R8UR_PCBW5RA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5ANIjax-AS8jx_Naffv0Wnn1FudA7fvoGh6Nq9YCZYuMQybZeRjVw0QkVQSl0JWQJyE&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMe108fEsBp1i6eJNwY3JyPfrluqBbbGEKjRqUjyC2AaIbCEK5YjQe1c4LJZkimjEzUs&usqp=CAU',
  ];

  return (
    <div>
      <DetailImage images={images} />
    </div>
  );
}

export default ProductImages;