import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { CommonModule } from "@angular/common";
import { PortfolioComponent } from "./portfolio.component";
import { ComponentsModule } from "./components/components.module";
import { RouterModule } from "@angular/router";
import { PortfolioRoutingModule } from "./portfilio-routing.module";

@NgModule({
    declarations: [LayoutComponent, PortfolioComponent],
    imports: [CommonModule, ComponentsModule, RouterModule, PortfolioRoutingModule],
    providers: [],
})
export class PortfolioModule {}