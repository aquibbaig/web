import Link from 'next/link'

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href} target="blank">
        <a {...otherProps} />
      </Link>
      <style jsx>{`
        a {
          font-weight: 500;
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
