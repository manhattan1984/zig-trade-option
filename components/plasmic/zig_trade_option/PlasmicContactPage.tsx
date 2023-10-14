// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 626ggfSgCYVT2YHifhdAKj
// Component: 9yuUnr0b4iU7

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Contact from "../../Contact"; // plasmic-import: Zv0E8bU47CEO/component

import { useScreenVariants as useScreenVariantsvUzx0AI3UQDj } from "./PlasmicGlobalVariant__Mobile"; // plasmic-import: vUZX0aI3uQDj/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_zig_trade_option.module.css"; // plasmic-import: 626ggfSgCYVT2YHifhdAKj/projectcss
import sty from "./PlasmicContactPage.module.css"; // plasmic-import: 9yuUnr0b4iU7/css

import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: PkgiQ06t6T3P/icon
import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: LMp0JIORsKXg/icon

createPlasmicElementProxy;

export type PlasmicContactPage__VariantMembers = {};
export type PlasmicContactPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactPage__VariantsArgs;
export const PlasmicContactPage__VariantProps = new Array<VariantPropType>();

export type PlasmicContactPage__ArgsType = {};
type ArgPropType = keyof PlasmicContactPage__ArgsType;
export const PlasmicContactPage__ArgProps = new Array<ArgPropType>();

export type PlasmicContactPage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  svg?: p.Flex<"svg">;
};

export interface DefaultContactPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContactPage__RenderFunc(props: {
  variants: PlasmicContactPage__VariantsArgs;
  args: PlasmicContactPage__ArgsType;
  overrides: PlasmicContactPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    mobile: useScreenVariantsvUzx0AI3UQDj()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicContactPage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicContactPage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicContactPage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__hyTiM)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rpPcm
                )}
              >
                {"Contact Us"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jCpLs
                )}
              >
                {"Let us  know how we can help."}
              </div>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qJW)}
              >
                <Contact
                  className={classNames("__wab_instance", sty.contact__jLvqZ)}
                  slot2={
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__ssmoG
                      )}
                      component={Link}
                      href={"mailto:support@aquamining.com"}
                      platform={"nextjs"}
                    >
                      {"support@zigtradeoption.com"}
                    </p.PlasmicLink>
                  }
                  slot3={"Email Us"}
                />

                <Contact
                  className={classNames("__wab_instance", sty.contact___1RRzD)}
                  slot={"Visit our office HQ."}
                  slot2={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hOhtg
                      )}
                    >
                      {"3869 Kingsbury Dr\nMarion Station, Maryland(MD), 21838"}
                    </div>
                  }
                  slot3={"Visit Us"}
                />

                <Contact
                  className={classNames("__wab_instance", sty.contact__fu3Uu)}
                  slot={"Mon-Fri from 8am to 4pm."}
                  slot2={
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__jAnAs
                      )}
                      component={Link}
                      href={"tel:(123)456-7890"}
                      platform={"nextjs"}
                    >
                      {"(123) 456-7890"}
                    </p.PlasmicLink>
                  }
                >
                  <Icon13Icon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                </Contact>
              </p.Stack>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "svg"],
  section: ["section", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactPage__VariantsArgs;
    args?: PlasmicContactPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContactPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicContactPage__ArgProps,
          internalVariantPropNames: PlasmicContactPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactPage";
  } else {
    func.displayName = `PlasmicContactPage.${nodeName}`;
  }
  return func;
}

export const PlasmicContactPage = Object.assign(
  // Top-level PlasmicContactPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicContactPage
    internalVariantProps: PlasmicContactPage__VariantProps,
    internalArgProps: PlasmicContactPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Contact",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContactPage;
/* prettier-ignore-end */
