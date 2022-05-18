import Link from 'next/link'

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href} target="blank">
        <a {...otherProps} />
      </Link>
      <style jsx>{`
        a {
          font-weight: 600;
          color: #0D52F1;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
