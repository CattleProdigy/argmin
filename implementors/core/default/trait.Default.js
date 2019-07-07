(function() {var implementors = {};
implementors["argmin"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.FletcherReeves.html\" title=\"struct argmin::solver::conjugategradient::beta::FletcherReeves\">FletcherReeves</a>",synthetic:false,types:["argmin::solver::conjugategradient::beta::FletcherReeves"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibiere.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibiere\">PolakRibiere</a>",synthetic:false,types:["argmin::solver::conjugategradient::beta::PolakRibiere"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibierePlus.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibierePlus\">PolakRibierePlus</a>",synthetic:false,types:["argmin::solver::conjugategradient::beta::PolakRibierePlus"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.HestenesStiefel.html\" title=\"struct argmin::solver::conjugategradient::beta::HestenesStiefel\">HestenesStiefel</a>",synthetic:false,types:["argmin::solver::conjugategradient::beta::HestenesStiefel"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/gaussnewton/gaussnewton_method/struct.GaussNewton.html\" title=\"struct argmin::solver::gaussnewton::gaussnewton_method::GaussNewton\">GaussNewton</a>",synthetic:false,types:["argmin::solver::gaussnewton::gaussnewton_method::GaussNewton"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.ArmijoCondition.html\" title=\"struct argmin::solver::linesearch::condition::ArmijoCondition\">ArmijoCondition</a>",synthetic:false,types:["argmin::solver::linesearch::condition::ArmijoCondition"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.WolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::WolfeCondition\">WolfeCondition</a>",synthetic:false,types:["argmin::solver::linesearch::condition::WolfeCondition"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.StrongWolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::StrongWolfeCondition\">StrongWolfeCondition</a>",synthetic:false,types:["argmin::solver::linesearch::condition::StrongWolfeCondition"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.GoldsteinCondition.html\" title=\"struct argmin::solver::linesearch::condition::GoldsteinCondition\">GoldsteinCondition</a>",synthetic:false,types:["argmin::solver::linesearch::condition::GoldsteinCondition"]},{text:"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/hagerzhang/struct.HagerZhangLineSearch.html\" title=\"struct argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch\">HagerZhangLineSearch</a>&lt;P&gt;",synthetic:false,types:["argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch"]},{text:"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/morethuente/struct.MoreThuenteLineSearch.html\" title=\"struct argmin::solver::linesearch::morethuente::MoreThuenteLineSearch\">MoreThuenteLineSearch</a>&lt;P&gt;",synthetic:false,types:["argmin::solver::linesearch::morethuente::MoreThuenteLineSearch"]},{text:"impl&lt;O:&nbsp;<a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/neldermead/struct.NelderMead.html\" title=\"struct argmin::solver::neldermead::NelderMead\">NelderMead</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminAdd.html\" title=\"trait argmin::prelude::ArgminAdd\">ArgminAdd</a>&lt;O::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, O::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;O::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, O::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, O::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::neldermead::NelderMead"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/newton/newton_method/struct.Newton.html\" title=\"struct argmin::solver::newton::newton_method::Newton\">Newton</a>",synthetic:false,types:["argmin::solver::newton::newton_method::Newton"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"argmin/solver/simulatedannealing/enum.SATempFunc.html\" title=\"enum argmin::solver::simulatedannealing::SATempFunc\">SATempFunc</a>",synthetic:false,types:["argmin::solver::simulatedannealing::SATempFunc"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/cauchypoint/struct.CauchyPoint.html\" title=\"struct argmin::solver::trustregion::cauchypoint::CauchyPoint\">CauchyPoint</a>",synthetic:false,types:["argmin::solver::trustregion::cauchypoint::CauchyPoint"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/dogleg/struct.Dogleg.html\" title=\"struct argmin::solver::trustregion::dogleg::Dogleg\">Dogleg</a>",synthetic:false,types:["argmin::solver::trustregion::dogleg::Dogleg"]},{text:"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/steihaug/struct.Steihaug.html\" title=\"struct argmin::solver::trustregion::steihaug::Steihaug\">Steihaug</a>&lt;P&gt;",synthetic:false,types:["argmin::solver::trustregion::steihaug::Steihaug"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
