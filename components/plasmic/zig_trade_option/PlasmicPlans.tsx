// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 626ggfSgCYVT2YHifhdAKj
// Component: ZEYretqYQjEc

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/host";

import PlansPage from "../../PlansPage"; // plasmic-import: cl1GdMVQa0_D/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_zig_trade_option.module.css"; // plasmic-import: 626ggfSgCYVT2YHifhdAKj/projectcss
import sty from "./PlasmicPlans.module.css"; // plasmic-import: ZEYretqYQjEc/css

createPlasmicElementProxy;

export type PlasmicPlans__VariantMembers = {};
export type PlasmicPlans__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlans__VariantsArgs;
export const PlasmicPlans__VariantProps = new Array<VariantPropType>();

export type PlasmicPlans__ArgsType = {};
type ArgPropType = keyof PlasmicPlans__ArgsType;
export const PlasmicPlans__ArgProps = new Array<ArgPropType>();

export type PlasmicPlans__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  plansPage?: Flex__<typeof PlansPage>;
};

export interface DefaultPlansProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPlans__RenderFunc(props: {
  variants: PlasmicPlans__VariantsArgs;
  args: PlasmicPlans__ArgsType;
  overrides: PlasmicPlans__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

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
            id={"#plans"}
          >
            <PlansPage
              data-plasmic-name={"plansPage"}
              data-plasmic-override={overrides.plansPage}
              className={classNames("__wab_instance", sty.plansPage)}
            />
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "plansPage"],
  section: ["section", "plansPage"],
  plansPage: ["plansPage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  plansPage: typeof PlansPage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlans__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlans__VariantsArgs;
    args?: PlasmicPlans__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlans__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlans__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPlans__ArgProps,
          internalVariantPropNames: PlasmicPlans__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlans__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlans";
  } else {
    func.displayName = `PlasmicPlans.${nodeName}`;
  }
  return func;
}

export const PlasmicPlans = Object.assign(
  // Top-level PlasmicPlans renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    plansPage: makeNodeComponent("plansPage"),

    // Metadata about props expected for PlasmicPlans
    internalVariantProps: PlasmicPlans__VariantProps,
    internalArgProps: PlasmicPlans__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPlans;
/* prettier-ignore-end */
