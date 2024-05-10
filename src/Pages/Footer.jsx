
const Footer = () => {
	return (
		<footer class="" id="Footer">
			<div class="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
				<div class="md:flex md:justify-between">
					<div class="mb-6 md:mb-0">
						<a href="#" class="flex items-center">
							{/* logo kelas */}
							<img
								src="/LogoKriwen.png"
								alt=""
								className="h-[5rem] w-[5rem] right-2 relative rounded-full brightness-200"
							/>
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
						</a>
					</div>
					<div class="grid grid-cols-2 sm:grid-cols-3">
						<div className="mr-4">
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">DIBUAT OLEH</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2">
									<a href="https://instagram.com/motthy0?igshid=OGQ5ZDc2ODk2ZA==" class="hover:underline">
										Reno Zajraa F
									</a>
								</li>
							</ul>
						</div>
						<div className="ml-4">
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">Ikuti kami</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2">
									<a href="https://instagram.com/11pplg2?igshid=OGQ5ZDc2ODk2ZA==" class="hover:underline ">
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<div class="flex mt-4 justify-center sm:mt-0">
						<p className="text-[0.7rem] text-white opacity-70">
							© {new Date().getFullYear()} BA Aisyiyah Kriwen 2| Di Kelola Oleh Reno Zajraa F
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
