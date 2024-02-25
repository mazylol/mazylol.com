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
	<aside>My website doesn't need to be flashy to be effective!</aside>
</header>

<section>
	<h2>Tiny Bit About Me</h2>
	<p>
		I am a <b>{getAge('2006-09-05')}</b> year old student that likes to do random stuff that I find interesting. I cursed myself with this hobby/obsession while in quarantine when I made the mistake of learning Python. Now here we are.</p>
</section>

<section>
	<h2>Stuff I Do</h2>
	<ul>
		<li>Discord Bots</li>
            <ul>
                <li><a href="https://github.com/mazylol/kodi">Kodi</a> (programming info bot) (C++)</li>
                <li><a href="https://github.com/mazylol/fido">Fido</a> (random dog pictures) (Rust)</li>
                <li><a href="https://github.com/mazylol/buildabot">Buildabot</a> (build a bot in completely in yaml) (C++)</li>
            </ul>
		<li>Libraries</li>
            <ul>
                <li><a href="https://github.com/mazylol/QuickLED">QuickLED</a>, a platformio library to make using LEDs easier</li>
                <li><a href="https://github.com/mazylol/ultimate-bogo">ultimate-bogo</a>, a multithreaded bogosort implementation in C++ (high risk, high reward)</li>
                <li>A lot of API deserialization libraries. Usually in Go or C++
            </ul>
		<li>*NIX</li>
            <ul>
                <li><a href="https://github.com/mazylol/dwm">dwm</a> config</li>
                <li><a href="https://github.com/mazylol/dmenu">dmenu</a> config</li>
                <li><a href="https://github.com/mazylol/slstatus">slstatus</a> config</li>
            </ul>
        <li>3D Modeling/Printing</li>
            <ul>
                <li>I designed a ketchup centrifuge to get all of the ketchup off of the walls of the bottle. Spins violently via a DC motor.
            </ul>
	</ul>
</section>

<section>
	<h2>Languages I Like</h2>
	<ul>
		<li>C/C++</li>
        <li>Go</li>
		<li>Rust</li>
		<li>Java <i>(sometimes)</i></li>
	</ul>
</section>

<section>
	<h2>Software I Like</h2>
	<ul>
		<li>Neovim</li>
		<li><i>software that sucks less ;)</i></li>
        <li>Autodesk Fusion</li>
	</ul>
</section>

<section>
	<h2>Links</h2>
	<ul>
		<li><a href="https://github.com/mazylol">Github</a></li>
		<li><a href="https://twitter.com/mazylol">Twitter</a></li>
	</ul>
</section>

<section>
    <p style="text-indent: 100%; white-space: nowrap; overflow: hidden;">DROP TABLE production;</p>
</section>
