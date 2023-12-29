import React from "react";
import { Account } from "./Account";
import { Component } from "./Component";
import { Dashboard } from "./Dashboard";
import { ESignstures } from "./ESignstures";
import { Feeds } from "./Feeds";
import { Frame2 } from "./Frame2";
import { Posts } from "./Posts";
import { Setting } from "./Setting";
import { SocialAccounts } from "./SocialAccounts";
import { Team } from "./Team";
import { Template } from "./Template";
import { UserProfile } from "./UserProfile";
import { Webhooks } from "./Webhooks";
import { Workflows } from "./Workflows";
import "./style.css";

export const ClickLink = () => {
  return (
    <div className="click-link">
      <div className="div-3">
        <div className="overlap-9">
          <div className="rectangle" />
          <div className="text-wrapper-14">Clic Data Converter</div>
        </div>
        <div className="rectangle-2" />
        <div className="overlap-10">
          <div className="text-wrapper-15">S-Link in Bio Page</div>
          <img className="solar-alt-arrow-down" alt="Solar alt arrow down" src="solar-alt-arrow-down-linear.svg" />
        </div>
        <div className="overlap-11">
          <div className="group">
            <div className="overlap-group-2">
              <div className="vector-wrapper">
                <img className="vector" alt="Vector" src="vector.svg" />
              </div>
              <div className="text-wrapper-16">logo</div>
              <img className="mdi-bell-outline" alt="Mdi bell outline" src="mdi-bell-outline.svg" />
            </div>
          </div>
          <Frame2 className="frame" />
        </div>
        <div className="overlap-12">
          <img className="vector-2" alt="Vector" src="image.svg" />
          <div className="rectangle-3" />
          <p className="text-wrapper-17">Check if S-Link handle is availible. Handles mus be at least 3 character</p>
          <div className="frame-2">
            <div className="text-wrapper-18">Enter handle</div>
          </div>
          <div className="rectangle-4" />
          <div className="text-wrapper-19">Check</div>
        </div>
        <div className="overlap-13">
          <div className="overlap-wrapper">
            <div className="overlap-14">
              <img className="tabler-social" alt="Tabler social" src="tabler-social.svg" />
              <div className="rectangle-5" />
              <img className="rectangle-6" alt="Rectangle" src="rectangle-141.svg" />
              <div className="create-new">Create&nbsp;&nbsp;New</div>
              <img className="line" alt="Line" src="line-22.svg" />
              <div className="rectangle-7" />
              <img className="vector-3" alt="Vector" src="vector-2.svg" />
              <img className="vector-4" alt="Vector" src="vector-3.svg" />
              <Dashboard className="dashboard-instance" />
              <ESignstures className="e-signstures-instance" />
              <Team className="design-component-instance-node" />
              <Workflows className="workflows-instance" property1="default" />
              <Template className="template-instance" />
              <img className="material-symbols" alt="Material symbols" src="material-symbols-account-box.svg" />
              <img className="eos-icons-templates" alt="Eos icons templates" src="eos-icons-templates.svg" />
              <img className="fluent-people-team" alt="Fluent people team" src="fluent-people-team-24-filled.svg" />
              <Setting className="setting-instance" property1="default" />
              <img className="ant-design-setting" alt="Ant design setting" src="ant-design-setting-filled.svg" />
              <img className="ph-signature-bold" alt="Ph signature bold" src="ph-signature-bold.svg" />
              <img className="mingcute-link-fill" alt="Mingcute link fill" src="mingcute-link-fill.svg" />
              <Posts className="posts-instance" />
              <img
                className="solar-posts-carousel"
                alt="Solar posts carousel"
                src="solar-posts-carousel-horizontal-bold.svg"
              />
              <Webhooks className="webhooks-instance" />
              <img className="logos-hookstate" alt="Logos hookstate" src="logos-hookstate.svg" />
              <SocialAccounts className="social-accounts-instance" />
              <img className="arcticons-social" alt="Arcticons social" src="arcticons-social.svg" />
              <UserProfile className="user-profile-instance" />
              <img className="iconamoon-profile" alt="Iconamoon profile" src="iconamoon-profile-fill.svg" />
              <Feeds className="feeds-instance" />
              <img className="fluent-feed" alt="Fluent feed" src="fluent-feed-20-filled.svg" />
              <Account className="account-instance" />
              <img className="carbon-account" alt="Carbon account" src="carbon-account.svg" />
            </div>
          </div>
          <Component className="component-15" polygon="polygon-7-3.svg" property1="default" />
        </div>
      </div>
    </div>
  );
};

