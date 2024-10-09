type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Params) {
  return <>
    <h1>Slug: {params.slug}</h1>
    <p>haidaqn 123</p>
    <p>welcome to Ha Noi City</p>
  </>
}
