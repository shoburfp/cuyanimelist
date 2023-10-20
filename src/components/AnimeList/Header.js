import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between p-4">
            <h1 className="md:text-2xl text-lg font-bold text-white">{title}</h1>
            {
                linkHref && linkTitle ?
                    <Link href={linkHref} className="md:text-xl text-md underline hover:text-red-600 text-white transition-all">
                        {linkTitle}
                    </Link>
                    : null
            }

        </div>
    )
}

export default Header