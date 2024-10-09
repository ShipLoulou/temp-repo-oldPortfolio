
export default function FormationCard({ image, alt, title, children }) {
  return (
    <>
        <img src={image} alt={alt} />
        <div>
            <h2>
                {title}
            </h2>
            <p>
                {children}
            </p>
        </div>
    </>
  )
}
