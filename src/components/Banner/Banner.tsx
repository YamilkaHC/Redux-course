const BannerPage = () => {
    return (
        <div className="header">
            <div className="hr-vertial"></div>
            <div className=" d-flex justify-content-between logo  pb-0">
                <img alt="logo" width={120} src="/assets/logo.svg" />
            </div>

            <div className="d-flex justify-content-between">
                <div className="header-left ">
                    <div className="hr-horizontal"></div>
                    <h1 className=" pt-5 header-m-5 mt-5 text-start">POKEDUX</h1>
                    <a href="#search-sections" className="header-m-5 align-items-center button-header d-flex  justify-content-center">
                        <img alt="pokeball button" src="/assets/pokemonButton.svg" />
                        See pokemons
                    </a>
                    <div className="pokeball header-m-5  float-area">
                        <img alt="pokeball" className="m-auto floating-img" src="/assets/pokeball.svg" />
                    </div>
                </div>
                <div className="header-rigth"></div>
            </div>
            <div className="hr-horizontal top-1"></div>
        </div>

    )
}
export default BannerPage;