export default function header(){
    return(
        <header>
        <div class = "flush-bg" style="display: flex; flex-direction: column; justify-content: flex-end; aspect-ratio: 8;  background-image: url('/shared/bg trial.png'); background-repeat: no-repeat; background-size: cover; background-size: 100% 100%">
        <nav>
            <div class="clearfix">
                <div class="dropdown-group align-right">
                    <div class="dropdown-button">!!!</div>
                    <div class="dropdown-content button-group">
                        <a href="/art/index.html">Art</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                
                <div class="button-group inline-block align-right">
                    <a href="/index.html">Home</a>
                    <div class="inline-block">|</div>
                    <a href="/about.html">About</a>
                    <div class="inline-block">|</div>
                    <a href="/contact.html">Contact</a>
                </div>                                                                                                   
                
            </div>
            
        </nav>
        </div>
    </header>
    )
}