<script lang="ts">
	function getAge(dateString: string): number {
		let today = new Date();
		let birthDate = new Date(dateString);
		let age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	}
</script>

<header>
	<h1>Mazylol</h1>
	<aside><i>a terrible programmer</i></aside>
</header>

<section>
	<h2>What I Do <i>sometimes</i></h2>
	<p>
		I am a <b>{getAge('2006-09-05')}</b> year old student that likes to do pretty much everything. Jack of all trades, master of none. I started making discord bots with python during the pandemic and things kind of just went from there.
	</p>
</section>

<section>
	<h2>Stuff I Do</h2>
	<ul>
		<li>Discord Bots</li>
		<ul>
			<li><a href="https://github.com/mazylol/kodi">Kodi</a> (programming info bot) (C++)</li>
			<li><a href="https://github.com/mazylol/fido">Fido</a> (random dog pictures) (Rust)</li>
			<li>
				<a href="https://github.com/mazylol/discord.yaml">discord.yaml</a> (build a bot in completely in yaml)
				(C++)
			</li>
		</ul>
        <li>Websites</li>
        <ul>
            <li><a href="https://mazylol.com"><i>this one</i></a></li>
            <li><a href="https://esn.mazylol.com">ESN</a>, a website that hosts content produced by my schools sports network</li>
        </ul>
		<li>Libraries</li>
		<ul>
			<li>
				<a href="https://github.com/mazylol/QuickLED">QuickLED</a>, a platformio library to make
				using LEDs slightly easier
			</li>
			<li>
				<a href="https://github.com/mazylol/ultimate-bogo">ultimate-bogo</a>, a multithreaded
				bogosort implementation in C++ (high risk, high reward)
			</li>
            <li>
                <a href="https://github.com/mazylol/twelvedata-cpp">twelvedata-cpp</a>, a request handler and deserializer for <a href="https://twelvedata.com">Twelvedata</a>
            </li>
		</ul>
		<li>*NIX</li>
		<ul>
			<li><a href="https://github.com/mazylol/dwm">dwm</a> config</li>
			<li><a href="https://github.com/mazylol/dmenu">dmenu</a> config</li>
			<li><a href="https://github.com/mazylol/slstatus">slstatus</a> config</li>
		</ul>
		<li>3D Modeling/Printing</li>
		<ul>
			<li>
				I made a DC power source for my schools robotics team. Encased in a model of my own design. Hardware is two lead-acid batteries, dc-dc buck converter, switch, xt-60 connectors, and some hot glue
			</li>
            <li>
                Got tired of cranking my coffee grinder. Made a coupling for it that attaches to a 12v motor I took from a traxxas rc car
            </li>
		</ul>
	</ul>
</section>

<section>
	<h2>Languages I Like</h2>
	<ul>
		<li>C/C++</li>
		<li>Go</li>
		<li>Rust</li>
        <li>Kotlin</li>
		<li>Java <i>(sometimes)</i></li>
        <li>JS/TS</li>
	</ul>
</section>

<section>
	<h2>Software I Like</h2>
	<ul>
		<li>Neovim</li>
        <li>Hyprland</li>
		<li>Autodesk Fusion</li>
	</ul>
</section>

<section>
	<h2>Links</h2>
	<ul>
        <li><a href="https://youtube.com/@bitwhyze">YouTube</a></li>
		<li><a href="https://github.com/mazylol">Github</a></li>
		<li><a href="https://twitter.com/mazylol">Twitter</a></li>
	</ul>
</section>

<section>
	<p style="text-indent: 100%; white-space: nowrap; overflow: hidden;">DROP TABLE production;</p>
</section>
