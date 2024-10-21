import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold bg-blue-500  text-white border border-1 border-black py-2 rounded-full w-16 mx-auto">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">Страница не найдена</h1>
          <p className="mt-6 text-base leading-7 text-black">К сожалению, мы не смогли найти страницу, которую вы ищете.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6 max-[350px]:flex-col max-[350px]:gap-y-5">
            <Link
              href="/"
              className="rounded-md bg-blue-500 border border-1 border-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-blue-500 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              На Главную
            </Link>
            <Link href="#" className="text-sm font-semibold text-black hover:underline hover:underline-offset-4">
              Обратитесь в службу поддержки <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}